const navToggleIcon = document.querySelector('.nav__toggle-icon')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItem = document.querySelectorAll('.resume-list__item')
const portfolioListItem = document.querySelectorAll('.portfolio_list__item')

const menuItems = document.querySelectorAll('.menu__item')

navToggleIcon.addEventListener('click', () => {
    navToggleIcon.classList.toggle('nav__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})

// resumeListItem.forEach((item) => {
//     item.addEventListener('click', () => {
//         document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active')
//         document.querySelector('.resume-content--show').classList.remove('resume-content--show')
//         item.classList.add('resume-list__item--active')
//         let contentId = item.getAttribute('data-content-id')
//         document.querySelector(contentId).classList.add('resume-content--show')
//     })
// })

// portfolioListItem.forEach((item) => {
//     item.addEventListener('click', () => {
//         document.querySelector('.portfolio_list__item--active').classList.remove('portfolio_list__item--active')
//         document.querySelector('.portfolio-content--show').classList.remove('portfolio-content--show')
//         item.classList.add('portfolio_list__item--active')
//         let contentId = item.getAttribute('data-content-id')
//         document.querySelector(contentId).classList.add('portfolio-content--show')
//     })
// })

function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}

function navigationTabsInit(listItem, activeClass, showClass) {
    listItem.forEach((item) => {
        item.addEventListener('click', () => {
            removeActiveClass(activeClass)
            removeActiveClass(showClass)
            // document.querySelector(`.${activeClass}`).classList.remove(activeClass)
            // document.querySelector(`.${showClass}`).classList.remove(showClass)
            item.classList.add(activeClass)
            let contentId = item.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(showClass)
        })
    })
}

navigationTabsInit(resumeListItem, 'resume-list__item--active', 'resume-content--show')
navigationTabsInit( portfolioListItem, 'portfolio_list__item--active', 'portfolio-content--show')

menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        removeActiveClass('menu__item--active')
        item.classList.add('menu__item--active')

        let sectionClass = item.getAttribute('data-section')
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top : sectionOffsetTop - 120,
            behavior : "smooth"
        })

    })
})

