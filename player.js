const log = console.log.bind(console)

const e = function(selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
        return null
    } else {
        return element
    }
}

const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
        return []
    } else {
        return elements
    }
}

const appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)

let duration
let a = e('audio')

let controlPanel = e('.control-panel')
let info = e('#info')

let artist = e('.artist')
let name = e('.name')

let arraySong = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']

let songName = ['不再犹豫','偏偏喜欢你', '灰色轨迹', '光辉岁月']
let artists = ['Beyond', '陈百强', 'Beyond', 'Beyond']

let modeList = ['repeat', 'list', 'random']
let modeI = e('#mode-change')

let modeClass = ['icon-xunhuanbofang', 'icon-iconfontttpodicon1eps', 'icon-icon-test']

const bindEventCanplay = function() {
    a.addEventListener('canplay', function(event) {
        log('src canplay', a.src)
        // 这里必须通过判断当前的 controlPanel 是否是 active, 是active 才能触发 canplay ，
        // 否则会出现尚未点击播放的时候就已经触发canplay 了
        if (controlPanel.classList.contains('active')) {
            a.play()
        }

    })
}

const ClickPlay = function() {
    /*点击play的时候播放，再点击的时候暂停
    播放的时候显示出info 界面，并且转动音乐盘；
    暂停的时候不显示info 界面，音乐盘停止转动
    对play进行事件监听，当点击的时候通过判断info 页面和音乐盘是否是active状态来判断现在是播放还是暂停
    如果点击的时候发现里面的info和音乐盘都是active 说明现在正在播放，那么下一步就应该是去执行pause
    如果点击play 的时候发现里面的info和音乐盘都没有是active状态的话，说明现在是暂停，下一步应该是执行播放就是play。
    */
    let play = e('#play')
    play.addEventListener('click', function(event) {
        log('click play/pause')
        // 这里相当于实现了一个开关，但是不能直接用toggle，
        // 因为有无 active 的下面还有代码逻辑
        if (controlPanel.classList.contains('active')) {
            controlPanel.classList.remove('active')
            info.classList.remove('active')
            a.pause()
        } else {
            // 展示出info 和 controlPanel
            controlPanel.classList.add('active')
            info.classList.add('active')

            // 点击中甲的播放和暂停键位的时候，更新出歌手的和歌曲的信息
            let index = a.dataset.index
            let dataInfo = songData(index)
            artist.innerHTML = dataInfo[0]
            name.innerHTML = dataInfo[1]

            // 显示进度条的更新，包括歌曲名字和演唱者
            duration = a.duration
            setInterval(function() {
                let timeNow = a.currentTime
                let timePercent = timeNow / duration
                let timePercentMul =  timePercent * 100
                let bar = e('.bar')
                bar.style.width = timePercentMul + '%'
            }, 1000)
            let src = a.src
            log('src', src)
            // 这里有一个疑问，为什么在这里直接可以 play 呢?
            // 是因为上面的duration 是全局变量吗？
            a.play()
        }
    })
}

const PrevSong = function () {
    // 实现播放上一首歌
    // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
    let prev = e('.prev')
    prev.addEventListener('click', function () {
        log('click prev')
        // 切出 src, 因为a.src 是绝对路径
        let src = a.src.split('/').slice(-1)[0]
        let indexNow = arraySong.indexOf(src)
        // 算出上一首歌的 index 
        let indexPrev = indexNow - 1
        if (indexPrev < 0) {
            indexPrev = arraySong.length - 1
        }
        // 更改歌曲的 src,更新 index
        let strIndexPrev = String(indexPrev)
        a.dataset.index = strIndexPrev
        a.src = './audio/' + arraySong[indexPrev]

        // 点击上一首的时候也要把info 和 controlPanel 展示出来
        controlPanel.classList.add('active')
        info.classList.add('active')
    })
}

const NextSong = function () {
    // 实现播放下一首歌
    // 对 next 进行 click 事件监听，当点击的时候播放上一首歌曲
    let next = e('.next')
    next.addEventListener('click', function () {
        log('click next')
        let src = a.src.split('/').slice(-1)[0]
        let indexNow = arraySong.indexOf(src)
        let indexNext = (indexNow + 1) % arraySong.length
        a.src = './audio/' + arraySong[indexNext]

        let strIndexNext = String(indexNext)
        a.dataset.index = strIndexNext

        controlPanel.classList.add('active')
        info.classList.add('active')
    })
}

const songData = function (index) {
    // 根据index return 出相关的歌曲信息
    let dataSong = []
    dataSong.push(artists[index])
    dataSong.push(songName[index])
    return dataSong
}

const showInfo = function () {
    /*
    当点击一首歌之后，info 信息栏会显示出当前的歌曲名称和演唱的人
    通过获取到当前的播放audio的data-index的值，并转成数字
    声明两个个数组，第一个数组放演唱者信息
    第二数组放着歌曲名，通过index把对应的元素挂在info的显示栏里面
    */
    a.addEventListener('canplay', function(event) {
        let index = a.dataset.index
        let dataInfo = songData(index)
        artist.innerHTML = dataInfo[0]
        name.innerHTML = dataInfo[1]
    })

}

