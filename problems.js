var rhythms = ["regular", "irregular", "intermittent"],
    sounds = ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "clunking"] //, "crunching", "tapping", "buzzing", "rubbing", "grinding", "squeaking", "squealing", "whistles", "thump/Silent", "thunk", "cracking"]
              .sort(),
    revolution_types = ["wheel", "crank", "chain"],
    worse_whens = ["climbing", "standing_and_pedaling", "cornering", "road_is_rough", "coasting", "braking", "pedaling", "accelerating"].sort()
var problems = [
  {description: "broken spoke", sounds: ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "rubbing"], rhythm: {regular: true, revolution_type: "wheel"}, worse_when: {climbing: true, standing_and_pedaling: true}, image_url: "http://brimages.bikeboardmedia.netdna-cdn.com/wp-content/uploads/2009/06/mavic-2nd-gen-r-sys-wheel-break.jpg" },
  {description: "low spoke tension", sounds: ["clicking", "creaking", "pinging", "popping", "ticking", "rubbing"], rhythm: {intermittent: true, revolution_type: "wheel"}, image_url: "http://ep1.pinkbike.org/p4pb7605197/p4pb7605197.jpg" },
  {description: "stiff chainlink", sounds: ["clicking"], rhythm: {regular: true, intermittent: true, revolution_type: "chain"}, image_url: "http://www.atomiczombie.com/tutorials/Chain%20Link%20Tool/Figure%2020.jpg" },
  {description: "loose handlebar binder bolt", sounds: ["clicking", "creaking", "ticking", "tapping"], rhythm: {intermittent: true, revolution_type: "crank"}, worse_when: {climbing: true, standing_and_pedaling: true}, image_url: "http://re-cycle.com/images/Lambert/bolt.jpg"},
  {description: "crooked brake caliper", sounds: ["rubbing"], rhythm: {regular: true, revolution_type: "wheel"}, image_url: "http://17rg073sukbm1lmjk9jrehb643.wpengine.netdna-cdn.com/wp-content/uploads/2014/02/caliper-225x300.jpg"},
  {description: "rubbing kickstand", sounds: ["rubbing", "buzzing"], rhythm: {regular: true, revolution_type: "wheel"}, image_url: "http://1.bp.blogspot.com/-pcoWQSQZrWU/UBXc6Ai-VVI/AAAAAAAAEV0/zlA3vhc6gus/s1600/DSCF5164.jpg"},
  {description: "hitting kickstand", sounds: ["rubbing", "clunking", "tapping"], rhythm: {regular: true, revolution_type: "crank"}, worse_when: {pedaling: true}, image_url: "http://4.bp.blogspot.com/-JYl4phRwhyM/UUEPB8_j7bI/AAAAAAAANcs/zMbjLfbEeD0/s1600/DSCF7185.jpg"  }//,
  // {description: "Is your...", sounds: [], rhythm: {regular: true, irregular: false, intermittent: true, revolution_type: ""}, worse_when: {}, image_url: ""  },
]