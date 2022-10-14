const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    ...INIT_ZOOM

});

var activeSubtitle = null;
var activeSubtitleCount = null;
var autoplay = false
var presentationDelay = 5 * 1000

loadLegend = (legend, legendCount) => {
    var layers = legend.filter((value, index) => { return (index % 2) == 0 });
    var colors = legend.filter((value, index) => { return (index % 2) != 0 });
    let legendEl = document.getElementById('legend');
    legendEl.style.height = `${layers.length * 18}px`
    legendEl.style.display = 'block'
    legendEl.innerHTML = ''
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.className = 'legend-value';
        let count = legendCount[layer] ? legendCount[layer] : 0
        value.innerHTML = `${layer} (${count})`;
        item.appendChild(key);
        item.appendChild(value);
        legendEl.appendChild(item);
    }
}

showModalLegend = (legend, legendCount) => {
    var layers = legend.filter((value, index) => { return (index % 2) == 0 });
    var colors = legend.filter((value, index) => { return (index % 2) != 0 });
    const legendEl = document.getElementById('modal-text');
    legendEl.style.height = `${layers.length * 22}px`
    legendEl.innerHTML = ''
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
        var value = document.createElement('span');
        value.className = 'legend-value';
        let count = legendCount[layer] ? legendCount[layer] : 0
        value.innerHTML = `${layer} (${count})`;
        item.appendChild(key);
        item.appendChild(value);
        legendEl.appendChild(item);
    }

}

