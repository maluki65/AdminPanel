//Start of sidebar dropdown//
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');

allDropdown.forEach(item=> {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e) {
        e.preventDefault();

        if(!this.classList.contains('active')) {
            allDropdown.forEach(i=> {
                const aLink = i.parentElement.querySelector('a:first-child');

                aLink.classList.remove('active');
                i.classList.remove('show');
            })
        }

        this.classList.toggle('active');
        item.classList.toggle('show');
    })
})


//Sidebar collapse//
let toggle = document.querySelector("#toggle-sidebar");
const nav1 = document.querySelector("#sidebar");
let main =  document.querySelector("#content");
let allSideDivider = document.querySelectorAll("#sidebar .divider");

toggle.onclick = function () {
    nav1.classList.toggle("active");
    main.classList.toggle("active");

    if(nav1.classList.contains('active')){
        allSideDivider.forEach(item=> {
            item.textContent = "-"
        })
        allDropdown.forEach(item=> {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
    } else {
        allSideDivider.forEach(item=> {
            item.textContent = item.dataset.text;
        })
    }
}

//Sidebar collapse//

//End of sidebar dropdown//



//Start of profile dropdown//
const profile = document.querySelector('nav .profile');
const dropdownProfile = profile.querySelector('.profile-link');
const imgProfile = profile.querySelector('img');

imgProfile.addEventListener('click', function (){
    dropdownProfile.classList.toggle('show');
})



//Main Menu//
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item=> {
    const icon = item.querySelector('.icon');
    const menuLink = item.querySelector('.menu-link');

    icon.addEventListener('click', function() {
        menuLink.classList.toggle('show');
    })
})
//Main Menu//


window.addEventListener('click', function (e) {
    if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
            if(dropdownProfile.classList.contains('show')) {
                dropdownProfile.classList.remove('show');
            }
        }
    }
    
    allMenu.forEach(item=> {
        const icon = item.querySelector('.icon');
        const menuLink = item.querySelector('.menu-link');
    
        if(e.target !== icon) {
            if(e.target !== menuLink) {
                if(menuLink.classList.contains('show')) {
                    menuLink.classList.remove('show')
                }
            }
        }
    })
})
//End of profile dropdown//



//Start of progressbar//
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
    item.style.setProperty('--value', item.dataset.value)
})
//End of progressbar//



//Start of Apexchartcode//
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

//End of Apexchartcode//
