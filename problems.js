var problem_criteria = {
  rhythm: ["regular", "irregular", "intermittent"],
  sound: ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "clunking"] //, "crunching", "tapping", "buzzing", "rubbing", "grinding", "squeaking", "squealing", "whistling", "thumping", "thunking", "cracking"]
                .sort(),
  revolution_type: ["wheel", "crank", "chain"],
  worse_when: ["climbing", "standing_and_pedaling", "cornering", "road_is_rough", "coasting", "braking", "pedaling", "accelerating"].sort()
}

var no_results = [{
  description: "Aww, crap! I dunno!",
  image_url: "https://farm5.staticflickr.com/4075/4758394595_5129178324_z.jpg",
  image_source: "https://www.flickr.com/photos/exfordy/4758394595/in/photostream/"
}]

var problems = [
  { description: "broken spoke",
    sound: ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "rubbing"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    worse_when: ["climbing", "standing_and_pedaling"],
    image_url: "https://farm3.staticflickr.com/2384/2499574430_aa2646508c_z.jpg",
    image_source: "https://www.flickr.com/photos/mitsukuni/2499574430"
  },

  { description: "low spoke tension",
    sound: ["clicking", "creaking", "pinging", "popping", "ticking", "rubbing"],
    rhythm: ["intermittent"],
    revolution_type: "wheel",
    image_url: "http://ep1.pinkbike.org/p4pb7605197/p4pb7605197.jpg"
  },

  { description: "stiff chainlink",
    sound: ["clicking"],
    rhythm: ["regular", "intermittent"],
    revolution_type: "chain",
    image_url: "https://farm8.staticflickr.com/7036/6834652858_039bf183fa_z.jpg",
    image_source: "https://www.flickr.com/photos/quinnanya/6834652858"
  },

  { description: "bent chainlink",
    sound: ["clicking", "crunching", "clunking"],
    rhythm: ["regular", "intermittent"],
    revolution_type: "chain",
    image_url: "https://farm1.staticflickr.com/168/464272887_2a8bb5209c_z.jpg",
    image_source: "https://www.flickr.com/photos/phatcontroller/464272887"
  },

  { description: "loose handlebar binder bolt",
    sound: ["clicking", "creaking", "ticking", "tapping"],
    rhythm: ["intermittent"],
    revolution_type: "crank",
    worse_when: ["climbing", "standing_and_pedaling"],
    image_url: "https://farm1.staticflickr.com/6/76609384_d3b5b68ed2_z.jpg",
    image_source: "https://www.flickr.com/photos/chainsawpanda/76609384"
  },

  { description: "crooked brake caliper",
    sound: ["rubbing"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    image_url: "http://17rg073sukbm1lmjk9jrehb643.wpengine.netdna-cdn.com/wp-content/uploads/2014/02/caliper-225x300.jpg"
  },

  { description: "tire rubbing kickstand",
    sound: ["rubbing", "buzzing"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    image_url: "http://1.bp.blogspot.com/-pcoWQSQZrWU/UBXc6Ai-VVI/AAAAAAAAEV0/zlA3vhc6gus/s1600/DSCF5164.jpg"
  },

  { description: "crank hitting kickstand",
    sound: ["rubbing", "clunking", "tapping", "ticking"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    worse_when: "pedaling",
    image_url: "http://4.bp.blogspot.com/-JYl4phRwhyM/UUEPB8_j7bI/AAAAAAAANcs/zMbjLfbEeD0/s1600/DSCF7185.jpg"
  },

  { description: "crank hitting front deraileur cable",
    sound: ["ticking"],
    rhythm: ["regular"],
    revolution_type: "crank",
    worse_when: "pedaling",
    image_url: "https://farm9.staticflickr.com/8101/8530370330_5ba02fc051_z.jpg",
    image_source: "https://www.flickr.com/photos/officinesfera/8530370330"
  },
  
  { description: "loose chainring bolt",
    sound: ["creaking", "clicking", "ticking"],
    rhythm: ["regular"],
    revolution_type: "crank",
    worse_when: ["pedaling", "standing_and_pedaling", "accelerating", "climbing"],
    image_url: "https://farm1.staticflickr.com/12/18721442_979372fd64_z.jpg",
    image_source: "https://www.flickr.com/photos/sethw/18721442"
  },

  { description: "loose seatpost bolt",
    sound: ["creaking", "clicking", "ticking"],
    rhythm: ["intermittent", "regular", "irregular"],
    revolution_type: "crank",
    worse_when: ["pedaling"],
    image_url: "https://farm4.staticflickr.com/3215/2798741793_240d7fe0ce_z.jpg",
    image_source: "https://www.flickr.com/photos/wrrza/2798741793"
  },

  { description: "bent rim",
    sound: ["ticking", "tapping", "rubbing", "thumping"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    worse_when: ["coasting", "pedaling"],
    image_url: "https://farm4.staticflickr.com/3225/2756283184_ce9666296b_z.jpg",
    image_source: "https://www.flickr.com/photos/_pixelmaniac_/2756283184"
  },

  { description: "loose presta valve",
    sound: ["rattling", "buzzing"],
    rhythm: ["irregular", "intermittent"],
    revolution_type: "wheel",
    worse_when: ["cornering", "road_is_rough"],
    image_url: "https://farm6.staticflickr.com/5016/5515387076_2bb2767bb7_z.jpg",
    image_source: "https://www.flickr.com/photos/ubrayj02/5515387076"
  },

  { description: "loose caliper brake",
    sound: ["clunking"],
    rhythm: ["irregular", "intermittent"],
    revolution_type: "",
    worse_when: ["braking"],
    image_url: "https://farm3.staticflickr.com/2266/2037111854_8a240125db_z.jpg",
    image_source: "https://www.flickr.com/photos/jeremybrooks/2037111854"
  },

  { description: "loose headset",
    sound: ["clunking"],
    rhythm: ["irregular", "intermittent"],
    revolution_type: "crank",
    worse_when: ["braking", "climbing", "accelerating", "road_is_rough"],
    image_url: "https://farm4.staticflickr.com/3908/14738164830_cc36c9310d_z.jpg",
    image_source: "https://www.flickr.com/photos/w00ter/14738164830"
  },

  { description: "loose axle",
    sound: ["rattling"],
    rhythm: ["irregular", "intermittent"],
    revolution_type: "",
    worse_when: ["road_is_rough"],
    image_url: "https://farm7.staticflickr.com/6006/5993579293_5fb2d4182e_z.jpg",
    image_source: "https://www.flickr.com/photos/14degrees/5993579293"
  },

  { description: "cable slap",
    sound: ["rattling", "ticking", "tapping", "ping", "ding"],
    rhythm: ["irregular", "intermittent"],
    revolution_type: "",
    worse_when: ["road_is_rough"],
    image_url: "https://farm2.staticflickr.com/1426/814890918_f7206203b5_z.jpg",
    image_source: "https://www.flickr.com/photos/14degrees/5993579293"
  },

  { description: "chain slap",
    sound: ["rattling", "ticking", "tapping", "ping", "ding"],
    rhythm: ["irregular", "intermittent"],
    revolution_type: "",
    worse_when: ["road_is_rough"],
    image_url: "https://farm4.staticflickr.com/3084/3220898843_0b293cb66c_z.jpg",
    image_source: "https://www.flickr.com/photos/bike/3220898843"
  },

]
