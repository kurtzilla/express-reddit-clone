
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return Promise.all([
    knex('comments').del(),
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({id: 3,
      dtcreated: '2016-06-30 16:59:46',
      title: 'What a Wonderful Evening',
      author: 'Skippy Peterson',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Ethiopia_(1975%E2%80%931987).svg/2000px-Flag_of_Ethiopia_(1975%E2%80%931987).svg.png',
      description: 'Chia vinyl butcher kombucha, letterpress plaid twee lumbersexual salvia next level listicle ennui selfies. Knausgaard cliche waistcoat small batch, trust fund photo booth chicharrones hoodie vinyl narwhal green juice. Neutra before they sold out dreamcatcher keffiyeh, tilde cray mixtape migas shoreditch pinterest. Post-ironic offal yuccie pop-up, letterpress fap twee chambray williamsburg poutine keytar vegan hammock everyday carry.',
      votes: 2
    }),
    knex('posts').insert({id: 1,
      dtcreated: '2016-06-29 20:15:00',
      title: 'Happy Birthday',
      author: 'Karsen Daly',
      image: 'http://www.flagsinformation.com/italian-flag.png',
      description: 'Selvage gastropub narwhal iPhone kale chips, bushwick lo-fi normcore artisan viral tacos. Stumptown cliche authentic, everyday carry narwhal kinfolk tattooed selfies chambray freegan farm-to-table. Kombucha direct trade health goth bicycle rights post-ironic street art, man bun blue bottle gastropub church-key kinfolk farm-to-table fanny pack tofu.',
      votes: -2
    }),
    knex('posts').insert({id: 2,
      dtcreated: '2016-07-03 22:30:00',
      title: 'How I Pay da bills',
      author: 'Fred Garvin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_flag_48_stars.svg/220px-US_flag_48_stars.svg.png',
      description: 'Readymade before they sold out knausgaard, ennui sriracha farm-to-table bitters hashtag VHS. Photo booth pinterest iPhone typewriter XOXO hoodie, pug helvetica. Blue bottle truffaut portland occupy, salvia kitsch heirloom mlkshk. Brooklyn salvia vegan, crucifix pug pitchfork blue bottle selfies irony pinterest green juice microdosing wolf single-origin coffee cold-pressed. You probably haven\'t heard of them kinfolk godard, lo-fi flannel paleo blog. Wolf chillwave cold-pressed, wayfarers portland put a bird on it gluten-free four dollar toast. Helvetica humblebrag hella, beard gentrify aesthetic crucifix wolf pork belly.',
      votes: 6
    }),
    knex('posts').insert({id: 4,
      dtcreated: '2015-11-12 09:00:00',
      title: 'Let\'s get this party started',
      author: 'Menudo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/2000px-Flag_of_Jamaica.svg.png',
      description: 'Marfa XOXO kickstarter, green juice organic church-key twee taxidermy. +1 twee DIY viral. Pop-up fap blog schlitz intelligentsia kinfolk. Quinoa kogi disrupt ethical salvia kickstarter biodiesel, gastropub cronut cliche. Yr viral waistcoat everyday carry flannel. Seitan knausgaard wayfarers skateboard deep v, slow-carb affogato salvia synth cronut wolf. Put a bird on it literally celiac intelligentsia roof party pork belly readymade lumbersexual gastropub.',
      votes: 3
    }),
    knex('posts').insert({id: 5,
      dtcreated: '2016-07-01 12:40:00',
      title: 'Let\'s get something to eat',
      author: 'Rhonda Gearstadt',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyU7_22NfDfwjSmEWHj0zoxL5FzVkY1VctmKZh-Trd3Y7oEJG8',
      description: 'Chia tumblr fixie pug. Tattooed green juice artisan godard photo booth, food truck man braid affogato truffaut cred meditation bushwick DIY taxidermy. Butcher selfies scenester ethical, offal pinterest kitsch +1 green juice meditation jean shorts lomo waistcoat banh mi disrupt. Letterpress VHS heirloom pinterest four loko. YOLO asymmetrical swag retro keytar. Austin sartorial skateboard williamsburg irony, everyday carry cardigan ugh tattooed blue bottle. Brunch mustache authentic echo park truffaut pork belly, pinterest vegan venmo.',
      votes: 1
    }),

    knex.raw('ALTER SEQUENCE posts_id_seq RESTART WITH 6;'),

    knex('comments').insert({postid: 3,
      dtcreated: '2016-06-30 18:59:46',
      author: 'Dr Who',
      text: 'Join me in the TARDIS'
    }),
    knex('comments').insert({postid: 3,
      dtcreated: '2016-07-01 13:59:46',
      author: 'Artie Fufkin',
      text: 'Kick my behind please'
    }),
    knex('comments').insert({postid: 3,
      dtcreated: '2016-07-02 13:59:46',
      author: 'Chaka Khan',
      text: 'I feel for you'
    }),

    knex('comments').insert({postid: 2,
      dtcreated: '2016-07-04 13:59:46',
      author: 'Mjr Tom',
      text: 'Ground control? Ground control?'
    }),

    knex('comments').insert({postid: 4,
      dtcreated: '2016-01-07 12:59:46',
      author: 'Arthur',
      text: 'bring me my car driver!'
    }),
    knex('comments').insert({postid: 4,
      dtcreated: '2016-02-07 12:59:46',
      author: 'Larry',
      text: 'Gesundheit!'
    }),

    knex('comments').insert({postid: 5,
      dtcreated: '2016-07-01 12:56:00',
      author: 'G-dog',
      text: 'hey what\'s happenin'
    }),
    knex('comments').insert({postid: 5,
      dtcreated: '2016-07-03 14:34:00',
      author: 'Froederick',
      text: 'Let\'s get some english muffins'
    })

  ]);
};
