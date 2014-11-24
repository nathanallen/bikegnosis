var rhythms = ["regular", "irregular", "intermittent"],
    sounds = ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "clunking"] //, "crunching", "tapping", "buzzing", "rubbing", "grinding", "squeaking", "squealing", "whistles", "thump/Silent", "thunk", "cracking"]
              .sort(),
    revolution_types = ["wheel", "crank", "chain"]
    worse_whens = ["climbing", "standing_and_pedaling", "cornering", "road_is_rough", "coasting", "braking", "pedaling", "accelerating"].sort()
var problems = [
  {description: "broken spoke", sounds: ["clicking", "creaking", "pinging", "popping", "ticking", "rattling", "rubbing"], rhythm: {regular: true, revolution_type: "wheel"}, worse_when: {climbing: true, standing_and_pedaling: true} },
  {description: "low spoke tension", sounds: ["clicking", "creaking", "pinging", "popping", "ticking", "rubbing"], rhythm: {intermittent: true, revolution_type: "wheel"} },
  {description: "stiff chainlink", sounds: ["clicking"], rhythm: {regular: true, intermittent: true, revolution_type: "chain"} },
  {description: "loose handlebar binder bolt", sounds: ["clicking", "creaking", "ticking", "tapping"], rhythm: {intermittent: true, revolution_type: "crank"}, worse_when: {climbing: true, standing_and_pedaling: true} },
  {description: "crooked brake caliper", sounds: ["rubbing"], rhythm: {regular: true, revolution_type: "wheel"} },
  {description: "rubbing kickstand", sounds: ["rubbing", "buzzing"], rhythm: {regular: true, revolution_type: "wheel"} },
  {description: "hitting kickstand", sounds: ["rubbing", "clunking", "tapping"], rhythm: {regular: true, revolution_type: "crank"}, worse_when: {pedaling: true} }//,
  // {description: "Is your...", sounds: [], rhythm: {regular: true, irregular: false, intermittent: true, revolution_type: ""}, worse_when: {} },
]