const timePercent = function(audio) {
    // 计算时间比例，显示进度条
    a.addEventListener('canplay', function(event) {
        duration = a.duration
        setInterval(function() {
            let timeNow = a.currentTime
            let timePercent = timeNow / duration
            let timePercentMul =  timePercent * 100
            let bar = e('.bar')
            bar.style.width = timePercentMul + '%'
        }, 1000)
    })
}

const indexNext = function () {
    // 找出不同歌曲的index
    let len = arraySong.length
    let src = a.src.split('/').slice(-1)[0]
    let indexNow = arraySong.indexOf(src)
    let indexNext = (indexNow + 1) % arraySong.length
    return indexNext
}

const bindEvnetEnded = function() {
    // 切换模式
    a.addEventListener('ended', function(event) {
        let indexOfModeList = modeI.dataset.index
        let modeNow = modeList[indexOfModeList]
        // log('modeNow', modeNow)
        if (modeNow === 'repeat') {
            log('in repeat')
            a.play()
            // log('indexOfModeList', indexOfModeList)
        } else if (modeNow === 'list') {
            log('in list')
            let src = a.src.split('/').slice(-1)[0]
            let indexNow = arraySong.indexOf(src)
            let indexNext = (indexNow + 1) % arraySong.length
            a.src = './audio/' + arraySong[indexNext]

            let strIndexNext = String(indexNext)
            a.dataset.index = strIndexNext

            controlPanel.classList.add('active')
            info.classList.add('active')

        } else if (modeNow === 'random') {
            log('in random')
            let newIndex = random()
            a.src = './audio/' + arraySong[newIndex]

            let strNewIndex = String(newIndex)
            a.dataset.index = strNewIndex

            controlPanel.classList.add('active')
            info.classList.add('active')
        }
    })
}

const changeMode = function() {
    // 切换播放模式，获取当前播放模式的index， 算出下个播放模式的index,
    // 元素.classList.remove('当前的模式')  然后元素.classList.add('下个模式')
    let modeChange = e('#mode-change')
    modeChange.addEventListener('click', function(event) {
        log('click modeChange')
        let modeNowIndex = modeChange.dataset.index
        let classNow = modeClass[modeNowIndex]
        let modeNextIndex = (modeNowIndex + 1) % modeClass.length
        modeChange.dataset.index = modeNextIndex
        modeI.classList.remove(classNow)
        // log('classNow', classNow)
        let modeNext = modeClass[modeNextIndex]
        // log('新加的的class', modeNext)
        modeI.classList.add(modeNext)
        // log('modeI', modeI)
    })
}

const random = function() {
    // 随机播放的选择函数
    let arraySong = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
    let len = arraySong.length
    let a = Math.random()
    let b = a * len
    let index = Math.floor(b)
    // log('arraySong[index], ', arraySong[index])
    return index
}

const clicklikey = function () {
    let heart = e('.heart')
    heart.addEventListener('click', function () {
        log('click likey')
        if (heart.classList.contains('clicked')) {
            heart.classList.remove('clicked')

        } else {
            heart.classList.add('clicked')
        }
    })
}

const templateSongList = function () {
    let t = `
            <!--<audio class="ren-audio" src="./audio/1.mp3" data-index="0"></audio>-->
            <div class="ren-muisc" data-path="1.mp3" data-index="0">不再犹豫</div>
            <div class="ren-muisc" data-path="2.mp3" data-index="1">偏偏喜欢你</div>
            <div class="ren-muisc" data-path="3.mp3" data-index="2">灰色轨迹</div>
            <div class="ren-muisc" data-path="4.mp3" data-index="3">光辉岁月</div>
        `
    return t
}

let songLlist = e('.song-list')
let songLlistDetail = e('.song-list-detail')

const insertSongList = function() {
    let html = templateSongList()
    log('html', html)
    appendHtml(songLlistDetail, html)
}

const bindEvnetCss = function () {
    let songListCss = e('.icon-gedan1')
    log('songListCss', songListCss)
    songLlist.addEventListener('click', function (event) {
        let self = event.target
        if (self.classList.contains('icon-gedan1')) {
            songLlistDetail.classList.toggle('none')
        }

    })
}

const bindEventSongList = function () {
    songLlist.addEventListener('click', function (event) {
        // log('songLlist', songLlist)
        let self = event.target
        if (self.classList.contains('ren-muisc')) {
            let path = self.dataset.path
            a.src = './audio/' + path
            log('a', a)
            let index = self.dataset.index
            a.dataset.index = index
            log('index', index)

            controlPanel.classList.add('active')
            info.classList.add('active')
           //
           // //  // 点击中甲的播放和暂停键位的时候，更新出歌手的和歌曲的信息
           //  let index = self.dataset.index
            let dataInfo = songData(a.dataset.index)
           //  log('dataInfo', dataInfo)
           //  log('index 是', index, typeof index)
           //
           //  // log('dataInfo', dataInfo)
           //
           artist.innerHTML = dataInfo[0]
           name.innerHTML = dataInfo[1]
        }
    })
}

const _main = function() {
    bindEventCanplay()
    ClickPlay()
    PrevSong()
    NextSong()
    showInfo()
    timePercent()
    bindEvnetEnded()
    changeMode()
    clicklikey()
    bindEvnetCss()
    insertSongList()
    bindEventSongList()
}
_main()