loadGeoJSON = (loteName, styles) => {
    return fetch(`data/${loteName}.geojson`
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(async function (geoJson) {
            map.addSource(loteName, {
                "type": "geojson",
                "data": geoJson
            })
            for (let style of styles) {
                map.addLayer(style)
            }
        });

}

const getButtonProps = (active) => {
    return {
        'text': active ? 'Pausar Apresentação' : 'Iniciar Apresentação',
        'color': active ? '#E0E0E0' : ''
    }
}

setCurrentChapter = async (currentSlideId) => {
    let projectSettings = getProjectSettings()
    let projectName = currentSlideId.split(getSeperatorId())[0]
    let loteName = currentSlideId.split(getSeperatorId())[1]
    let loteSettings = projectSettings[projectName].lotes.find(item => item.name == loteName)

    map.fitBounds(loteSettings.zoom);
    await loadGeoJSON(loteName, loteSettings.styles)
    activeSubtitle = loteSettings.legend
    activeSubtitleCount = loteSettings.legendCount
    if (!mobileScreen()) {
        loadLegend(activeSubtitle, activeSubtitleCount)
    }

}

unsetChapter = () => {
    let projectSettings = getProjectSettings()
    for (let projectName in projectSettings) {
        for (let lote of projectSettings[projectName].lotes) {
            for (let style of lote.styles) {
                try {
                    map.removeLayer(style.id)
                } catch (error) {

                }
            }
            try {
                map.removeSource(lote.name)
            } catch (error) {

            }
        }
    }
    const legend = document.getElementById('legend');
    legend.style.display = 'none'
}


hasSlideData = (projectName, loteName) => {
    let projectSettings = getProjectSettings()
    if (!Object.keys(projectSettings).includes(projectName)) return
    return projectSettings[projectName].lotes.find(item => item.name == loteName)
}

function plugin({ swiper, extendParams, on }) {
    extendParams({
        debugger: false,
    });

    on('slideChange', async () => {
        if (!swiper.slides[swiper.previousIndex]) return
        let previousSlideId = swiper.slides[swiper.previousIndex].getAttribute('id')
        let currentSlideId = swiper.slides[swiper.activeIndex].getAttribute('id')
        if (previousSlideId == currentSlideId) return
        if (previousSlideId || currentSlideId == "section") {
            let prevProjectName = previousSlideId.split(getSeperatorId())[0]
            let prevLoteName = previousSlideId.split(getSeperatorId())[1]
            if (hasSlideData(prevProjectName, prevLoteName)) {
                unsetChapter()
            }
        }
        let currProjectName = currentSlideId.split(getSeperatorId())[0]
        let currLoteName = currentSlideId.split(getSeperatorId())[1]
        if (!hasSlideData(currProjectName, currLoteName)) {
            document.getElementById("legend-icon").style.display = ''
            return
        }
        if (mobileScreen()) document.getElementById("legend-icon").style.display = 'block'
        await setCurrentChapter(currentSlideId)
    });

}

var swiperWidget = new Swiper(".swiper-app", {
    modules: [plugin],
    direction: "horizontal",
    autoplay: {
        delay: presentationDelay,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true
});

swiperWidget.autoplay.stop()

let buttonProps = getButtonProps(false)
$("#play-button").html(buttonProps.text);
$("#play-button").css('background-color', buttonProps.color);

getSlideIndex = (slideId) => {
    for (let [idx, el] of swiperWidget.slides.entries()) {
        if (el.getAttribute('id') == slideId) {
            return idx
        }
    }
}

mobileScreen = () => {
    return window.screen.width <= 960
}

connectEvents = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    map.on('load', () => {
        map.flyTo(INIT_ZOOM)
        document.getElementById('info').scrollTo(0, 0)
        /* map.on('mouseup', () => {
            console.log(map.getZoom())
            let bounds = map.getBounds()
            console.log([
                [bounds._sw.lng, bounds._sw.lat],
                [bounds._ne.lng, bounds._ne.lat]
            ])
        }); */
    })

    //map.scrollZoom.disable();
    map.addControl(new maplibregl.NavigationControl());

    document
        .querySelector('#summary-button')
        .addEventListener('click', (e) => {
            e.preventDefault();
            swiperWidget.slideTo(
                getSlideIndex('summary'),
                0
            );
        });

    document
        .querySelectorAll('a')
        .forEach(el => {
            if (el.getAttribute('id') && el.getAttribute('id').includes('summary-button')) {
                return
            }
            el.addEventListener('click', (e) => {
                e.preventDefault();
                swiperWidget.slideTo(
                    getSlideIndex(
                        e.target.getAttribute('id')
                    ),
                    0
                );
            });
        })

    var modal = document.getElementById("legend-modal");

    var btn = document.getElementById("legend-icon");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
        showModalLegend(activeSubtitle, activeSubtitleCount)
        modal.style.display = "block";
    }

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.addEventListener('resize', (event) => {
        if (mobileScreen()) {
            const legend = document.getElementById('legend');
            legend.style.display = ''
            let projectName = swiperWidget.slides[swiperWidget.activeIndex].getAttribute('id').split(getSeperatorId())[0]
            let loteName = swiperWidget.slides[swiperWidget.activeIndex].getAttribute('id').split(getSeperatorId())[1]
            if (hasSlideData(projectName, loteName)) {
                document.getElementById("legend-icon").style.display = 'block'
            }
        } else {
            document.getElementById("legend-icon").style.display = ''
            modal.style.display = "none"
            loadLegend(activeSubtitle, activeSubtitleCount)
        }
    }, true);

    $('#play-button').on('click', async () => {
        let currentSlideIndex = swiperWidget.previousIndex
        let buttonProps = getButtonProps(!autoplay)
        $("#play-button").html(buttonProps.text);
        $("#play-button").css('background-color', buttonProps.color);
        swiperWidget.slideTo(currentSlideIndex);
        autoplay ? await swiperWidget.autoplay.stop() : await swiperWidget.autoplay.start()
        autoplay = !autoplay

    });
}

getSubtitleSetting = (legend, name) => {
    let subtitleSetting = []
    for (let legendId of legend) {
        state = SUBTITLE_STATES.find(item => item.id == legendId)
        if (!state) continue
        subtitleSetting.push(state.name, state.color)
    }
    return subtitleSetting
}

getCoverSlide = () => {
    return $("<div/>", {
        class: "swiper-slide"
    }).append(
        $("<div/>", {})
            .append(
                $("<div/>", {
                    style: "text-align: center;"
                }).append(
                    $("<img/>", {
                        class: "logo",
                        src: "./images/om.png"
                    })
                )
            )
            .append(
                $("<h2/>", {
                    class: "title",
                    text: "Projetos"
                })
            )
    )
}

const getSectionSlide = (name) => {
    return $("<div/>", {
        id: 'section',
        class: "swiper-slide center title"
    }).append(
        $("<div/>", {

        })
            .append(
                $("<h2/>", {
                    text: name
                })
            )
    )
}

getSeperatorId = () => {
    return '-0-'
}

