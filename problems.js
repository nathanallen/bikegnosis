var problem_criteria = {
  rhythm: ["regular", "irregular", "intermittent"],
  sound: ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "clunking"] //, "crunching", "tapping", "buzzing", "rubbing", "grinding", "squeaking", "squealing", "whistles", "thump/Silent", "thunk", "cracking"]
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
    image_url: "http://brimages.bikeboardmedia.netdna-cdn.com/wp-content/uploads/2009/06/mavic-2nd-gen-r-sys-wheel-break.jpg"
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
    image_url: "http://www.atomiczombie.com/tutorials/Chain%20Link%20Tool/Figure%2020.jpg"
  },

  { description: "loose handlebar binder bolt",
    sound: ["clicking", "creaking", "ticking", "tapping"],
    rhythm: ["intermittent"],
    revolution_type: "crank",
    worse_when: ["climbing", "standing_and_pedaling"],
    image_url: "http://re-cycle.com/images/Lambert/bolt.jpg"
  },

  { description: "crooked brake caliper",
    sound: ["rubbing"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    image_url: "http://17rg073sukbm1lmjk9jrehb643.wpengine.netdna-cdn.com/wp-content/uploads/2014/02/caliper-225x300.jpg"
  },

  { description: "rubbing kickstand",
    sound: ["rubbing", "buzzing"],
    rhythm: ["regular"],
    revolution_type: "wheel",
    image_url: "http://1.bp.blogspot.com/-pcoWQSQZrWU/UBXc6Ai-VVI/AAAAAAAAEV0/zlA3vhc6gus/s1600/DSCF5164.jpg"
  },

  { description: "hitting kickstand",
    sound: ["rubbing", "clunking", "tapping"],
    rhythm: ["regular"],
    revolution_type: "crank",
    worse_when: "pedaling",
    image_url: "http://4.bp.blogspot.com/-JYl4phRwhyM/UUEPB8_j7bI/AAAAAAAANcs/zMbjLfbEeD0/s1600/DSCF7185.jpg"
  }
]