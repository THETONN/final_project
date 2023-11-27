// Sidebar imports
import {
    UilEstate,
    UilUsersAlt,
    UilBus,
    UilBusAlt,
    UilBusSchool,
    UilSignOutAlt,
    UilTable,
    UilFileQuestionAlt,
    UilAward,
    UilMehClosedEye,

} from "@iconscout/react-unicons"



// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";


// Sidebar Data
export const SidebarData = [
    
    {
        icon: UilEstate,
        heading: "Dashboard",
        Link:'/Dashboard'
    },

    {
        icon: UilUsersAlt,
        heading: "Users",
        Link:'/Users'
    },
    // {
    //     icon:  UilTable,
    //     heading: "Response",
    //     Link:'/Res'

        
    // },

    // {
    //     icon:  UilAward,
    //     heading: "Recommandation",
    //     Link:'/Recommandation'

    // },
    {
        icon:  UilFileQuestionAlt,
        heading: "Question&Choice",
        Link:'/Q&A',
        // subMenu: [
        //     { title: "Question 1", Link: "/Question1" },
        //     { title: "Question 2", Link: "/Question2" }
        // ]
        
    },

    {
        icon:  UilFileQuestionAlt,
        heading: "Feedback",
        Link:'/Feedback',
        
    },
    
    {
        icon:  UilMehClosedEye,
        heading: "Group",
        Link:'/Group'

    },
    {
        icon:  UilBusSchool,
        heading: "Trip",
        Link:'/Trip'

    },
    {
        icon: UilSignOutAlt,
        heading: "SignOut",
        Link:'/SignOut'

    },

];
export const CardData=[
    {
        title: 'Group 1',
        color:{
            backGround: '#F492A1',
            boxShadow: '0px 10px 20px 0px #e0c6f5'
        },
        barValue:70,
        value:'23,970',
        png: UilBus,
        serise:[
            { 
                name:'Group 1',
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: 'Group 2',
        color:{
            backGround: '#7FBCF0',
            boxShadow: '0px 10px 20px 0px #FDC0C7'
        },
        barValue:80,
        value:'14,270',
        png: UilBusAlt,
        serise:[
            {
                name:'Group 2',
                data:[10,100,50,70,80,30,40],
            },
        ],
    },
    {
        title: 'Group 3',
        color:{
            backGround: '#FFB062',
            boxShadow: '0px 10px 20px 0px #F9D59B'
        },
        barValue:60,
        value:'4,270', 
        png: UilBusSchool,
        serise:[
            {
                name:'Group 3',
                data:[10,25,15,30,12,15,20],
            },
        ],
    },
    {
        title: 'Group 4',
        color:{
            backGround: 'linear-gradient(rgb(248,212,154)-146.42%,rgb(155 202 113) -46.42%)',
            boxShadow: '0px 10px 20px 0px #F9D59B'
        },
        barValue:60,
        value:'4,270', 
        png: UilBusAlt,
        serise:[
            {
                name:'Group 4',
                data:[10,25,15,30,12,15,20],
            },
        ],
    },
    

]

// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ]