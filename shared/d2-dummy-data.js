export const td2Data = {
  // userId -> user Object
  users: {
    0: {
      name: 'John Doe'
    },
    1: {
      name: 'Jane Smith'
    },
    2: {
      name: 'Joe Mama'
    }
  },

  // userId -> groupId -> role
  userGroups: {
    0: {
      2: 'volunteer',
      3: 'volunteer'
    },
    1: {
      0: 'coordinator',
      1: 'coordinator',
      3: 'coordinator'
    },
    2: {
      0: 'volunteer',
      2: 'coordinator'
    }
  },

  // groupId -> eventIds
  groupEvents: {
    0: {
      events: [1, 3]
    },
    1: {
      events: [2, 3, 1, 0]
    },
    2: {
      events: [0, 3]
    }
  },

  // eventId -> event Object
  eventDetails: {
    0: {
      name: 'Figma Tutoring',
      type: 'recurring',
      recurrence: {
        interval: 'weekly',
        daysOfWeek: [0, 1, 2, 3] // MON-SUN -> 0-6
      },
      location: 'Soda Hall, Berkeley, CA',
      description:
        'ISO 8601 is an international standard covering the worldwide exchange and communication of date and time-related data. It is maintained by the Geneva-based International Organization for Standardization (ISO) and was first published in 1988, with updates in 1991, 2000, 2004, and 2019, and an amendment in 2022.[1] The standard provides a well-defined, unambiguous method of representing calendar dates and times in worldwide communications, especially to avoid misinterpreting numeric dates and times when such data is transferred between countries with different conventions for writing numeric dates and times. '
    },
    1: {
      name: 'English Literacy Lessons',
      type: 'recurring',
      recurrence: {
        interval: 'weekly',
        daysOfWeek: [4, 5, 6] // MON-SUN -> 0-6
      },
      location: 'Myhal Building, UofT',
      description:
        'ISO 8601 applies to these representations and formats: dates, in the Gregorian calendar (including the proleptic Gregorian calendar); times, based on the 24-hour timekeeping system, with optional UTC offset; time intervals; and combinations thereof.[2] The standard does not assign specific meaning to any element of the dates/times represented: the meaning of any element depends on the context of its use. Dates and times represented cannot use words that do not have a specified numerical meaning within the standard (thus excluding names of years in the Chinese calendar), or that do not use computer characters (excludes images or sounds).[2]'
    },
    2: {
      name: 'Quick Mafs',
      type: 'recurring',
      recurrence: {
        interval: 'weekly',
        daysOfWeek: [0, 1, 2] // MON-SUN -> 0-6
      },
      location: 'Bahen Center of Information, UofT',
      description:
        'In representations that adhere to the ISO 8601 interchange standard, dates and times are arranged such that the greatest temporal term (typically a year) is placed at the left and each successively lesser term is placed to the right of the previous term. Representations must be written in a combination of Arabic numerals and the specific computer characters (such as "-", ":", "T", "W", "Z") that are assigned specific meanings within the standard; that is, such commonplace descriptors of dates (or parts of dates) as "January", "Thursday", or "New Year\'s Day" are not allowed in interchange representations within the standard. '
    },
    3: {
      name: 'Learning is Fun',
      type: 'recurring',
      recurrence: {
        interval: 'weekly',
        daysOfWeek: [3, 4, 5, 6]
      },
      location: 'Toronto, Ontario',
      description:
        'In representations that adhere to the ISO 8601 interchange standard, dates and times are arranged such that the greatest temporal term (typically a year) is placed at the left and each successively lesser term is placed to the right of the previous term. Representations must be written in a combination of Arabic numerals and the specific computer characters (such as "-", ":", "T", "W", "Z") that are assigned specific meanings within the standard; that is, such commonplace descriptors of dates (or parts of dates) as "January", "Thursday", or "New Year\'s Day" are not allowed in interchange representations within the standard. '
    }
  },

  // eventId -> announcement Objects
  eventAnnouncements: {
    0: [
      //   {
      //     id: 0,
      //     sentAt: '2022-11-02T01:13:15',
      //     title: 'Nuclear Strike Alert!',
      //     description: 'THIS IS NOT A DRILL. PLEASE SEEK SHELTER. '
      //   },
      //   {
      //     id: 1,
      //     sentAt: '2022-11-02T11:15:00',
      //     title: 'False Alarm!',
      //     description: 'SORRY GUYS! That was a fat finger moment.'
      //   }
      // ],
      // 1: [
      //   {
      //     id: 2,
      //     sentAt: '2022-10-24T12:26:05',
      //     title: 'Midterm canceled',
      //     description: 'That right! No more midterm. Free marks for all!'
      //   },
      //   {
      //     id: 3,
      //     sentAt: '2022-10-30T10:11:50',
      //     title: 'Student Cybercrime Notice',
      //     description:
      //       'A student has hacked into our system and sent out a false midterm cancellation notice, which caused unnecessary disruption. Anyone with information leading to the identification of said student will receive an automatic A in this course. Thank you.'
      //   }
    ],
    2: [
      // {
      //   id: 4,
      //   sentAt: '2022-10-31T12:32:23',
      //   title: 'Putnam competition info',
      //   description: "Give up lmao you won't win anything lol. "
      // },
      {
        id: 5,
        sentAt: '2022-11-01T14:16:01',
        title: 'Midterm Study Session',
        description:
          'Midterm study session will be held in the Chem building. Attendees will receive a secret token they can use on the exam for an automatic 10% grade boost.'
      }
      // {
      //   id: 6,
      //   sentAt: '2022-11-02T18:09:22',
      //   title: 'Prof has some issues',
      //   description:
      //     "Hey students: my girlfriend dumped me and I'm now getting drunk at a bar. Probably won't be at the midterm tomorrow. Please follow the TA's instructions. Thanc"
      // }
    ]
  }
}
