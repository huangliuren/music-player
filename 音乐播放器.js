// // 切换上一首歌曲时候：
//
// // 1， 点击左边的按钮，可以实现播放上一首歌曲，让播放按键也更新
// const bindEventCanplay = function(audio) {
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         a.play()
//     })
// }
//
// // 实现播放上一首歌
// // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
// const bindEventPrev = function (audio) {
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let prev = e('.prev')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//     prev.addEventListener('click', function () {
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexPrev = indexNow - 1
//         if (indexPrev < 0) {
//             indexPrev = array.length - 1
//         }
//         let strIndexPrev = String(indexPrev)
//         a.dataset.index = strIndexPrev
//         a.src = './audio/' + array[indexPrev]
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
//
//
//
//
// // 2，还有另一种就是只有在点击了中间的播放按钮之后才能对左右按钮进行操作
// const bindEventCanplay = function(audio) {
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         log('canplay')
//         let controlPanel = e('.control-panel')
//         if (controlPanel.classList.contains('active')) {
//             a.play()
//         }
//     })
// }
//
// // 实现播放上一首歌
// // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
// const bindEventPrev = function (audio) {
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let prev = e('.prev')
//     let a = e('audio')
//
//     prev.addEventListener('click', function () {
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexPrev = indexNow - 1
//         if (indexPrev < 0) {
//             indexPrev = array.length - 1
//         }
//         let strIndexPrev = String(indexPrev)
//         a.dataset.index = strIndexPrev
//         a.src = './audio/' + array[indexPrev]
//
//     })
// }
//
// // 备份
// const log = console.log.bind(console)
//
// const e = function(selector) {
//     let element = document.querySelector(selector)
//     if (element === null) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return null
//     } else {
//         return element
//     }
// }
//
// const es = function(selector) {
//     let elements = document.querySelectorAll(selector)
//     if (elements.length === 0) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return []
//     } else {
//         return elements
//     }
// }
//
// const bindAll = function(elements, eventName, callback) {
//     for (let i = 0; i < elements.length; i++) {
//         let tag = elements[i]
//         tag.addEventListener(eventName, callback)
//     }
// }
// // 抽出函数 用来控制是否加上 active
// const checkActive = function (element) {
//     return element.classList.contains('active')
// }
//
// // 点击play的时候播放，再点击的时候暂停
// // 播放的时候显示出info 界面，并且转动音乐盘；
// // 暂停的时候不显示info 界面，音乐盘停止转动
// // 对play进行事件监听，当点击的时候通过判断info 页面和音乐盘是否是active状态来判断现在是播放还是暂停
// // 如果点击的时候发现里面的info和音乐盘都是active 说明现在正在播放，那么下一步就应该是去执行pause
// // 如果点击play 的时候发现里面的info和音乐盘都没有是active状态的话，说明现在是暂停，下一步应该是执行播放就是play。
// const bindEventPlay = function(audio) {
//     let play = e('#play')
//     play.addEventListener('click', function(event) {
//         log('click play')
//         let controlPanel = e('.control-panel')
//         let info = e('#info')
//         if (controlPanel.classList.contains('active')) {
//             controlPanel.classList.remove('active')
//             info.classList.remove('active')
//             audio.pause()
//         } else {
//             controlPanel.classList.add('active')
//             info.classList.add('active')
//             audio.play()
//         }
//     })
// }
//
// const bindEventCanplay = function(audio) {
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         a.play()
//     })
// }
//
// // 实现播放上一首歌
// // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
// const bindEventPrev = function (audio) {
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let prev = e('.prev')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//     prev.addEventListener('click', function () {
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexPrev = indexNow - 1
//         if (indexPrev < 0) {
//             indexPrev = array.length - 1
//         }
//         let strIndexPrev = String(indexPrev)
//         a.dataset.index = strIndexPrev
//         a.src = './audio/' + array[indexPrev]
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const _main = function() {
//     let a = e('.ren-audio')
//     bindEventPlay(a)
//     bindEventPrev(a)
//     bindEventCanplay(a)
// }
//
// // _main()
//
//
// // 备份2
// const log = console.log.bind(console)
//
// const e = function(selector) {
//     let element = document.querySelector(selector)
//     if (element === null) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return null
//     } else {
//         return element
//     }
// }
//
// const es = function(selector) {
//     let elements = document.querySelectorAll(selector)
//     if (elements.length === 0) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return []
//     } else {
//         return elements
//     }
// }
//
// const bindAll = function(elements, eventName, callback) {
//     for (let i = 0; i < elements.length; i++) {
//         let tag = elements[i]
//         tag.addEventListener(eventName, callback)
//     }
// }
//
// const checkActive = function (element) {
//     // 抽出函数 用来控制是否加上 active
//     return element.classList.contains('active')
// }
//
// const addActive = function (element) {
//     return element.classList.add('active')
// }
//
// const removeActive = function (element) {
//     return element.classList.remove('active')
// }
//
// const bindEventPlay = function(audio) {
//     /*点击play的时候播放，再点击的时候暂停
//     播放的时候显示出info 界面，并且转动音乐盘；
//     暂停的时候不显示info 界面，音乐盘停止转动
//     对play进行事件监听，当点击的时候通过判断info 页面和音乐盘是否是active状态来判断现在是播放还是暂停
//     如果点击的时候发现里面的info和音乐盘都是active 说明现在正在播放，那么下一步就应该是去执行pause
//     如果点击play 的时候发现里面的info和音乐盘都没有是active状态的话，说明现在是暂停，下一步应该是执行播放就是play。
//     */
//     let play = e('#play')
//     let a = e('audio')
//     play.addEventListener('click', function(event) {
//         log('click play')
//         let controlPanel = e('.control-panel')
//         let info = e('#info')
//         if (controlPanel.classList.contains('active')) {
//             controlPanel.classList.remove('active')
//             info.classList.remove('active')
//             audio.pause()
//         } else {
//             controlPanel.classList.add('active')
//             info.classList.add('active')
//             // 点击中甲的播放和暂停键位的时候，更新出歌手的和歌曲的信息
//             let index = a.dataset.index
//             let dataInfo = showInfoIndex(index)
//
//             let artist = e('.artist')
//             let name = e('.name')
//
//             artist.innerHTML = dataInfo[0]
//             name.innerHTML = dataInfo[1]
//
//             // 显示歌曲的信息，包括歌曲名字和演唱者
//             duration = a.duration
//             setInterval(function() {
//                 let timeNow = a.currentTime
//                 let timePercent = timeNow / duration
//                 let timePercentMul =  timePercent * 100
//                 let bar = e('.bar')
//                 bar.style.width = timePercentMul + '%'
//             }, 1000)
//
//             audio.play()
//         }
//     })
// }
//
// const bindEventCanplay = function(audio) {
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         let src = a.src
//         // log('src', src)
//         a.play()
//     })
// }
//
// const bindEventPrev = function (audio) {
//     // 实现播放上一首歌
//     // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let prev = e('.prev')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//     prev.addEventListener('click', function () {
//         log('click prev')
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexPrev = indexNow - 1
//         if (indexPrev < 0) {
//             indexPrev = array.length - 1
//         }
//         let strIndexPrev = String(indexPrev)
//         a.dataset.index = strIndexPrev
//         a.src = './audio/' + array[indexPrev]
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const bindEventNext = function (audio) {
//     // 实现播放下一首歌
//     // 对 next 进行 click 事件监听，当点击的时候播放上一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let next = e('.next')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//
//     next.addEventListener('click', function () {
//         log('click next')
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexNext = (indexNow + 1) % array.length
//         a.src = './audio/' + array[indexNext]
//
//         let strIndexNext = String(indexNext)
//         a.dataset.index = strIndexNext
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const showInfoIndex = function (index) {
//     // 根据index return 出相关的歌曲信息
//     let songName = ['光辉岁月','偏偏喜欢你', '灰色轨迹', 'zadie']
//     let artists = ['Beyond', '陈百强', 'Beyond', 'none']
//     let dataSong = []
//     dataSong.push(artists[index])
//     dataSong.push(songName[index])
//
//     return dataSong
// }
//
// const showInfo = function () {
//     /*
//      // 上下一首歌的时候显示并且更新info栏目
//     做一个功能：就是当点击一首歌之后，
//     info 信息栏会显示出当前的歌曲名称和演唱的人
//     获取到当前的播放audio 的data-index的值是多少，把他们转成数字
//     声明两个个数组，第一个数组放着歌曲的演唱者
//     第二数组放着歌曲的名字，根据的index的多少把数组的里面的元素挂在info的显示栏里面
//     */
//     let audio = e('audio')
//     audio.addEventListener('canplay', function(event) {
//         let index = audio.dataset.index
//         let dataInfo = showInfoIndex(index)
//
//         let artist = e('.artist')
//         let name = e('.name')
//
//         artist.innerHTML = dataInfo[0]
//         name.innerHTML = dataInfo[1]
//     })
//
// }
//
// var duration
// const timePercent = function(audio) {
//     // 计算时间比例，显示进度条
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         let src = a.src
//         duration = a.duration
//         setInterval(function() {
//             let timeNow = a.currentTime
//             let timePercent = timeNow / duration
//             let timePercentMul =  timePercent * 100
//             let bar = e('.bar')
//             bar.style.width = timePercentMul + '%'
//         }, 1000)
//     })
// }
//
//
// const _main = function() {
//     let a = e('.ren-audio')
//     bindEventCanplay(a)
//     bindEventPlay(a)
//     bindEventPrev(a)
//     bindEventNext(a)
//     showInfo()
//     timePercent(a)
//
// }
//
// // _main()
//
// // 备份
// const log = console.log.bind(console)
//
// const e = function(selector) {
//     let element = document.querySelector(selector)
//     if (element === null) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return null
//     } else {
//         return element
//     }
// }
//
// const es = function(selector) {
//     let elements = document.querySelectorAll(selector)
//     if (elements.length === 0) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return []
//     } else {
//         return elements
//     }
// }
//
// const bindAll = function(elements, eventName, callback) {
//     for (let i = 0; i < elements.length; i++) {
//         let tag = elements[i]
//         tag.addEventListener(eventName, callback)
//     }
// }
//
// let modeList = ['repeat', 'list', 'random']
// let modeNow = 'repeat'
// let duration
//
// const checkActive = function (element) {
//     // 抽出函数 用来控制是否加上 active
//     return element.classList.contains('active')
// }
//
// const bindEventPlay = function(audio) {
//     /*点击play的时候播放，再点击的时候暂停
//     播放的时候显示出info 界面，并且转动音乐盘；
//     暂停的时候不显示info 界面，音乐盘停止转动
//     对play进行事件监听，当点击的时候通过判断info 页面和音乐盘是否是active状态来判断现在是播放还是暂停
//     如果点击的时候发现里面的info和音乐盘都是active 说明现在正在播放，那么下一步就应该是去执行pause
//     如果点击play 的时候发现里面的info和音乐盘都没有是active状态的话，说明现在是暂停，下一步应该是执行播放就是play。
//     */
//     let play = e('#play')
//     let a = e('audio')
//     play.addEventListener('click', function(event) {
//         log('click play')
//
//         let controlPanel = e('.control-panel')
//         let info = e('#info')
//
//         if (controlPanel.classList.contains('active')) {
//             controlPanel.classList.remove('active')
//             info.classList.remove('active')
//             audio.pause()
//         } else {
//             // 展示出info 和 controlPanel
//             controlPanel.classList.add('active')
//             info.classList.add('active')
//
//             // 点击中甲的播放和暂停键位的时候，更新出歌手的和歌曲的信息
//             let index = a.dataset.index
//             let dataInfo = showInfoIndex(index)
//
//             let artist = e('.artist')
//             let name = e('.name')
//
//             artist.innerHTML = dataInfo[0]
//             name.innerHTML = dataInfo[1]
//
//             // 显示歌曲的信息，包括歌曲名字和演唱者
//             duration = a.duration
//             setInterval(function() {
//                 let timeNow = a.currentTime
//                 let timePercent = timeNow / duration
//                 let timePercentMul =  timePercent * 100
//                 let bar = e('.bar')
//                 bar.style.width = timePercentMul + '%'
//             }, 1000)
//
//             audio.play()
//         }
//     })
// }
//
// const bindEventCanplay = function(audio) {
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         let src = a.src
//         // log('src', src)
//         a.play()
//     })
// }
//
// const bindEventPrev = function (audio) {
//     // 实现播放上一首歌
//     // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let prev = e('.prev')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//
//     prev.addEventListener('click', function () {
//         log('click prev')
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexPrev = indexNow - 1
//         if (indexPrev < 0) {
//             indexPrev = array.length - 1
//         }
//         let strIndexPrev = String(indexPrev)
//         a.dataset.index = strIndexPrev
//         a.src = './audio/' + array[indexPrev]
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const bindEventNext = function (audio) {
//     // 实现播放下一首歌
//     // 对 next 进行 click 事件监听，当点击的时候播放上一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let next = e('.next')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//     let info = e('#info')
//
//     next.addEventListener('click', function () {
//         log('click next')
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexNext = (indexNow + 1) % array.length
//         a.src = './audio/' + array[indexNext]
//
//         let strIndexNext = String(indexNext)
//         a.dataset.index = strIndexNext
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const showInfoIndex = function (index) {
//     // 根据index return 出相关的歌曲信息
//     let songName = ['光辉岁月','偏偏喜欢你', '灰色轨迹', 'zadie']
//     let artists = ['Beyond', '陈百强', 'Beyond', 'none']
//     let dataSong = []
//     dataSong.push(artists[index])
//     dataSong.push(songName[index])
//
//     return dataSong
// }
//
// const showInfo = function () {
//     /*
//      // 上下一首歌的时候显示并且更新info栏目
//     做一个功能：就是当点击一首歌之后，
//     info 信息栏会显示出当前的歌曲名称和演唱的人
//     获取到当前的播放audio 的data-index的值是多少，把他们转成数字
//     声明两个个数组，第一个数组放着歌曲的演唱者
//     第二数组放着歌曲的名字，根据的index的多少把数组的里面的元素挂在info的显示栏里面
//     */
//     let audio = e('audio')
//     audio.addEventListener('canplay', function(event) {
//         let index = audio.dataset.index
//         let dataInfo = showInfoIndex(index)
//
//         let artist = e('.artist')
//         let name = e('.name')
//
//         artist.innerHTML = dataInfo[0]
//         name.innerHTML = dataInfo[1]
//     })
//
// }
//
// const timePercent = function(audio) {
//     // 计算时间比例，显示进度条
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         let src = a.src
//         duration = a.duration
//         setInterval(function() {
//             let timeNow = a.currentTime
//             let timePercent = timeNow / duration
//             let timePercentMul =  timePercent * 100
//             let bar = e('.bar')
//             bar.style.width = timePercentMul + '%'
//         }, 1000)
//     })
// }
//
// const bindEvnetRepeat = function(audio) {
//     // 循环播放这首歌
//     let a = audio
//     a.addEventListener('ended', function(event) {
//         if (modeNow = 'repeat') {
//             a.play()
//         } else if (modeNow = 'list') {
//             bindEvnetList(a)
//         } else if(modeNow = 'random') {
//             bindEvnetEndRandom()
//         }
//
//     })
// }
//
// const bindEvnetList = function(audio) {
//     // 自动播放下一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let a = audio
//     let len = array.length
//     let controlPanel = e('.control-panel')
//     let info = e('#info')
//     a.addEventListener('ended', function(event) {
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//
//         let indexNext = (indexNow + 1) % array.length
//         a.src = './audio/' + array[indexNext]
//
//         let strIndexNext = String(indexNext)
//         a.dataset.index = strIndexNext
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const random = function() {
//     // 随机播放的选择函数
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let len = array.length
//     let a = Math.random()
//     let b = a * len
//     let index = Math.floor(b)
//     // log('array[index], ', array[index])
//     return index
// }
//
// const bindEvnetEndRandom = function(audio) {
//     // 随机 播放下一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//     let info = e('#info')
//
//     a.addEventListener('ended', function(event) {
//         let newIndex = random()
//         log('newIndex', newIndex)
//         a.src = './audio/' + array[newIndex]
//
//         let strNewIndex = String(newIndex)
//         a.dataset.index = strNewIndex
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const _main = function() {
//     let a = e('.ren-audio')
//     bindEventCanplay(a)
//     bindEventPlay(a)
//     bindEventPrev(a)
//     bindEventNext(a)
//     showInfo()
//     timePercent(a)
//     // bindEvnetRepeat(a)
//     // bindEvnetList(a)
//     // bindEvnetEndRandom(a)
// }
//
// // _main()
//
// // 备份
// const log = console.log.bind(console)
//
// const e = function(selector) {
//     let element = document.querySelector(selector)
//     if (element === null) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return null
//     } else {
//         return element
//     }
// }
//
// const es = function(selector) {
//     let elements = document.querySelectorAll(selector)
//     if (elements.length === 0) {
//         let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
//         alert(s)
//         return []
//     } else {
//         return elements
//     }
// }
//
// const bindAll = function(elements, eventName, callback) {
//     for (let i = 0; i < elements.length; i++) {
//         let tag = elements[i]
//         tag.addEventListener(eventName, callback)
//     }
// }
//
// const checkActive = function (element) {
//     // 抽出函数 用来控制是否加上 active
//     return element.classList.contains('active')
// }
//
// let modeList = ['repeat', 'list', 'random']
// let modeNow = 'repeat'
// let duration
//
// const songs = [
//     {
//         src: '',
//         name: '',
//         artist: '',
//     },
//     {
//         src: '',
//         name: '',
//         artist: '',
//     },
//     {
//         src: '',
//         name: '',
//         artist: '',
//     },
// ]
//
// const bindEventPlay = function(audio) {
//     /*点击play的时候播放，再点击的时候暂停
//     播放的时候显示出info 界面，并且转动音乐盘；
//     暂停的时候不显示info 界面，音乐盘停止转动
//     对play进行事件监听，当点击的时候通过判断info 页面和音乐盘是否是active状态来判断现在是播放还是暂停
//     如果点击的时候发现里面的info和音乐盘都是active 说明现在正在播放，那么下一步就应该是去执行pause
//     如果点击play 的时候发现里面的info和音乐盘都没有是active状态的话，说明现在是暂停，下一步应该是执行播放就是play。
//     */
//     let play = e('#play')
//     let a = e('audio')
//     play.addEventListener('click', function(event) {
//         log('click play')
//
//         let controlPanel = e('.control-panel')
//         let info = e('#info')
//
//         if (controlPanel.classList.contains('active')) {
//             controlPanel.classList.remove('active')
//             info.classList.remove('active')
//             audio.pause()
//         } else {
//             // 展示出info 和 controlPanel
//             controlPanel.classList.add('active')
//             info.classList.add('active')
//
//             // 点击中甲的播放和暂停键位的时候，更新出歌手的和歌曲的信息
//             let index = a.dataset.index
//             let dataInfo = showInfoIndex(index)
//
//             let artist = e('.artist')
//             let name = e('.name')
//
//             artist.innerHTML = dataInfo[0]
//             name.innerHTML = dataInfo[1]
//
//             // 显示歌曲的信息，包括歌曲名字和演唱者
//             duration = a.duration
//             setInterval(function() {
//                 let timeNow = a.currentTime
//                 let timePercent = timeNow / duration
//                 let timePercentMul =  timePercent * 100
//                 let bar = e('.bar')
//                 bar.style.width = timePercentMul + '%'
//             }, 1000)
//
//             audio.play()
//         }
//     })
// }
//
// const bindEventCanplay = function(audio) {
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         let src = a.src
//         log('src', src)
//         a.play()
//     })
// }
//
// const bindEventPrev = function (audio) {
//     // 实现播放上一首歌
//     // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let prev = e('.prev')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//
//     prev.addEventListener('click', function () {
//         log('click prev')
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexPrev = indexNow - 1
//         if (indexPrev < 0) {
//             indexPrev = array.length - 1
//         }
//         let strIndexPrev = String(indexPrev)
//         a.dataset.index = strIndexPrev
//         a.src = './audio/' + array[indexPrev]
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const bindEventNext = function (audio) {
//     // 实现播放下一首歌
//     // 对 next 进行 click 事件监听，当点击的时候播放上一首歌曲
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let next = e('.next')
//     let a = e('audio')
//     let controlPanel = e('.control-panel')
//     let info = e('#info')
//
//     next.addEventListener('click', function () {
//         log('click next')
//         let src = a.src.split('/').slice(-1)[0]
//         let indexNow = array.indexOf(src)
//         let indexNext = (indexNow + 1) % array.length
//         a.src = './audio/' + array[indexNext]
//
//         let strIndexNext = String(indexNext)
//         a.dataset.index = strIndexNext
//
//         controlPanel.classList.add('active')
//         info.classList.add('active')
//     })
// }
//
// const showInfoIndex = function (index) {
//     // 根据index return 出相关的歌曲信息
//     let songName = ['光辉岁月','偏偏喜欢你', '灰色轨迹', 'zadie']
//     let artists = ['Beyond', '陈百强', 'Beyond', 'none']
//     let dataSong = []
//     dataSong.push(artists[index])
//     dataSong.push(songName[index])
//
//     return dataSong
// }
//
// const showInfo = function () {
//     /*
//      // 上下一首歌的时候显示并且更新info栏目
//     做一个功能：就是当点击一首歌之后，
//     info 信息栏会显示出当前的歌曲名称和演唱的人
//     获取到当前的播放audio 的data-index的值是多少，把他们转成数字
//     声明两个个数组，第一个数组放着歌曲的演唱者
//     第二数组放着歌曲的名字，根据的index的多少把数组的里面的元素挂在info的显示栏里面
//     */
//     let audio = e('audio')
//     audio.addEventListener('canplay', function(event) {
//         let index = audio.dataset.index
//         let dataInfo = showInfoIndex(index)
//
//         let artist = e('.artist')
//         let name = e('.name')
//
//         artist.innerHTML = dataInfo[0]
//         name.innerHTML = dataInfo[1]
//     })
//
// }
//
// const timePercent = function(audio) {
//     // 计算时间比例，显示进度条
//     let a = audio
//     a.addEventListener('canplay', function(event) {
//         let src = a.src
//         duration = a.duration
//         setInterval(function() {
//             let timeNow = a.currentTime
//             let timePercent = timeNow / duration
//             let timePercentMul =  timePercent * 100
//             let bar = e('.bar')
//             bar.style.width = timePercentMul + '%'
//         }, 1000)
//     })
// }
//
// const indexNext = function () {
//     // 找出不同歌曲的index
//     let a = e('audio')
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let len = array.length
//     let src = a.src.split('/').slice(-1)[0]
//     let indexNow = array.indexOf(src)
//     let indexNext = (indexNow + 1) % array.length
//     return indexNext
// }
//
// const bindEvnetEnded = function(audio) {
//     // 切换模式
//     let a = e('audio')
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let len = array.length
//
//     let controlPanel = e('.control-panel')
//     let info = e('#info')
//
//     a.addEventListener('ended', function(event) {
//         if (modeNow === 'repeat') {
//             a.play()
//         } else if (modeNow === 'list') {
//             let src = a.src.split('/').slice(-1)[0]
//             let indexNow = array.indexOf(src)
//
//             let indexNext = (indexNow + 1) % array.length
//             a.src = './audio/' + array[indexNext]
//
//             let strIndexNext = String(indexNext)
//             a.dataset.index = strIndexNext
//
//             controlPanel.classList.add('active')
//             info.classList.add('active')
//
//         } else if (modeNow === 'random') {
//             let newIndex = random()
//             a.src = './audio/' + array[newIndex]
//
//             let strNewIndex = String(newIndex)
//             a.dataset.index = strNewIndex
//
//             controlPanel.classList.add('active')
//             info.classList.add('active')
//         }
//     })
// }
//
// const bindEvnetMode = function(audio) {
//     // 自动播放下一首歌曲
//     let modeChange = e('.mode-change')
//     modeChange.addEventListener('click', function(event) {
//         log('click modeChange')
//         let modeNowIndex = modeChange.dataset.index
//         // log('modeNowIndex', modeNowIndex)
//         let modeNextIndex = (modeNowIndex + 1) % modeList.length
//         modeChange.dataset.index = modeNextIndex
//         // log('modeNextIndex', modeNextIndex)
//         modeNow = modeList[modeNextIndex]
//         modeChange.innerHTML = modeNow
//     })
// }
//
// const random = function() {
//     // 随机播放的选择函数
//     let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
//     let len = array.length
//     let a = Math.random()
//     let b = a * len
//     let index = Math.floor(b)
//     // log('array[index], ', array[index])
//     return index
// }
//
// const _main = function() {
//     let a = e('.ren-audio')
//     bindEventCanplay(a)
//     bindEventPlay(a)
//     bindEventPrev(a)
//     bindEventNext(a)
//     showInfo()
//     timePercent(a)
//     // bindEvnetRepeat(a)
//     // bindEvnetList(a)
//     // bindEvnetEndRandom(a)
//     bindEvnetEnded(a)
//     bindEvnetMode(a)
// }
//
// // _main()

// 备份
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

const bindAll = function(elements, eventName, callback) {
    for (let i = 0; i < elements.length; i++) {
        let tag = elements[i]
        tag.addEventListener(eventName, callback)
    }
}

const checkActive = function (element) {
    // 抽出函数 用来控制是否加上 active
    return element.classList.contains('active')
}

let modeList = ['repeat', 'list', 'random']
let modeNow = 'repeat'
let duration
let a = e('audio')

let controlPanel = e('.control-panel')
let info = e('#info')

let artist = e('.artist')
let name = e('.name')

let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']

const songsInfo = [
    {
        src: '',
        songName: '',
        artist: '',
    },
    {
        src: '',
        name: '',
        artist: '',
    },
    {
        src: '',
        name: '',
        artist: '',
    },
]

const bindEventCanplay = function(audio) {
    let a = audio
    a.addEventListener('canplay', function(event) {
        let src = a.src
        // log('src', src)
        a.play()
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
        log('click play')
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
            // log('src', src)
            a.play()
        }
    })
}

const PrevSong = function (audio) {
    // 实现播放上一首歌
    // 对 prev 进行 click 事件监听，当点击的时候播放上一首歌曲
    let prev = e('.prev')
    prev.addEventListener('click', function () {
        log('click prev')
        let src = a.src.split('/').slice(-1)[0]
        let indexNow = array.indexOf(src)
        let indexPrev = indexNow - 1
        if (indexPrev < 0) {
            indexPrev = array.length - 1
        }
        let strIndexPrev = String(indexPrev)
        a.dataset.index = strIndexPrev
        a.src = './audio/' + array[indexPrev]

        controlPanel.classList.add('active')
        info.classList.add('active')
    })
}

const NextSong = function (audio) {
    // 实现播放下一首歌
    // 对 next 进行 click 事件监听，当点击的时候播放上一首歌曲
    let next = e('.next')
    next.addEventListener('click', function () {
        log('click next')
        let src = a.src.split('/').slice(-1)[0]
        let indexNow = array.indexOf(src)
        let indexNext = (indexNow + 1) % array.length
        a.src = './audio/' + array[indexNext]

        let strIndexNext = String(indexNext)
        a.dataset.index = strIndexNext

        controlPanel.classList.add('active')
        info.classList.add('active')
    })
}

const songData = function (index) {
    // 根据index return 出相关的歌曲信息
    let songName = ['光辉岁月','偏偏喜欢你', '灰色轨迹', 'zadie']
    let artists = ['Beyond', '陈百强', 'Beyond', 'none']
    let dataSong = []
    dataSong.push(artists[index])
    dataSong.push(songName[index])

    return dataSong
}

const showInfo = function () {
    /*
     // 上下一首歌的时候显示并且更新info栏目
    做一个功能：就是当点击一首歌之后，
    info 信息栏会显示出当前的歌曲名称和演唱的人
    获取到当前的播放audio 的data-index的值是多少，把他们转成数字
    声明两个个数组，第一个数组放着歌曲的演唱者
    第二数组放着歌曲的名字，根据的index的多少把数组的里面的元素挂在info的显示栏里面
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
    let a = e('audio')
    let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
    let len = array.length
    let src = a.src.split('/').slice(-1)[0]
    let indexNow = array.indexOf(src)
    let indexNext = (indexNow + 1) % array.length
    return indexNext
}

const bindEvnetEnded = function(audio) {
    // 切换模式
    a.addEventListener('ended', function(event) {
        if (modeNow === 'repeat') {
            a.play()
        } else if (modeNow === 'list') {
            let src = a.src.split('/').slice(-1)[0]
            let indexNow = array.indexOf(src)

            let indexNext = (indexNow + 1) % array.length
            a.src = './audio/' + array[indexNext]

            let strIndexNext = String(indexNext)
            a.dataset.index = strIndexNext

            controlPanel.classList.add('active')
            info.classList.add('active')

        } else if (modeNow === 'random') {
            let newIndex = random()
            a.src = './audio/' + array[newIndex]

            let strNewIndex = String(newIndex)
            a.dataset.index = strNewIndex

            controlPanel.classList.add('active')
            info.classList.add('active')
        }
    })
}

const changeMode = function(audio) {
    // 自动播放下一首歌曲
    let modeChange = e('.mode-change')
    modeChange.addEventListener('click', function(event) {
        log('click modeChange')
        let modeNowIndex = modeChange.dataset.index
        let modeNextIndex = (modeNowIndex + 1) % modeList.length
        modeChange.dataset.index = modeNextIndex
        modeNow = modeList[modeNextIndex]
        modeChange.innerHTML = modeNow
    })
}

const random = function() {
    // 随机播放的选择函数
    let array = ['1.mp3', '2.mp3', '3.mp3', '4.mp3']
    let len = array.length
    let a = Math.random()
    let b = a * len
    let index = Math.floor(b)
    // log('array[index], ', array[index])
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

const _main = function() {
    let a = e('.ren-audio')
    bindEventCanplay(a)
    ClickPlay()
    PrevSong(a)
    NextSong(a)
    showInfo()
    timePercent(a)
    bindEvnetEnded(a)
    changeMode(a)
    clicklikey()
}

_main()