getSummarySlide = () => {
    let content = $("<div/>", {
        id: "summary",
        class: "swiper-slide"
    })
    let div = $("<div/>", {
        class: "description"
    })
    div.append(
        $("<h2/>", {
            class: "title",
            text: "Sumário"
        })
    )

    let executed = $("<ul/>", {})
    let notExecuted = $("<ul/>", {})
    let projects = getProjectSettings()
    for (let projectName in projects) {
        let group = (projects[projectName].executed) ? executed : notExecuted
        group.append(
            $("<li/>", {})
                .append(
                    $("<a/>", {

                        href: "#"

                    })
                        .append(
                            $("<h3/>", {
                                id: `${projectName}${getSeperatorId()}${projects[projectName].lotes[0].name}`,
                                text: projects[projectName].title
                            })
                        )
                )
        )
    }

    let ulMain = $("<ul/>", {})



    ulMain.append(
        $("<li/>", {
            class: "group",
            text: "Em Execução"
        }).append(
            notExecuted
        )
    )

    ulMain.append(
        $("<li/>", {
            class: "group",
            text: "Executado"
        }).append(
            executed
        )
    )

    div.append(ulMain)

    return content.append(div)
}

geDefaultSlide = (slideId, title, description, subtitle, loteDescription) => {
    let content = $("<div/>", {
        id: slideId,
        class: "swiper-slide"
    })
    let div = $("<div/>", {
        class: "description"
    })
    div.append(
        $("<h2/>", {
            class: "title",
            text: title
        })
    )
    if (description) {
        div.append(
            $("<h4/>", {
                text: description
            })
        )
    }
    if (subtitle) {
        div.append(
            $("<h3/>", {
                class: "subtitle"
            }).append(
                $("<b/>", {
                    text: subtitle
                })
            )
        )
        div.append(
            $("<b/>", {
                text: loteDescription
            })
        )
    }
    div.append($("<br/>"))
    return content.append(div)
}

const filterSections = (projects) => {
    let executed = []
    let notExecuted = []
    for (let projectName in projects) {
        let group = (projects[projectName].executed) ? executed : notExecuted
        let lotes = []
        for (let [idx, lote] of projects[projectName].lotes.entries()) {
            lotes.push({
                slideId: `${projectName}${getSeperatorId()}${lote.name}`,
                title: projects[projectName].title,
                description: projects[projectName].description,
                subtitle: lote.subtitle,
                loteDescription: lote.description
            })
        }
        group.push(lotes)
    }
    return { executed, notExecuted }
}

const loadSection = (name, sectionSlides) => {
    $("#slides-content").append(getSectionSlide(name))

    for (let lotes of sectionSlides) {
        for (var idx = 0; idx < lotes.length; idx++) {
            let { slideId, title, description, subtitle, loteDescription } = lotes[idx]
            if (idx == 0) {
                $("#slides-content").append(
                    geDefaultSlide(slideId, title, description, subtitle, loteDescription)
                )
                continue
            }
            $("#slides-content").append(
                geDefaultSlide(slideId, title, null, subtitle, loteDescription)
            )
        }
    }
}

loadSlides = () => {
    $("#slides-content").append(getCoverSlide())
    $("#slides-content").append(getSummarySlide())
    let projects = getProjectSettings()
    let { executed, notExecuted } = filterSections(projects)
    loadSection("Em Execução", notExecuted)
    loadSection("Executado", executed)
}

stopLoader = () => {
    document.getElementById("loader").style.display = 'none'
}

setProjectSettings = async () => {
    for (let projectName in PROJECTS) {
        let project = PROJECTS[projectName]
        for (let lote of project.lotes) {
            let subtitleSetting = getSubtitleSetting(lote.legend, lote.name)
            lote.legend = subtitleSetting
            lote.styles[0].paint['fill-color'] = [
                'match', ['string', ['get', 'situacao']], ...subtitleSetting, '#AAAAAA'
            ]
            let legendCount = await getLegendCount(lote.name)
            lote.legendCount = legendCount
        }
    }
    sessionStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))
}

getLegendCount = async (name) => {
    let count = {}
    let resp = await fetch(`./data/${name}.geojson`);
    let data = await resp.json();
    for (let i = data.features.length; i > 0; i--) {
        let feature = data.features[i - 1]
        if (count[feature.properties.situacao] == null) {
            count[feature.properties.situacao] = 1
            continue
        }
        count[feature.properties.situacao] += 1
    }
    return count
}

getProjectSettings = () => {
    return JSON.parse(sessionStorage.getItem('PROJECTS'))
}

main = async () => {
    await setProjectSettings()
    loadSlides()
    connectEvents()
    setTimeout(stopLoader, 2000)
}

main()