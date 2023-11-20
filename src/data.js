let data = {
  menuBar: [
    {
      name: "Dashboard",
    },
  ],
  banks: [
    {
      name: "Access Bank",
      value: "accessbank",
    },
    {
      name: "First Bank",
      value: "firstbank",
    },

    {
      name: "GT Bank",
      value: "gtbank",
    },
  ],

  network: [
    {
      name: "Mtn",
      value: "mtn",
      databundle: [
        {
          name: "1GB @200",
          price: 200,
        },
        {
          name: "4GB @300",
          price: 500,
        },
      ],
    },
    {
      name: "Glo",
      value: "glo",
      databundle: [
        {
          name: "1GB @300",
          price: 300,
        },
        {
          name: "4GB @600",
          price: 600,
        },
      ],
    },

    {
      name: "Airtel",
      value: "airtel",
      databundle: [
        {
          name: "1GB @500",
          price: 500,
        },
        {
          name: "4GB 700",
          price: 700,
        },
      ],
    },
  ],

  cable: [


    {
      name: "Dstv Multichoice",
      value: "dstv",
      subscriptions: [
        {
          name: "Starter Pack @200",
          price: 200,
        },
        {
          name: "Family @500",
          price: 500,
        },
      ],
    },
    {
      name: "Go Tv",
      value: "gotv",
      subscriptions: [
        {
          name: "basic @300",
          price: 300,
        },
        {
          name: "prep2 @600",
          price: 600,
        },
      ],
    },

    {
      name: "Mytv Africa",
      value: "mytv",
      subscriptions: [
        {
          name: "beggin pakage @500",
          price: 500,
        },
        {
          name: "Master pakage @700",
          price: 700,
        },
      ],
    },
  ],

  electricity: [
    {
      name: "Kaduna Distribution Company",
      value: "kadunadistribution",
      subscriptions: [
        {
          name: "1-unut @200",
          price: 200,
        },
        {
          name: "10-unit @500",
          price: 500,
        },
      ],
    },
    {
      name: "Abuja Distribution Company",
      value: "abujadistribution",
      subscriptions: [
        {
          name: "1-unit @300",
          price: 300,
        },
        {
          name: "3-unit @600",
          price: 600,
        },
      ],
    },
  ],

  exampin: [
    {
      name: "Neco @700",
      value: 700,
    },
    {
      name: "Jamb @1000",
      value: 1000,
    },
  ],

  betting: [
    {
      name: "Bet9ja",
      value: "bet9ja",
    },
    {
      name: "NairaBet",
      value: "nairabet",
    },
  ],
  countries: [
    {
      name: "Nigeria",
      value: "nigeria",
    },
    {
      name: "Ghana",
      value: "ghana",
    },
  ],

  users: [
    {
      bio: {
        firstname: "Abubakar",
        lastname: "Mukhtar",
        middlename: "Abdulsalam",
        email: "abubakarsurzkidoo@gmail.com",
        mobile: "+234-915-873-3333",
        dateofbirth: "29/03/1998",
        country: "ghana",
        profile: "../Profile.png",
        password: "password",
      },
      bank: {
        name: "Abubakar Mukhtar",
        bankname: "Access Bank",
        number: "992398433",
        bvn: "324424343",
      },

      goal: [
        {
          id: "334444",
          targetAmount: 2300,
          desc: "for party we agreed with my team on 12/12/23",
          name: "Team Party",
          current: 13,
        },
        {
          id: "444",
          targetAmount: 2300,
          desc: "My Kids School Fees for 3rd Term",
          name: "School Fees",
          current: 1200,
        },
      ],

      quickpayment: [
        {
          id: "2232343",
          image: "../Profile.png",
          accoutNumber: "23486686658",
        },
        { id: "2236343", image: "../hero.jpg", accoutNumber: "23486686we8" },
      ],

      accounts: [
        { id: "287438474", name: "Saving", balance: 0.0 },

        { id: "373487348", name: "Company", balance: 300.0 },
      ],

      notification: {
        unread: [
          {
            message: "notification fron data okay not seen okay",
            seen: false,
            date: "2 second ago",
          },
          {
            message: "notification fron data okay",
            seen: false,
            date: "2 second ago",
          },
        ],
        read: [
          {
            message: "notification fron data okay",
            seen: true,
            date: "2 second ago",
          },
        ],
      },
      transaction: [
        {
          id: "ASDEFS23323",
          amount: 234.32,
          status: "PAID",
          desc: "Water Bill1",
          to: "Mekko Water Resources LTD.",
          date: Date.now(),
          account_id: "373487348",
        },
        {
          id: "ASDEFS23323",
          amount: 234.32,
          status: "PAID",
          desc: "Water Bill2",
          to: "Mekko Water Resources LTD.",
          date: Date.now(),
          account_id: "373487348",
        },
        {
          id: "ASDEF32S2323",
          amount: 234.32,
          status: "PAID",
          desc: "Water Bill3",
          to: "Mekko Water Resources LTD.",
          date: Date.now(),
          account_id: "373487348",
        },

        {
          id: "ASDEFS235523",
          amount: 234.32,
          status: "PAID",
          desc: "Water Bill4",
          to: "Mekko Water Resources LTD.",
          date: Date.now(),
          account_id: "373487348",
        },

        {
          id: "ASDEgsF32S2323",
          amount: 234.32,
          status: "PAID",
          desc: "Water Bill5",
          to: "Mekko Water Resources LTD.",
          date: Date.now(),
          account_id: "373487348",
        },

        {
          id: "ASDsEFS235523",
          amount: 234.32,
          status: "PAID",
          desc: "Water Bill6",
          to: "Mekko Water Resources LTD.",
          date: Date.now(),
          account_id: "373487348",
        },

      ],

      settings: {
        darkMode: true,
        facAuth: false,
        notificationAsEmail: true,
        clearNotification: "Weekly",
      },

      activity: [
        {
          Id: "2325432",
          status: "Success",
          desc: "you change your password Ds****",
          date: new Date(),
        },
        {
          Id: "23253432",
          status: "Success",
          desc: "you change your password Ds****",
          date: new Date(),
        },
      ],
    },
  ],
};

export default data;
