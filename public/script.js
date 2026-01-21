// =====================
// TILE SIZE & POSITIONS
// =====================

// Default size for NON-corner tiles (in pixels)
const TILE_WIDTH = 81;
const TILE_HEIGHT = 134;

// Corner tile indices and size (square corners)
const CORNER_TILES = [0, 10, 20, 30];
const CORNER_SIZE = 134; // width & height for corner tiles

// Manual position table: top/left (in pixels inside 1100×1100 boardContainer)
const TILE_POSITIONS = {
  0:  { top: 969, left: 969 },
  1:  { top: 990, left: 885 },
  2:  { top: 990, left: 804 },
  3:  { top: 990, left: 723 },
  4:  { top: 990, left: 642 },
  5:  { top: 990, left: 561 },
  6:  { top: 990, left: 480 },
  7:  { top: 990, left: 399 },
  8:  { top: 990, left: 318 },
  9:  { top: 990, left: 237 },
  10: { top: 990, left: 40  },

  11: { top: 855, left: 120 },
  12: { top: 774, left: 120 },
  13: { top: 693, left: 120 },
  14: { top: 612, left: 120 },
  15: { top: 531, left: 120 },
  16: { top: 450, left: 120 },
  17: { top: 369, left: 120 },
  18: { top: 288, left: 120 },
  19: { top: 207, left: 120 },
  20: { top: 100, left: 100 },

  21: { top: 80,  left: 237 },
  22: { top: 80,  left: 318 },
  23: { top: 80,  left: 399 },
  24: { top: 80,  left: 480 },
  25: { top: 80,  left: 561 },
  26: { top: 80,  left: 642 },
  27: { top: 80,  left: 723 },
  28: { top: 80,  left: 804 },
  29: { top: 80,  left: 885 },
  30: { top: 60,  left: 969 },

  31: { top: 207, left: 1010 },
  32: { top: 288, left: 1010 },
  33: { top: 369, left: 1010 },
  34: { top: 450, left: 1010 },
  35: { top: 531, left: 1010 },
  36: { top: 612, left: 1010 },
  37: { top: 693, left: 1010 },
  38: { top: 774, left: 1010 },
  39: { top: 855, left: 1010 }
};

// =====================
// BORDER OFFSET FIX (50px empty border around board)
// =====================

const BOARD_BORDER_OFFSET = 50;

for (let key in TILE_POSITIONS) {
  TILE_POSITIONS[key].top -= BOARD_BORDER_OFFSET;
  TILE_POSITIONS[key].left -= BOARD_BORDER_OFFSET;
}

// =====================
// TILE BOX ADJUSTMENTS (for hover glow alignment)
// =====================

const TILE_BOX_ADJUST = {
  default: { offsetTop: 0, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },

  bottom:  { offsetTop: -1, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
  top:     { offsetTop: 22, offsetLeft: -10, extraWidth: 0, extraHeight: 0 },
  left:    { offsetTop: 27, offsetLeft: -20, extraWidth: 53, extraHeight: -53 },
  right:   { offsetTop: 27, offsetLeft: -45, extraWidth: 53, extraHeight: -53 },

  overrides: {
    0:  { offsetTop: 0, offsetLeft: -2, extraWidth: -1, extraHeight: 0 },
    1:  { offsetTop: -20, offsetLeft: 0, extraWidth: -1, extraHeight: 0 },
    2:  { offsetTop: -20, offsetLeft: -0.25, extraWidth: -1, extraHeight: 0 },
    3:  { offsetTop: -20, offsetLeft: -0.75, extraWidth: -1, extraHeight: 0 },
    4:  { offsetTop: -20, offsetLeft: -1.25, extraWidth: -1, extraHeight: 0 },
    5:  { offsetTop: -20, offsetLeft: -1.75, extraWidth: -1, extraHeight: 0 },
    6:  { offsetTop: -20, offsetLeft: -2.25, extraWidth: -1, extraHeight: 0 },
    7:  { offsetTop: -20, offsetLeft: -2.75, extraWidth: -1, extraHeight: 0 },
    8:  { offsetTop: -20, offsetLeft: -3.25, extraWidth: -1, extraHeight: 0 },
    9:  { offsetTop: -20, offsetLeft: -3.75, extraWidth: -1, extraHeight: 0 },
    10: { offsetTop: -20, offsetLeft: 60, extraWidth: 0, extraHeight: 0 },
    11: { offsetTop: 3, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    12: { offsetTop: 2.75, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    13: { offsetTop: 2.5, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    14: { offsetTop: 2.25, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    15: { offsetTop: 2, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    16: { offsetTop: 1.75, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    17: { offsetTop: 1.5, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    18: { offsetTop: 1.25, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    19: { offsetTop: 1, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    20: { offsetTop: 0, offsetLeft: -1, extraWidth: 0, extraHeight: 0 },
    21: { offsetTop: 0, offsetLeft: 6, extraWidth: -1, extraHeight: -1 },
    22: { offsetTop: 0, offsetLeft: 6.5, extraWidth: -1, extraHeight: -1 },
    23: { offsetTop: 0, offsetLeft: 7, extraWidth: -1, extraHeight: -1 },
    24: { offsetTop: 0, offsetLeft: 7, extraWidth: -1, extraHeight: -1 },
    25: { offsetTop: 0, offsetLeft: 8, extraWidth: -1, extraHeight: -1 },
    26: { offsetTop: 0, offsetLeft: 8, extraWidth: -1, extraHeight: -1 },
    27: { offsetTop: 0, offsetLeft: 9, extraWidth: -2, extraHeight: -1 },
    28: { offsetTop: 0, offsetLeft: 9, extraWidth: -1, extraHeight: -1 },
    29: { offsetTop: 0, offsetLeft: 9, extraWidth: -1, extraHeight: -1 },
    30: { offsetTop: 40, offsetLeft: -5, extraWidth: 0, extraHeight: 0 },
    31: { offsetTop: 1, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    32: { offsetTop: 1.25, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    33: { offsetTop: 1.5, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    34: { offsetTop: 1.75, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    35: { offsetTop: 2, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    36: { offsetTop: 2.25, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    37: { offsetTop: 2.5, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    38: { offsetTop: 2.75, offsetLeft: 0, extraWidth: 0, extraHeight: 0 },
    39: { offsetTop: 3, offsetLeft: 0, extraWidth: 0, extraHeight: 0 }
  }
};

// =====================
// TOKEN SIZE
// =====================

const TOKEN_SIZE = 26; // must match .player width/height in CSS

// =====================
// JAIL TOKEN CONFIG (PIXEL-BASED)
// =====================

const JAIL_TOKEN_PIXEL_OFFSETS = {
  inJail: [
    { dx: 60, dy: 40 },   // Player 1 in jail
    { dx: 90, dy: 40 },   // Player 2 in jail
    { dx: 60, dy: 70 },   // Player 3 in jail
    { dx: 90, dy: 70 }    // Player 4 in jail
  ],
  justVisiting: [
    { dx: 15,  dy: 35  },   // Player 1 just visiting
    { dx: 15,  dy: 85  },   // Player 2
    { dx: 40,  dy: 115 },   // Player 3
    { dx: 85,  dy: 115 }    // Player 4
  ]
};

let players = [
  {
    id: 0,
    name: "Player 1",
    position: 0,
    money: 1500,
    inJail: false,
    jailTurns: 0,
    getOutOfJailCards: 0,
    color: null,
    home: null,
    active: false,
    properties: []
  },
  {
    id: 1,
    name: "Player 2",
    position: 0,
    money: 1500,
    inJail: false,
    jailTurns: 0,
    getOutOfJailCards: 0,
    color: null,
    home: null,
    active: false,
    properties: []
  },
  {
    id: 2,
    name: "Player 3",
    position: 0,
    money: 1500,
    inJail: false,
    jailTurns: 0,
    getOutOfJailCards: 0,
    color: null,
    home: null,
    active: false,
    properties: []
  },
  {
    id: 3,
    name: "Player 4",
    position: 0,
    money: 1500,
    inJail: false,
    jailTurns: 0,
    getOutOfJailCards: 0,
    color: null,
    home: null,
    active: false,
    properties: []
  }
];

// =====================
// GAME RULES
// =====================
const rules = {
    unlimitedHouses: false,
    auctionMode: false,
    freeParkingJackpot: false,
    evenHouseBuild: true,
    startingMoney: 1500
};

const FREE_PARKING_TILE_INDEX = 20;
let freeParkingPot = 0;

// Helper: pay money to the bank (or Free Parking pot if enabled)
function payToBank(player, amount, reason = "") {
  if (!player || amount <= 0) return;

  // Use forced debt mode if they can't afford it
  requirePayment(player, amount, null, reason);
}


// Turn order among READY players (indices into players[])
let turnOrder = [];
let currentTurnPointer = 0;

// Last dice total (for utility rent)
let lastRollTotal = 0;

// Doubles & jail modal state
let doublesInARow = 0;            // how many consecutive doubles this turn
let currentJailPlayerIdx = null;  // index into players[] when jail modal is open

// ========================
// AUCTION MODE STATE
// ========================

let auctionActive = false;
let auctionTileIndex = null;
let auctionPlayers = [];
let auctionCurrentPlayerPtr = 0;
let auctionHighestBid = 0;
let auctionHighestBidderIdx = null;
let auctionPassed = [];

function resetAuctionState() {
    auctionActive = false;
    auctionTileIndex = null;
    auctionPlayers = [];
    auctionCurrentPlayerPtr = 0;
    auctionHighestBid = 0;
    auctionHighestBidderIdx = null;
    auctionPassed = [];
}

function getAuctionTile() {
    return board.find(t => t.index === auctionTileIndex) || null;
}

function startAuction(tile) {
  const active = turnOrder.filter(i => players[i].active);
  if (active.length <= 1) return;

  resetAuctionState();

  auctionActive = true;
  auctionTileIndex = tile.index;
  auctionPlayers = active.slice();
  auctionCurrentPlayerPtr = 0;

  if (auctionPanelEl) {
    auctionPanelEl.style.display = "flex";
  }

  logEvent(`Auction started for ${tile.name}.`);
  updateAuctionUI();
}

function updateAuctionUI() {
  if (!auctionActive || !auctionPanelEl) return;

  const tile = getAuctionTile();
  const currentIdx = auctionPlayers[auctionCurrentPlayerPtr];
  const currentPlayer = players[currentIdx];

  if (auctionPropertyNameEl && tile) {
    auctionPropertyNameEl.textContent = tile.name;
  }
  if (auctionCurrentBidEl) {
    auctionCurrentBidEl.textContent = `$${auctionHighestBid}`;
  }
  if (auctionHighestBidderEl) {
    if (auctionHighestBidderIdx == null) {
      auctionHighestBidderEl.textContent = "None";
    } else {
      auctionHighestBidderEl.textContent = players[auctionHighestBidderIdx].name;
    }
  }
  if (auctionCurrentBidderEl) {
    auctionCurrentBidderEl.textContent = currentPlayer ? currentPlayer.name : "—";
  }

  // Reset / hint for the bid input
  if (auctionBidAmountInput) {
    // minimum valid next bid is current bid + 1
    const minBid = auctionHighestBid + 1;
    auctionBidAmountInput.value = "";
    auctionBidAmountInput.min = String(minBid);
    auctionBidAmountInput.placeholder = `$${minBid} or more`;
  }
}

function endAuction() {
  if (!auctionActive) return;

  if (auctionPanelEl) auctionPanelEl.style.display = "none";

  const tile = getAuctionTile();

  if (tile && auctionHighestBidderIdx != null) {
    const winner = players[auctionHighestBidderIdx];
    if (winner.money >= auctionHighestBid) {
      winner.money -= auctionHighestBid;
      tile.owner = winner.id;

      if (!winner.properties.includes(tile.index)) {
        winner.properties.push(tile.index);
      }

      showInfoModal(`${winner.name} wins the auction for ${tile.name} at $${auctionHighestBid}`);
      logEvent(`${winner.name} won the auction for ${tile.name} at $${auctionHighestBid}.`);

      updateMoneyUI();
      renderBoard();
      updateHoldingsPanel();
    }
  } else if (tile) {
    logEvent(`Auction for ${tile.name} ended with no winner.`);
  }

  resetAuctionState();
}

function advanceAuctionTurn() {
    if (!auctionActive) return;

    const eligible = auctionPlayers.filter(i => {
        return !auctionPassed.includes(i) && players[i].money > auctionHighestBid;
    });

    if (eligible.length <= 1) {
        endAuction();
        return;
    }

    const total = auctionPlayers.length;
    let steps = 0;

    while (steps < total) {
        auctionCurrentPlayerPtr = (auctionCurrentPlayerPtr + 1) % total;

        const idx = auctionPlayers[auctionCurrentPlayerPtr];
        if (!auctionPassed.includes(idx) && players[idx].money > auctionHighestBid) break;

        steps++;
    }

    updateAuctionUI();
}

function handleAuctionBid() {
  if (!auctionActive || !auctionBidBtn) return;

  const currentIdx = auctionPlayers[auctionCurrentPlayerPtr];
  const player = players[currentIdx];

  if (!player || !player.active) {
    advanceAuctionTurn();
    return;
  }

  if (!auctionBidAmountInput) {
    showInfoModal("Bid input is missing.");
    return;
  }

  const raw = auctionBidAmountInput.value.trim();
  const bidAmount = parseInt(raw, 10);

  // Basic validation: must be a number, higher than current bid, and positive
  if (isNaN(bidAmount)) {
    showInfoModal("Please enter a valid whole dollar amount.");
    return;
  }

  if (bidAmount <= auctionHighestBid) {
    showInfoModal(
      `Your bid must be higher than the current bid of $${auctionHighestBid}.`
    );
    return;
  }

  if (bidAmount <= 0) {
    showInfoModal("Bid amount must be greater than zero.");
    return;
  }

  if (bidAmount > player.money) {
    showInfoModal(
      `${player.name} does not have enough money to bid $${bidAmount}. (Current: $${player.money})`
    );
    return;
  }

  // Bid is valid: record as new highest bid
  auctionHighestBid = bidAmount;
  auctionHighestBidderIdx = currentIdx;

  const tile = getAuctionTile();
  logEvent(
    `${player.name} bids $${bidAmount} on ${tile ? tile.name : "unknown property"}.`
  );

  // If this player had previously passed, remove them from the passed list
  auctionPassed = auctionPassed.filter(idx => idx !== currentIdx);

  // Advance to the next eligible player
  advanceAuctionTurn();
}

function handleAuctionPass() {
  if (!auctionActive) return;

  const currentIdx = auctionPlayers[auctionCurrentPlayerPtr];

  if (!auctionPassed.includes(currentIdx)) {
    auctionPassed.push(currentIdx);
  }

  const player = players[currentIdx];
  const tile = getAuctionTile();
  logEvent(
    `${player.name} passes in the auction for ${tile ? tile.name : "unknown property"}.`
  );

  advanceAuctionTurn();
}

// =====================
// EDGE / INDICATOR CONFIG
// =====================

function getEdgeType(index) {
  if (index >= 1 && index <= 9) return "bottom";
  if (index >= 11 && index <= 19) return "left";
  if (index >= 21 && index <= 29) return "top";
  if (index >= 31 && index <= 39) return "right";
  return null;
}

/*
  House bar config: where houses/hotel icons row sits.
*/
HOUSE_BAR_CONFIG = {
  // Bottom row tiles (1–9): inner side = toward the top of the tile
  bottom: {
    topFrac: 0.15,   // near the tile’s inner edge (toward center of board)
    leftFrac: 0.5
  },

  // Top row tiles (21–29): inner side = toward the bottom of the tile
  top: {
    topFrac: 0.85,   // near the inner edge (toward center of board)
    leftFrac: 0.5
  },

  // Left column tiles (11–19): inner side = toward the right of the tile
  left: {
    topFrac: 0.5,
    leftFrac: 0.9   // pushed toward the board center
  },

  // Right column tiles (31–39): inner side = toward the left of the tile
  right: {
    topFrac: 0.5,
    leftFrac: 0.1   // closer to center side of tile
  }
};

// =====================
// BOARD DATA (with houses/hotels + rents + mortgage)
// =====================

const board = [
  { index: 0,  name: "Go", type: "go" },

  {
    index: 1,
    name: "Goshen Acquatic Center",
    type: "property",
    price: 60,
    baseRent: 2,
    group: "Sport",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 2, 1: 10, 2: 30, 3: 90, 4: 160, hotel: 250 }
  },
  { index: 2,  name: "Community Chest",        type: "community-chest" },
  {
    index: 3,
    name: "East Arm Rowing Club",
    type: "property",
    price: 60,
    baseRent: 4,
    group: "Sport",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 4, 1: 20, 2: 60, 3: 180, 4: 320, hotel: 450 }
  },
  { index: 4,  name: "Flower Tax",             type: "tax", amount: 200 },

  { index: 5,  name: "EWR", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  {
    index: 6,
    name: "Greenwood Lake Middle School",
    type: "property",
    price: 100,
    baseRent: 6,
    group: "GradeSchool",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 6, 1: 30, 2: 90, 3: 270, 4: 400, hotel: 550 }
  },
  { index: 7,  name: "Chance",                type: "chance" },
  {
    index: 8,
    name: "Warwick Valley Middle School",
    type: "property",
    price: 100,
    baseRent: 6,
    group: "GradeSchool",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 6, 1: 30, 2: 90, 3: 270, 4: 400, hotel: 550 }
  },
  {
    index: 9,
    name: "Warwick Valley High School",
    type: "property",
    price: 120,
    baseRent: 8,
    group: "GradeSchool",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 8, 1: 40, 2: 100, 3: 300, 4: 450, hotel: 600 }
  },

  { index: 10, name: "Long Distance / Just Visiting", type: "jail" },

  {
    index: 11,
    name: "Little John Colliseum",
    type: "property",
    price: 140,
    baseRent: 10,
    group: "Stadium",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 10, 1: 50, 2: 150, 3: 450, 4: 625, hotel: 750 }
  },

  { index: 12, name: "St. Andrew's Catholic Church", type: "utility", price: 150, owner: null, mortgaged: false },

  {
    index: 13,
    name: "Doug Kingsmore Stadium",
    type: "property",
    price: 140,
    baseRent: 10,
    group: "Stadium",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 10, 1: 50, 2: 150, 3: 450, 4: 625, hotel: 750 }
  },
  {
    index: 14,
    name: "Memorial Stadium",
    type: "property",
    price: 160,
    baseRent: 12,
    group: "Stadium",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 12, 1: 60, 2: 180, 3: 500, 4: 700, hotel: 900 }
  },

  { index: 15, name: "GSP", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  {
    index: 16,
    name: "Gressette Hall",
    type: "property",
    price: 180,
    baseRent: 14,
    group: "ClemsonHalls",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 14, 1: 70, 2: 200, 3: 550, 4: 750, hotel: 950 }
  },
  { index: 17, name: "Community Chest",        type: "community-chest" },
  {
    index: 18,
    name: "Holtzendorff Hall",
    type: "property",
    price: 180,
    baseRent: 14,
    group: "ClemsonHalls",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 14, 1: 70, 2: 200, 3: 550, 4: 750, hotel: 950 }
  },
  {
    index: 19,
    name: "Cooper Library",
    type: "property",
    price: 200,
    baseRent: 16,
    group: "ClemsonHalls",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 16, 1: 80, 2: 220, 3: 600, 4: 800, hotel: 1000 }
  },

  { index: 20, name: "No Wake Zone",           type: "free-parking" },

  {
    index: 21,
    name: "The DUC",
    type: "property",
    price: 220,
    baseRent: 18,
    group: "DesalesHall",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 18, 1: 90, 2: 250, 3: 700, 4: 875, hotel: 1050 }
  },
  { index: 22, name: "Chance",                 type: "chance" },
  {
    index: 23,
    name: "Dorothy Day",
    type: "property",
    price: 220,
    baseRent: 18,
    group: "DesalesHall",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 18, 1: 90, 2: 250, 3: 700, 4: 875, hotel: 1050 }
  },
  {
    index: 24,
    name: "Hurd Science Center",
    type: "property",
    price: 240,
    baseRent: 20,
    group: "DesalesHall",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 20, 1: 100, 2: 300, 3: 750, 4: 925, hotel: 1100 }
  },

  { index: 25, name: "ABE", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  {
    index: 26,
    name: "Tocik Hall",
    type: "property",
    price: 260,
    baseRent: 22,
    group: "DesalesDorm",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 22, 1: 110, 2: 330, 3: 800, 4: 975, hotel: 1150 }
  },
  {
    index: 27,
    name: "Donahue Hall",
    type: "property",
    price: 260,
    baseRent: 22,
    group: "DesalesDorm",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 22, 1: 110, 2: 330, 3: 800, 4: 975, hotel: 1150 }
  },

  { index: 28, name: "St. Stephen's Catholic Church", type: "utility", price: 150, owner: null, mortgaged: false },

  {
    index: 29,
    name: "Gambet Center",
    type: "property",
    price: 280,
    baseRent: 24,
    group: "DesalesDorm",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 24, 1: 120, 2: 360, 3: 850, 4: 1025, hotel: 1200 }
  },

  { index: 30, name: "Go to Long Distance",    type: "go-to-jail" },

  {
    index: 31,
    name: "M&T Bank Stadium",
    type: "property",
    price: 300,
    baseRent: 26,
    group: "Teams",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 26, 1: 130, 2: 390, 3: 900, 4: 1100, hotel: 1275 }
  },
  {
    index: 32,
    name: "Yankee Stadium",
    type: "property",
    price: 300,
    baseRent: 26,
    group: "Teams",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 26, 1: 130, 2: 390, 3: 900, 4: 1100, hotel: 1275 }
  },
  { index: 33, name: "Community Chest",        type: "community-chest" },
  {
    index: 34,
    name: "Madison Square Garden",
    type: "property",
    price: 320,
    baseRent: 28,
    group: "Teams",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 28, 1: 150, 2: 450, 3: 1000, 4: 1200, hotel: 1400 }
  },

  { index: 35, name: "ATL", type: "airport", price: 200, baseRent: 25, owner: null, mortgaged: false },

  { index: 36, name: "Chance",                 type: "chance" },
  {
    index: 37,
    name: "132 Lake Street",
    type: "property",
    price: 350,
    baseRent: 35,
    group: "Homes",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 35, 1: 175, 2: 500, 3: 1100, 4: 1300, hotel: 1500 }
  },
  
  { index: 38, name: "Cuddle Tax",             type: "tax", amount: 75 },
  {
    index: 39,
    name: "9 Cottage Street",
    type: "property",
    price: 400,
    baseRent: 50,
    group: "Homes",
    owner: null,
    houses: 0,
    hotel: false,
    mortgaged: false,
    rents: { 0: 50, 1: 200, 2: 600, 3: 1400, 4: 1700, hotel: 2000 }
  }
];

// =====================
// GLOBAL HOUSE / HOTEL SUPPLY
// =====================

const MAX_HOUSES = 32;
const MAX_HOTELS = 12;

// Remaining pieces in the "bank"
let houseSupply = MAX_HOUSES;
let hotelSupply = MAX_HOTELS;

// If the board ever starts with houses/hotels on it,
// this keeps supply in sync with the current board state.
function recomputeHouseHotelSupplyFromBoard() {
  let housesUsed = 0;
  let hotelsUsed = 0;

  board.forEach(tile => {
    if (tile.type === "property") {
      housesUsed += tile.houses || 0;
      if (tile.hotel) hotelsUsed += 1;
    }
  });

  houseSupply = Math.max(0, MAX_HOUSES - housesUsed);
  hotelSupply = Math.max(0, MAX_HOTELS - hotelsUsed);

  // Keep the UI in sync
  updateBankSupplyUI();
}

// =====================
// CHANCE & COMMUNITY DECKS
// =====================

// Helper to shuffle decks
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// CHANCE CARDS
let chanceDeck = [
  { id: "home", text: "Time to head home. Advance to your home space." },
  { id: "nearestAirport", text: "Time to take a flight. Head to the nearest airport." },
  { id: "go", text: "Advance to GO. Collect $200." },
  { id: "nearestAirport", text: "Time to take a flight. Head to the nearest airport." },
  { id: "duc", text: "Go to The DUC for lunch. Collect $200 if you pass GO." },
  { id: "nearestUtility", text: "It's Sunday. Go to the nearest church. Pay 10× dice if owned." },
  { id: "stadium", text: "Advance to Memorial Stadium. Collect $200 if you pass GO." },
  { id: "plus50", text: "Perfect day on the lake. Collect $50." },
  { id: "jailFree", text: "Get a free flight to visit. Escape long distance." },
  { id: "minus15", text: "You crashed into a Porsche. Pay $15." },
  { id: "back3", text: "Go back 3 spaces." },
  { id: "goEWR", text: "Take a flight to Newark. Head to EWR airport." },
  { id: "jail", text: "Back to school. Go directly to long distance." },
  { id: "payPlayers50", text: "Pay each player $50 for dinner." },
  { id: "repairs25", text: "General repairs: Pay $25 per house, $100 per hotel." },
  { id: "plus150", text: "You chose dinner. Collect $150." }
];

// COMMUNITY CHEST CARDS
let communityDeck = [
  { id: "go", text: "Advance to GO. Collect $200." },
  { id: "jailFree", text: "Get a free flight to visit. Escape long distance." },
  { id: "plus200", text: "Forgot to pay bill… but bank didn't notice. Collect $200." },
  { id: "jail", text: "Back to school. Go directly to long distance." },
  { id: "minus50", text: "Doctor visit. Pay $50." },
  { id: "plus100", text: "Lake weekend fund matures. Collect $100." },
  { id: "plus70", text: "Stock sale + date refund. Collect $70." },
  { id: "birthday", text: "Happy birthday! Collect $10 from every player." },
  { id: "plus25", text: "Perfect scoop of ice cream. Collect $25." },
  { id: "plus100b", text: "Distance made you stronger. Collect $100." },
  { id: "repairs40", text: "Repair floors: Pay $40 per house, $115 per hotel." },
  { id: "minus100", text: "Sunburnt on lake. Pay $100." },
  { id: "plus10", text: "Best dance moves. Collect $10." },
  { id: "minus50b", text: "Airport goodbyes course. Pay $50." },
  { id: "plus100c", text: "Finally reunited! Collect $100." },
];

shuffleDeck(chanceDeck);
shuffleDeck(communityDeck);


// =====================
// COLOR MAP & DOM
// =====================

const COLOR_MAP = {
  "Orange": "#F56600",
  "Purple": "#522D80",
  "Blue":   "#002857",
  "Red":    "#C20F2F"
};

const setupScreen        = document.getElementById("setupScreen");
const startGameBtn       = document.getElementById("startGameBtn");
const setupHint          = document.getElementById("setupHint");
const rollBtn            = document.getElementById("rollBtn");
const tradeBtn           = document.getElementById("tradeBtn");
const bankruptBtn        = document.getElementById("bankruptBtn");
const endTurnBtn         = document.getElementById("endTurnBtn");
const diceResultEl       = document.getElementById("diceResult");
const currentTurnDisplay = document.getElementById("currentTurnDisplay");
const turnPhaseDisplay   = document.getElementById("turnPhaseDisplay");
const boardContainerEl   = document.getElementById("boardContainer");
const boardCenterHitbox  = document.getElementById("boardCenterHitbox");


// Property info panel elements (left side panel)
const propertyInfoPanel   = document.querySelector(".property-panel");
const propertyDetailsEl   = document.getElementById("propertyDetails");
const propertyActionBtn1  = document.getElementById("propertyActionBtn1"); // green
const propertyActionBtn2  = document.getElementById("propertyActionBtn2"); // red

let selectedTileIndex     = null;
let lastSelectedTileEl    = null;

// Holdings panel / overlay
const holdingsPanelEl        = document.getElementById("currentPlayerHoldings");
const holdingsOverlayEl      = document.getElementById("holdingsOverlay");
const holdingsPlayerNameEl   = document.getElementById("holdingsPlayerName");
const holdingsPlayerSelectEl = document.getElementById("holdingsPlayerSelect");
const seeHoldingsBtn         = document.getElementById("seeHoldingsBtn");
const closeHoldingsBtn       = document.getElementById("closeHoldingsBtn");

// Event log DOM element
const eventLogEl             = document.getElementById("eventLog");


// =====================
// EVENT LOG / TURN HISTORY (Filtered - safe for current script)
// =====================

const EVENT_LOG_MAX = 80;
const eventLogEntries = [];

function shouldSkipEvent(message) {
  const m = String(message || "").toLowerCase();

  // 1) Dice rolls
  if (m.includes("rolled")) return true;
  if (m.includes("dice")) return true;

  // 2) New game / setup spam
  if (m.includes("new game")) return true;
  if (m.includes("game started")) return true;
  if (m.includes("setup")) return true;

  // 3) Movement / landing spam
  if (m.includes("landed on")) return true;
  if (m.includes("moved to")) return true;
  if (m.includes("moved")) return true;
  if (m.includes("passed go")) return true;
  if (m.includes("advance to")) return true;

  return false;
}

function renderEventLog() {
  if (!eventLogEl) return;

  if (!eventLogEntries.length) {
    eventLogEl.innerHTML = "<p>No events yet.</p>";
    return;
  }

  eventLogEl.innerHTML = `
    <ul class="event-log-list-items">
      ${eventLogEntries.map(msg => `<li>${msg}</li>`).join("")}
    </ul>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function logEvent(message) {
  // If log DOM isn't on this screen, just skip
  if (!eventLogEl) return;

  const msg = String(message || "");
  if (shouldSkipEvent(msg)) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  // Escape HTML to avoid broken DOM if message has symbols
  const line = `[${timeStr}] ${escapeHtml(msg)}`;

  eventLogEntries.unshift(line);
  if (eventLogEntries.length > EVENT_LOG_MAX) {
    eventLogEntries.pop();
  }

  renderEventLog();
}

// Trade panel elements
const tradePanelEl              = document.getElementById("tradePanel");
const tradeOtherPlayerSelect    = document.getElementById("tradeOtherPlayerSelect");
const tradeMoneyOfferedInput    = document.getElementById("tradeMoneyOffered");
const tradeMoneyRequestedInput  = document.getElementById("tradeMoneyRequested");
const tradeGiveListEl           = document.getElementById("tradeGiveList");
const tradeReceiveListEl        = document.getElementById("tradeReceiveList");
const tradeConfirmBtn           = document.getElementById("tradeConfirmBtn");
const tradeCancelBtn            = document.getElementById("tradeCancelBtn");

// Track which tiles are selected in each column
let tradeGiveSelectedIndices    = new Set();
let tradeReceiveSelectedIndices = new Set();


// Auction panel elements
const auctionPanelEl         = document.getElementById("auctionPanel");
const auctionPropertyNameEl  = document.getElementById("auctionPropertyName");
const auctionCurrentBidEl    = document.getElementById("auctionCurrentBid");
const auctionHighestBidderEl = document.getElementById("auctionHighestBidder");
const auctionCurrentBidderEl = document.getElementById("auctionCurrentBidder");
const auctionBidAmountInput  = document.getElementById("auctionBidAmount");
const auctionBidBtn          = document.getElementById("auctionBidBtn");
const auctionPassBtn         = document.getElementById("auctionPassBtn");


// Jail / Long Distance modal elements
const jailModalEl     = document.getElementById("jailModal");
const jailModalTextEl = document.getElementById("jailModalText");
const jailUseCardBtn  = document.getElementById("jailUseCardBtn");
const jailPayBtn      = document.getElementById("jailPayBtn");
const jailRollBtn     = document.getElementById("jailRollBtn");

// Center dice overlay elements
let diceOverlayEl = null;
let diceOverlayTextEl = null;
let diceDie1El = null;
let diceDie2El = null;

if (boardContainerEl) {
  diceOverlayEl = document.createElement("div");
  diceOverlayEl.id = "diceOverlay";
  diceOverlayEl.innerHTML = `
    <div class="dice-box">
      <div class="dice-pair">
        <div class="die-face value-1" id="diceDie1">
          <span class="pip pip-1"></span>
          <span class="pip pip-2"></span>
          <span class="pip pip-3"></span>
          <span class="pip pip-4"></span>
          <span class="pip pip-5"></span>
          <span class="pip pip-6"></span>
          <span class="pip pip-7"></span>
          <span class="pip pip-8"></span>
          <span class="pip pip-9"></span>
        </div>
        <div class="die-face value-1" id="diceDie2">
          <span class="pip pip-1"></span>
          <span class="pip pip-2"></span>
          <span class="pip pip-3"></span>
          <span class="pip pip-4"></span>
          <span class="pip pip-5"></span>
          <span class="pip pip-6"></span>
          <span class="pip pip-7"></span>
          <span class="pip pip-8"></span>
          <span class="pip pip-9"></span>
        </div>
      </div>
      <div class="dice-total-text">
        <span id="diceOverlayText">Roll!</span>
      </div>
    </div>
  `;
  boardContainerEl.appendChild(diceOverlayEl);
  diceOverlayTextEl = document.getElementById("diceOverlayText");
  diceDie1El = document.getElementById("diceDie1");
  diceDie2El = document.getElementById("diceDie2");
}

// Helper to set which pips are visible on a die
function setDieFace(el, value) {
  if (!el) return;
  for (let v = 1; v <= 6; v++) {
    el.classList.remove(`value-${v}`);
  }
  const clamped = Math.min(6, Math.max(1, value));
  el.classList.add(`value-${clamped}`);
}


// Make property panel taller (no scroll) via JS
if (propertyInfoPanel) {
  propertyInfoPanel.style.maxHeight = "650px";
}

// =====================
// NAME, COLOR, HOME INPUTS
// =====================

const numPlayersSelect = document.getElementById("numPlayersSelect");
const playerSetupCards = Array.from(document.querySelectorAll(".player-setup"));

function getSelectedPlayerCount() {
  if (!numPlayersSelect) return 2;
  const n = parseInt(numPlayersSelect.value, 10);
  return Number.isNaN(n) ? 2 : Math.min(Math.max(n, 2), 4);
}

function updateVisiblePlayerCards() {
  const n = getSelectedPlayerCount();
  playerSetupCards.forEach((card, idx) => {
    card.style.display = idx < n ? "block" : "none";
  });
}

if (numPlayersSelect) {
  numPlayersSelect.addEventListener("change", () => {
    updateVisiblePlayerCards();
    validateSetup();
  });
}

updateVisiblePlayerCards();

// Name inputs
const playerNameInputs = [
  document.getElementById("player1NameInput"),
  document.getElementById("player2NameInput"),
  document.getElementById("player3NameInput"),
  document.getElementById("player4NameInput")
];

// Color selects, labels, dots
const colorSelects = [
  document.getElementById("player1ColorSelect"),
  document.getElementById("player2ColorSelect"),
  document.getElementById("player3ColorSelect"),
  document.getElementById("player4ColorSelect")
];

const colorLabels = [
  document.getElementById("player1ColorValue"),
  document.getElementById("player2ColorValue"),
  document.getElementById("player3ColorValue"),
  document.getElementById("player4ColorValue")
];

const colorDots = [
  document.getElementById("p1ColorDot"),
  document.getElementById("p2ColorDot"),
  document.getElementById("p3ColorDot"),
  document.getElementById("p4ColorDot")
];

// Home selects
const homeSelects = [
  document.getElementById("player1HomeSelect"),
  document.getElementById("player2HomeSelect"),
  document.getElementById("player3HomeSelect"),
  document.getElementById("player4HomeSelect")
];

// Legend name & money spans
const legendNameSpans = [
  document.getElementById("legendPlayer1Name"),
  document.getElementById("legendPlayer2Name"),
  document.getElementById("legendPlayer3Name"),
  document.getElementById("legendPlayer4Name")
];

const legendMoneySpans = [
  document.getElementById("legendPlayer1Money"),
  document.getElementById("legendPlayer2Money"),
  document.getElementById("legendPlayer3Money"),
  document.getElementById("legendPlayer4Money")
];

const legendNetWorthSpans = [
  document.getElementById("legendPlayer1NetWorth"),
  document.getElementById("legendPlayer2NetWorth"),
  document.getElementById("legendPlayer3NetWorth"),
  document.getElementById("legendPlayer4NetWorth")
];


// Bank supply display elements
const bankHousesRemainingEl = document.getElementById("bankHousesRemaining");
const bankHotelsRemainingEl = document.getElementById("bankHotelsRemaining");


// =====================
// POPULATE COLOR DROPDOWNS
// =====================

function populateColorDropdowns() {
  const colorNames = Object.keys(COLOR_MAP);
  const defaultColors = ["Orange", "Purple", "Blue", "Red"];

  colorSelects.forEach((select, i) => {
    if (!select) return;
    select.innerHTML = "";

    colorNames.forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      select.appendChild(opt);
    });

    const defName = defaultColors[i];
    if (defName) {
      select.value = defName;
      const hex = COLOR_MAP[defName];
      players[i].color = hex;
      if (colorLabels[i]) {
        colorLabels[i].textContent = defName;
        colorLabels[i].style.color = hex;
      }
      if (colorDots[i]) {
        colorDots[i].style.backgroundColor = hex;
      }
    }
  });
}

populateColorDropdowns();

// =====================
// POPULATE HOME DROPDOWNS
// =====================

const allowedHomeSpaces = [37, 39];

function populateHomeSelects() {
  homeSelects.forEach(select => {
    if (!select) return;
    select.innerHTML = "";

    allowedHomeSpaces.forEach(index => {
      const tile = board.find(t => t.index === index);
      if (!tile) return;
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = tile.name;
      select.appendChild(opt);
    });
  });
}

populateHomeSelects();

// =====================
// MONEY AND BANK UI UPDATE
// =====================

function calculateNetWorth(player) {
  if (!player) return 0;

  let total = player.money || 0;

  board.forEach(tile => {
    const ownable =
      tile.type === "property" || tile.type === "airport" || tile.type === "utility";

    if (!ownable) return;
    if (tile.owner !== player.id) return;

    // Property base value
    if (tile.mortgaged) {
      // Mortgaged: count mortgage value instead of full purchase price
      total += getMortgageValue(tile);
    } else {
      total += tile.price || 0;
    }

    // Improvements (use house cost for that tile)
    const hc = getHouseCost(tile.index) || 0;

    if (tile.houses && tile.houses > 0) {
      total += tile.houses * hc;
    }

    if (tile.hotel) {
      // Treat a hotel like one more improvement at house cost (consistent with your build cost)
      total += hc;
    }
  });

  return Math.max(0, Math.floor(total));
}

function updateMoneyUI() {
  players.forEach((p, idx) => {
    const mSpan = legendMoneySpans[idx];
    const nwSpan = legendNetWorthSpans[idx];

    if (p.active) {
      if (mSpan) {
        mSpan.textContent = `$${p.money}`;
        mSpan.style.opacity = "1";
      }

      if (nwSpan) {
        const nw = calculateNetWorth(p);
        nwSpan.textContent = `NW: $${nw}`;
        nwSpan.style.opacity = "0.9";
      }
    } else {
      if (mSpan) {
        mSpan.textContent = "-";
        mSpan.style.opacity = "0.4";
      }
      if (nwSpan) {
        nwSpan.textContent = "NW: -";
        nwSpan.style.opacity = "0.35";
      }
    }
  });
}

function updateBankSupplyUI() {
  if (bankHousesRemainingEl) {
    bankHousesRemainingEl.textContent = `${houseSupply}`;
  }
  if (bankHotelsRemainingEl) {
    bankHotelsRemainingEl.textContent = `${hotelSupply}`;
  }
}

// =====================
// VALIDATE SETUP
// =====================

function validateSetup() {
  if (!startGameBtn) return;

  const numPlayers = getSelectedPlayerCount();
  const colors = [];

  for (let idx = 0; idx < numPlayers; idx++) {
    const colorSelect = colorSelects[idx];
    if (!colorSelect) continue;

    const colorName = colorSelect.value;
    const hex = COLOR_MAP[colorName];
    if (hex) {
      colors.push(hex);
    }
  }

  let hint = "All set! Click Start Game to begin.";

  if (colors.length < numPlayers) {
    hint = "Choose a color for each selected player.";
  } else {
    const colorSet = new Set(colors);
    if (colorSet.size !== colors.length) {
      hint = "Each active player must have a different color.";
    }
  }

  // Always show the button
  startGameBtn.style.display = "block";

  if (setupHint) {
    setupHint.textContent = hint;
  }
}

// =====================
// COLOR CHANGE LISTENERS
// =====================

colorSelects.forEach((select, idx) => {
  if (!select) return;
  select.addEventListener("change", (e) => {
    const cName = e.target.value;
    const hex = COLOR_MAP[cName];
    players[idx].color = hex;

    if (colorLabels[idx]) {
      colorLabels[idx].textContent = cName;
      colorLabels[idx].style.color = hex;
    }
    if (colorDots[idx]) {
      colorDots[idx].style.backgroundColor = hex;
    }

    renderBoard();
    validateSetup();
  });
});

// =====================
// NAME INPUT LISTENERS
// =====================

playerNameInputs.forEach((input) => {
  if (!input) return;
  input.addEventListener("input", () => {
    validateSetup();
  });
});

// =====================
// START GAME BUTTON
// =====================

if (startGameBtn && setupScreen) {
  if (startGameBtn) {
  startGameBtn.addEventListener("click", () => {
      // Fresh game / rules each time Start Game is pressed
      resetAuctionState();
  
      // Read rule toggles / inputs
      const auctionToggle    = document.getElementById("toggleAuctionMode");
      const unlimitedToggle  = document.getElementById("toggleUnlimitedHouses");
      const freeParkingTgl   = document.getElementById("toggleFreeParkingJackpot");
      const evenBuildTgl     = document.getElementById("toggleEvenBuild");
      const startMoneyInput  = document.getElementById("startMoneyInput");
  
      rules.auctionMode        = auctionToggle   ? auctionToggle.checked   : false;
      rules.unlimitedHouses    = unlimitedToggle ? unlimitedToggle.checked : false;
      rules.freeParkingJackpot = freeParkingTgl  ? freeParkingTgl.checked  : false;
      rules.evenHouseBuild     = evenBuildTgl    ? evenBuildTgl.checked    : true;
  
      let startingMoney = 1500;
      if (startMoneyInput) {
        const parsed = parseInt(startMoneyInput.value, 10);
        if (!Number.isNaN(parsed) && parsed > 0) {
          startingMoney = parsed;
        }
      }
      rules.startingMoney = startingMoney;
  
      // Reset Free Parking pot for new game
      freeParkingPot = 0;
  
      turnOrder = [];
  
      // Reset all players
      players.forEach(p => {
        p.active = false;
        p.properties = [];
      });
  
      const numPlayers = getSelectedPlayerCount();
  
      // Configure first N players
      for (let idx = 0; idx < numPlayers; idx++) {
        const p = players[idx];
  
        const nameInput   = playerNameInputs[idx];
        const colorSelect = colorSelects[idx];
        const homeSelect  = homeSelects[idx];
  
        const fallbackName = `Player ${idx + 1}`;
        const name = nameInput && nameInput.value.trim()
          ? nameInput.value.trim()
          : fallbackName;
  
        const colorName = colorSelect ? colorSelect.value : Object.keys(COLOR_MAP)[idx];
        const hex = COLOR_MAP[colorName];
  
        const homeIndex = homeSelect
          ? parseInt(homeSelect.value, 10)
          : allowedHomeSpaces[idx % allowedHomeSpaces.length];
  
        p.name = name;
        p.color = hex;
        p.home = homeIndex;
        p.position = 0;
        p.inJail = false;
        p.jailTurns = 0;
        p.getOutOfJailCards = 0;
        p.money = rules.startingMoney;
        p.properties = [];
        p.active = true;
  
        turnOrder.push(idx);
      }
  
      if (turnOrder.length < 2) {
        showInfoModal("You must have at least two players.");
        return;
      }
  
      // Enforce unique colors among active players
      const seenColors = new Set();
      for (const idx of turnOrder) {
        const p = players[idx];
        if (seenColors.has(p.color)) {
          showInfoModal("Active players must all have different colors.");
          return;
        }
        seenColors.add(p.color);
      }
  
      // Update legend names
      legendNameSpans.forEach((span, idx) => {
        if (!span) return;
        const p = players[idx];
        if (p.active) {
          span.textContent = p.name;
          span.style.opacity = "1";
        } else {
          span.textContent = `Player ${idx + 1}`;
          span.style.opacity = "0.4";
        }
      });
  
      updateMoneyUI();
  
      currentTurnPointer = 0;
      if (setupScreen) setupScreen.style.display = "none";
  
      // Reset event log for new game
      eventLogEntries.length = 0;
      renderEventLog();
  
      const firstPlayer = players[turnOrder[0]];
      if (currentTurnDisplay) {
        currentTurnDisplay.textContent = `Current Turn: ${firstPlayer.name}`;
      }
  
      showInfoModal(`🎲 Game Started! ${firstPlayer.name} goes first.`);
  
      logEvent(
        `New game started with ${turnOrder.length} player(s). ` +
        `Auction Mode: ${rules.auctionMode ? "ON" : "OFF"}, ` +
        `Unlimited Houses: ${rules.unlimitedHouses ? "ON" : "OFF"}, ` +
        `Free Parking Jackpot: ${rules.freeParkingJackpot ? "ON" : "OFF"}, ` +
        `Even Build: ${rules.evenHouseBuild ? "ON" : "OFF"}, ` +
        `Start Money: $${rules.startingMoney}.`
      );
      logEvent(`${firstPlayer.name} goes first.`);
  
      renderBoard();
      renderPropertyInfo(null);
      updateHoldingsPanel();
      setupTradePanel();
    });
  }
}

// =====================
// HELPERS (BOARD / GROUPS / HOUSES / MORTGAGE)
// =====================

function getTilePosition(index) {
  return TILE_POSITIONS[index] || { top: 0, left: 0 };
}

function getBoardTile(index) {
  return board.find(t => t.index === index);
}

function getHouseCost(index) {
  if (index >= 1 && index <= 10) return 50;
  if (index >= 11 && index <= 20) return 100;
  if (index >= 21 && index <= 30) return 150;
  if (index >= 31 && index <= 39) return 200;
  return 0;
}

function getMortgageValue(tile) {
  return tile.price ? Math.floor(tile.price / 2) : 0;
}

// Returns all properties in a group
function getGroupTiles(groupName) {
  return board.filter(
    t => t.type === "property" && t.group === groupName
  );
}

// Does this player own the full color group?
function ownsFullGroup(player, groupName) {
  const groupTiles = getGroupTiles(groupName);
  if (!groupTiles.length) return false;
  return groupTiles.every(t => t.owner === player.id);
}

// HOUSE/HOTEL BUY & SELL

function canBuyHouse(player, tile) {
  if (tile.type !== "property") return false;
  if (tile.owner !== player.id) return false;
  if (!tile.group) return false;
  if (tile.hotel) return false;
  if (tile.houses >= 4) return false;
  if (tile.mortgaged) return false;

  if (!ownsFullGroup(player, tile.group)) return false;

  // Even-build rule (Monopoly-style) can be toggled via rules.evenHouseBuild
  if (rules.evenHouseBuild) {
    const groupTiles = getGroupTiles(tile.group);
    const housesArr = groupTiles.map(t => t.houses || 0);
    const minH = Math.min(...housesArr);
    if (tile.houses > minH) return false;
  }

  const cost = getHouseCost(tile.index);
  if (player.money < cost) return false;

  return true;
}


function canBuyHotel(player, tile) {
  if (tile.type !== "property") return false;
  if (tile.owner !== player.id) return false;
  if (!tile.group) return false;
  if (tile.hotel) return false;
  if (!ownsFullGroup(player, tile.group)) return false;

  // Must have exactly 4 houses before upgrading to a hotel
  if (tile.houses !== 4) return false;
  if (tile.mortgaged) return false;

  // Check bank supply (unless unlimited houses is ON)
  if (!rules.unlimitedHouses && hotelSupply <= 0) return false;

  const cost = getHouseCost(tile.index);
  if (player.money < cost) return false;

  return true;
}

function buyHouse(player, tile) {
  if (!canBuyHouse(player, tile)) return false;

  const cost = getHouseCost(tile.index);
  player.money -= cost;

  tile.houses = (tile.houses || 0) + 1;

  // Consume 1 house from the bank if we're using finite supply
  if (!rules.unlimitedHouses) {
    houseSupply = Math.max(0, houseSupply - 1);
  }
  updateBankSupplyUI();
  updateMoneyUI();

  showInfoModal(`${player.name} bought a house on ${tile.name} for $${cost}. (Houses: ${tile.houses})`);
  logEvent(`${player.name} bought a house on ${tile.name} for $${cost}. (Houses: ${tile.houses})`);

  return true;
}

function buyHotel(player, tile) {
  if (!canBuyHotel(player, tile)) return false;

  const cost = getHouseCost(tile.index);
  const previousHouses = tile.houses || 0;  // should be 4 in normal rules

  player.money -= cost;

  // Adjust global supply if finite
  if (!rules.unlimitedHouses) {
    // When you build a hotel in classic Monopoly, the 4 houses
    // on that property go back to the bank
    houseSupply = Math.min(MAX_HOUSES, houseSupply + previousHouses);
    if (hotelSupply > 0) {
      hotelSupply -= 1;
    }
  }

  updateBankSupplyUI();

  tile.hotel = true;
  tile.houses = 0;

  updateMoneyUI();
  showInfoModal(`${player.name} bought a HOTEL on ${tile.name} for $${cost}.`);
  logEvent(`${player.name} bought a HOTEL on ${tile.name} for $${cost}.`);

  return true;
}


function canSellHouse(player, tile) {
  if (tile.type !== "property") return false;
  if (tile.owner !== player.id) return false;
  if (!tile.houses || tile.houses <= 0) return false;
  return true;
}

function sellHouse(player, tile) {
  if (!canSellHouse(player, tile)) return false;

  const cost = getHouseCost(tile.index);
  const refund = Math.floor(cost / 2);

  tile.houses -= 1;

  // Return 1 house to the bank (for finite supply)
  if (!rules.unlimitedHouses) {
    houseSupply = Math.min(MAX_HOUSES, houseSupply + 1);
  }

  updateBankSupplyUI();
  player.money += refund;
  updateMoneyUI();

  showInfoModal(`${player.name} sold a house on ${tile.name} for $${refund}. (Houses: ${tile.houses})`);
  logEvent(`${player.name} sold a house on ${tile.name} for $${refund}. (Houses: ${tile.houses})`);

  return true;
}

function canSellHotel(player, tile) {
  if (tile.type !== "property") return false;
  if (tile.owner !== player.id) return false;
  if (!tile.hotel) return false;
  return true;
}

function sellHotel(player, tile) {
  if (!canSellHotel(player, tile)) return false;

  const cost = getHouseCost(tile.index);
  const refund = Math.floor(cost / 2);

  // Hotel is removed; this implementation does NOT replace it with houses
  tile.hotel = false;
  tile.houses = 0;

  // Return 1 hotel to the bank (for finite supply)
  if (!rules.unlimitedHouses) {
    hotelSupply = Math.min(MAX_HOTELS, hotelSupply + 1);
  }

  updateBankSupplyUI();
  player.money += refund;
  updateMoneyUI();

  showInfoModal(`${player.name} sold the hotel on ${tile.name} for $${refund}.`);
  logEvent(`${player.name} sold the hotel on ${tile.name} for $${refund}.`);

  return true;
}


// MORTGAGE / UNMORTGAGE

function canMortgage(player, tile) {
  if (!tile) return false;
  if (!(tile.type === "property" || tile.type === "airport" || tile.type === "utility")) return false;
  if (tile.owner !== player.id) return false;
  if (tile.mortgaged) return false;
  if (tile.type === "property" && (tile.houses > 0 || tile.hotel)) return false;
  return true;
}

function canUnmortgage(player, tile) {
  if (!tile) return false;
  if (!(tile.type === "property" || tile.type === "airport" || tile.type === "utility")) return false;
  if (tile.owner !== player.id) return false;
  if (!tile.mortgaged) return false;
  const mortgage = getMortgageValue(tile);
  const cost = mortgage + Math.ceil(mortgage * 0.1);
  return player.money >= cost;
}

function mortgageProperty(player, tile) {
  if (!canMortgage(player, tile)) return false;
  const mortgage = getMortgageValue(tile);
  player.money += mortgage;
  tile.mortgaged = true;
  updateMoneyUI();

  showInfoModal(`${player.name} mortgaged ${tile.name} for $${mortgage}.`);
  logEvent(`${player.name} mortgaged ${tile.name} for $${mortgage}.`);

  return true;
}

function unmortgageProperty(player, tile) {
  if (!tile.mortgaged) return false;
  const mortgage = getMortgageValue(tile);
  const fee = Math.ceil(mortgage * 0.1);
  const cost = mortgage + fee;
  if (player.money < cost) {
    showInfoModal(`${player.name} does not have enough money to unmortgage ${tile.name}. Need $${cost}.`);
    return false;
  }
  player.money -= cost;
  tile.mortgaged = false;
  updateMoneyUI();

  showInfoModal(`${player.name} unmortgaged ${tile.name} for $${cost} (includes $${fee} interest).`);
  logEvent(`${player.name} unmortgaged ${tile.name} for $${cost} (includes $${fee} interest).`);

  return true;
}

// =====================
// RENT CALCULATION
// =====================

function calculateRent(tile, owner) {
  // Mortgaged properties do NOT collect rent
  if ((tile.type === "property" || tile.type === "airport" || tile.type === "utility") && tile.mortgaged) {
    return 0;
  }

  if (tile.type === "airport") {
    const airportsOwned = board.filter(
      t => t.type === "airport" && t.owner === owner.id
    ).length;
    return tile.baseRent * Math.max(1, airportsOwned);
  }

  if (tile.type === "utility") {
    const utilitiesOwned = board.filter(
      t => t.type === "utility" && t.owner === owner.id
    ).length;
    if (!utilitiesOwned || lastRollTotal <= 0) return 0;
    const multiplier = utilitiesOwned >= 2 ? 10 : 4;
    return lastRollTotal * multiplier;
  }

  if (tile.type === "property") {
    const houses = tile.houses || 0;
    const hasHotel = tile.hotel;

    if (tile.rents) {
      if (hasHotel && tile.rents.hotel != null) {
        return tile.rents.hotel;
      }
      if (!hasHotel && tile.rents[houses] != null) {
        return tile.rents[houses];
      }
    }

    // Fallback: base rent (no group doubling, no formulas)
    return tile.baseRent || 0;
  }

  return 0;
}

// =====================
// LANDING EFFECTS
// =====================

function handleLanding(player, passedGo) {
  const tile = getBoardTile(player.position);
  if (!tile) return;

  // Base event: landed on a space
  logEvent(`${player.name} landed on ${tile.name}.`);

  switch (tile.type) {
    case "go":
      if (!passedGo) {
        player.money += 200;
        showInfoModal(`${player.name} landed on GO → +$200!`);
        updateMoneyUI();
        logEvent(`${player.name} landed directly on GO and collected $200.`);
      }
      break;

        case "tax":
      if (tile.amount) {
        // Pay tax to bank or Free Parking pot depending on rules
        payToBank(player, tile.amount, tile.name);
        showInfoModal(`${player.name} pays $${tile.amount} for ${tile.name}.`);
      }
      break;

    case "property":
    case "airport":
    case "utility":
      handlePropertyAirportUtility(player, tile);
      break;

    case "chance":
      drawChanceCard(player);
      break;

    case "community-chest":
      drawCommunityChestCard(player);
      break;

    case "free-parking":
      if (rules.freeParkingJackpot && freeParkingPot > 0) {
        const pot = freeParkingPot;
        freeParkingPot = 0;
        player.money += pot;
        updateMoneyUI();
        showInfoModal(`${player.name} landed on ${tile.name} and collected the Free Parking pot of $${pot}!`);
        logEvent(`${player.name} collected $${pot} from the Free Parking pot.`);
      } else {
        showInfoModal(`${player.name} is relaxing at ${tile.name}.`);
        logEvent(`${player.name} is relaxing at ${tile.name}.`);
      }
      break;


    case "jail":
      if (player.inJail) {
        showInfoModal(`${player.name} is in Long Distance (jail).`);
        logEvent(`${player.name} is in Long Distance (jail).`);
      } else {
        showInfoModal(`${player.name} is just visiting Long Distance.`);
        logEvent(`${player.name} is just visiting Long Distance.`);
      }
      break;

    case "go-to-jail":
      // handled in movement
      break;

    default:
      break;
  }

  updateHoldingsPanel(); // after anything that might change money/ownership
}


// =====================
// ACTION MODAL (center overlay for cards & actions)
// =====================

const actionOverlayEl    = document.getElementById("actionOverlay");
const actionTitleEl      = document.getElementById("actionTitle");
const actionBodyEl       = document.getElementById("actionBody");
const actionPrimaryBtn   = document.getElementById("actionPrimaryBtn");
const actionSecondaryBtn = document.getElementById("actionSecondaryBtn");

function hideActionModal() {
  if (!actionOverlayEl) return;
  actionOverlayEl.style.display = "none";
}

/**
 * showActionModal({
 *   title: "Chance",
 *   body: "Advance to GO. Collect $200.",
 *   primaryLabel: "OK",
 *   onPrimary: () => { ... },
 *   secondaryLabel: "Cancel",
 *   onSecondary: () => { ... }
 * })
 */
function showActionModal(options) {
  if (
    !actionOverlayEl ||
    !actionTitleEl ||
    !actionBodyEl ||
    !actionPrimaryBtn ||
    !actionSecondaryBtn
  ) {
    // Fallback: if for some reason the DOM isn't wired, use alert
    const fallbackTitle = options?.title || "Action";
    const fallbackBody  = options?.body || "";
    showInfoModal(`${fallbackTitle}\n\n${fallbackBody}`);
    if (typeof options?.onPrimary === "function") {
      options.onPrimary();
    }
    return;
  }

  const {
    title = "Action",
    body = "",
    primaryLabel = "OK",
    onPrimary = null,
    secondaryLabel = null,
    onSecondary = null
  } = options || {};

  actionTitleEl.textContent = title;
  actionBodyEl.textContent  = body;

  // Primary button
  actionPrimaryBtn.textContent = primaryLabel;
  actionPrimaryBtn.onclick = () => {
    hideActionModal();
    if (typeof onPrimary === "function") {
      onPrimary();
    }
  };

  // Secondary button (optional)
  if (secondaryLabel) {
    actionSecondaryBtn.textContent = secondaryLabel;
    actionSecondaryBtn.style.display = "inline-block";
    actionSecondaryBtn.onclick = () => {
      hideActionModal();
      if (typeof onSecondary === "function") {
        onSecondary();
      }
    };
  } else {
    actionSecondaryBtn.style.display = "none";
    actionSecondaryBtn.onclick = null;
  }

  actionOverlayEl.style.display = "flex";
}

function showInfoModal(message, title = "Bivopoly") {
  showActionModal({
    title,
    body: message,
    primaryLabel: "OK"
  });
}

// =====================
// DEBT RESOLUTION MODE
// =====================

const debtOverlayEl    = document.getElementById("debtOverlay");
const debtBodyEl       = document.getElementById("debtBody");
const debtTradeBtn     = document.getElementById("debtTradeBtn");
const debtHoldingsBtn  = document.getElementById("debtHoldingsBtn");
const debtPayNowBtn    = document.getElementById("debtPayNowBtn");
const debtBankruptBtn  = document.getElementById("debtBankruptBtn");

let debtState = {
  active: false,
  fromId: null,
  toId: null,          // null means "bank"
  amount: 0,
  reason: "",
  // optional hook to run after payment succeeds
  onResolved: null
};

function openDebtOverlay(message) {
  if (!debtOverlayEl || !debtBodyEl) return;
  debtBodyEl.textContent = message;
  debtOverlayEl.style.display = "flex";
}

function closeDebtOverlay() {
  if (!debtOverlayEl) return;
  debtOverlayEl.style.display = "none";
}

function isDebtActive() {
  return !!debtState.active;
}

function requirePayment(fromPlayer, amount, toPlayerOrNull, reason = "", onResolved = null) {
  if (!fromPlayer || amount <= 0) return true;

  // If they can pay immediately, do it
  if (fromPlayer.money >= amount) {
    fromPlayer.money -= amount;

    if (toPlayerOrNull && toPlayerOrNull.active) {
      toPlayerOrNull.money += amount;
    } else {
      // Paying the bank; optionally add to Free Parking pot if rule enabled
      if (rules.freeParkingJackpot) {
        freeParkingPot += amount;
        const detail = reason ? ` (${reason})` : "";
        logEvent(`${fromPlayer.name} paid $${amount}${detail}. Added to Free Parking pot (now $${freeParkingPot}).`);
      }
    }

    updateMoneyUI();
    updateHoldingsPanel();
    if (typeof onResolved === "function") onResolved();
    return true;
  }

  // Otherwise enter debt mode
  debtState.active = true;
  debtState.fromId = fromPlayer.id;
  debtState.toId = toPlayerOrNull ? toPlayerOrNull.id : null;
  debtState.amount = amount;
  debtState.reason = reason || "";
  debtState.onResolved = onResolved;

  const toName = toPlayerOrNull ? toPlayerOrNull.name : "the Bank";
  const message =
    `${fromPlayer.name}, you owe $${amount} to ${toName}.\n` +
    `Reason: ${reason || "Payment due"}\n\n` +
    `Current cash: $${fromPlayer.money}\n` +
    `You must raise $${Math.max(0, amount - fromPlayer.money)} more.\n\n` +
    `Use Trade / mortgage / sell houses, then click “Pay Now”.`;

  openDebtOverlay(message);
  return false;
}

// Button wiring
if (debtTradeBtn) {
  debtTradeBtn.addEventListener("click", () => {
    if (typeof openTradePanel === "function") openTradePanel();
  });
}

if (debtHoldingsBtn) {
  debtHoldingsBtn.addEventListener("click", () => {
    if (typeof openHoldingsOverlay === "function") openHoldingsOverlay();
  });
}

if (debtPayNowBtn) {
  debtPayNowBtn.addEventListener("click", () => {
    if (!debtState.active) return;

    const from = players.find(p => p.id === debtState.fromId);
    const to = debtState.toId == null ? null : players.find(p => p.id === debtState.toId);

    if (!from || !from.active) {
      closeDebtOverlay();
      debtState.active = false;
      return;
    }

    // Try again (this time it will pay if funds are sufficient)
    const paid = requirePayment(from, debtState.amount, to, debtState.reason, debtState.onResolved);
    if (paid) {
      debtState.active = false;
      debtState.fromId = null;
      debtState.toId = null;
      debtState.amount = 0;
      debtState.reason = "";
      const cb = debtState.onResolved;
      debtState.onResolved = null;

      closeDebtOverlay();
      if (typeof cb === "function") cb();
    } else {
      // Still not enough; update message with latest cash
      const toName = to ? to.name : "the Bank";
      const message =
        `${from.name}, you still owe $${debtState.amount} to ${toName}.\n` +
        `Reason: ${debtState.reason || "Payment due"}\n\n` +
        `Current cash: $${from.money}\n` +
        `You must raise $${Math.max(0, debtState.amount - from.money)} more.\n\n` +
        `Mortgage / sell houses / trade, then click “Pay Now”.`;

      openDebtOverlay(message);
    }
  });
}

if (debtBankruptBtn) {
  debtBankruptBtn.addEventListener("click", () => {
    if (!debtState.active) return;

    const from = players.find(p => p.id === debtState.fromId);
    const creditor = debtState.toId == null ? null : players.find(p => p.id === debtState.toId);

    // Clear debt state + close overlay first (avoid weird UI overlap)
    closeDebtOverlay();
    debtState.active = false;

    if (from && from.active) {
      handlePlayerBankruptcy(from, creditor || null);
    }
  });
}


// =====================
// CARD DRAW HELPERS
// =====================

// Draw a card (both decks recycle by pushing used card to bottom)
function drawChanceCard(player) {
  const card = chanceDeck.shift();
  chanceDeck.push(card);

  showCardModal("Chance", card.text);
  logEvent(`${player.name} drew Chance: "${card.text}"`);
  applyCardEffect(player, card);
}

function drawCommunityChestCard(player) {
  const card = communityDeck.shift();
  communityDeck.push(card);

  showCardModal("Community Chest", card.text);
  logEvent(`${player.name} drew Community Chest: "${card.text}"`);
  applyCardEffect(player, card);
}

// Display the card popup using the action modal
function showCardModal(type, text) {
  showActionModal({
    title: type,
    body: text,
    primaryLabel: "OK"
    // For now, no secondary button needed for cards
  });
}

// Apply the effects
function applyCardEffect(player, card) {

  const pos = player.position;

  switch (card.id) {

    case "home":
        movePlayerTo(player, player.home, true);
        break;

    case "nearestAirport":
      movePlayerToNearest(player, "airport");
      break;

    case "nearestUtility":
      movePlayerToNearest(player, "utility");
      break;

    case "go":
      movePlayerTo(player, 0, false);
      player.money += 200;
      updateMoneyUI();
      break;

    case "duc": // DUC = tile index 21
      movePlayerTo(player, 21, true);
      break;

    case "stadium": // stadium = tile 14
      movePlayerTo(player, 14, true);
      break;

    case "plus50":
      player.money += 50;
      break;

    case "plus100":
    case "plus100b":
    case "plus100c":
      player.money += 100;
      break;

    case "plus150":
      player.money += 150;
      break;

    case "plus200":
      player.money += 200;
      break;

    case "plus25":
      player.money += 25;
      break;

    case "plus10":
      player.money += 10;
      break;

    case "plus70":
      player.money += 70;
      break;

    case "minus15":
      payToBank(player, 15, "Card penalty");
      break;

    case "minus50":
    case "minus50b":
      payToBank(player, 50, "Card penalty");
      break;

    case "minus100":
      payToBank(player, 100, "Card penalty");
      break;

    case "birthday":
    for (let p of players) {
      if (p.active && p !== player) {
        p.money -= 10;
        player.money += 10;
      }
    }
    break;

    case "payPlayers50":
    for (let p of players) {
      if (p.active && p !== player) {
        player.money -= 50;
        p.money += 50;
      }
    }
    break;

    case "repairs25":
    case "repairs40":
      handleRepairs(player, card.id);
      break;

    case "back3":
      movePlayerTo(player, (pos + board.length - 3) % board.length, false);
      break;

    case "goEWR":
      movePlayerTo(player, 5, true);
      break;

    case "jail":
      player.position = 10;
      player.inJail = true;
      break;

    case "jailFree":
      player.getOutOfJailCards = (player.getOutOfJailCards || 0) + 1;
      break;
  }

  renderBoard();
  updateHoldingsPanel();
  updateMoneyUI();
}

function movePlayerTo(player, tileIndex, payPassGo) {
  const old = player.position;

  if (payPassGo && tileIndex < old) {
    player.money += 200;
    updateMoneyUI();
  }

  player.position = tileIndex;
  renderBoard();
  updateHoldingsPanel();
  handleLanding(player);
}

function movePlayerToNearest(player, type) {
  const start = player.position;
  let dist = 1;

  while (true) {
    const idx = (start + dist) % board.length;
    if (board[idx].type === type) {
      movePlayerTo(player, idx, true);
      break;
    }
    dist++;
  }
}

function handleRepairs(player, type) {
  let total = 0;

  for (const tile of board) {
    if (tile.owner === player.index) {
      if (tile.houses > 0) {
        total += tile.houses * (type === "repairs25" ? 25 : 40);
      }
      if (tile.hotel) {
        total += (type === "repairs25" ? 100 : 115);
      }
    }
  }

  showInfoModal(`Repairs cost: $${total}`);
  payToBank(player, total, "Repairs");
}

// Property / airport / utility handler
function handlePropertyAirportUtility(player, tile) {
  // 1) Unowned: offer to buy, optionally start auction
  if (tile.owner == null) {
    if (player.money >= tile.price) {
      const type = tile.type;
      const baseLine =
        type === "airport"
          ? "Airport: rent increases with number of airports owned."
          : type === "utility"
          ? "Utility: rent depends on dice roll and number of utilities owned."
          : `Base Rent: $${tile.baseRent || 0}`;

      showActionModal({
        title: tile.name,
        body:
          `${player.name} landed on ${tile.name}.\n` +
          `Price: $${tile.price}\n` +
          `${baseLine}\n\n` +
          `Do you want to buy it?`,
        primaryLabel: "Buy",
        onPrimary: () => {
          // Complete purchase
          player.money -= tile.price;
          tile.owner = player.id;

          if (tile.type === "property" || tile.type === "airport" || tile.type === "utility") {
            if (!player.properties.includes(tile.index)) {
              player.properties.push(tile.index);
            }
          }

          updateMoneyUI();
          renderBoard();
          if (selectedTileIndex === tile.index) {
            renderPropertyInfo(tile);
          }
          updateHoldingsPanel();

          logEvent(`${player.name} bought ${tile.name} for $${tile.price}.`);
        },
        secondaryLabel: rules.auctionMode ? "Skip (Auction)" : "Skip",
        onSecondary: () => {
          if (rules.auctionMode) {
            logEvent(`Auction started for ${tile.name} (purchase skipped).`);
            startAuction(tile);
          } else {
            logEvent(`${player.name} chose not to buy ${tile.name}.`);
          }
        }
      });
    } else {
      // Cannot afford → optionally auto-auction
      showInfoModal(
        `${player.name} does not have enough money to buy ${tile.name} (cost: $${tile.price}).`,
        tile.name
      );
      logEvent(
        `${player.name} could not afford ${tile.name} (cost: $${tile.price}).`
      );

      if (rules.auctionMode) {
        logEvent(`Auction automatically started for ${tile.name} (unaffordable).`);
        startAuction(tile);
      }
    }
    return;
  }

  // 2) Owned by someone
  const owner = players.find((p) => p.id === tile.owner && p.active);
  if (!owner) return;

  // Mortgaged → no rent
  if (tile.mortgaged) {
    showInfoModal(
      `${player.name} landed on ${tile.name}, owned by ${owner.name}, but it is mortgaged.\nNo rent is due.`,
      tile.name
    );
    logEvent(
      `${player.name} landed on ${tile.name} (owned by ${owner.name}), but it is mortgaged. No rent.`
    );
    return;
  }

  // 2a) Pay rent to another player
  if (owner.id !== player.id) {
    const rent = calculateRent(tile, owner);

    const paid = requirePayment(
      player,
      rent,
      owner,
      `Rent for ${tile.name}`,
      () => {
        // onResolved callback (runs when payment succeeds)
        showInfoModal(
          `${player.name} landed on ${tile.name}, owned by ${owner.name}.\nRent paid: $${rent}.`,
          tile.name
        );
        logEvent(`${player.name} paid $${rent} in rent to ${owner.name} for landing on ${tile.name}.`);
        updateMoneyUI();
        updateHoldingsPanel();
      }
    );

    // If it paid immediately, still log/show (callback does it)
    if (paid) {
      // callback already handled UI/log
    } else {
      logEvent(`${player.name} cannot afford $${rent} rent to ${owner.name} for ${tile.name}. Debt resolution opened.`);
    }

    return;
  }

  // 2b) Landed on your own property
  showInfoModal(
    `${player.name} landed on their own property: ${tile.name}.`,
    tile.name
  );
  logEvent(
    `${player.name} landed on their own property ${tile.name}.`
  );
}


// =====================
// TOKEN & INDICATOR POSITIONING (SIDE-DEPENDENT)
// =====================

function getBoardSide(tileIndex) {
  if (CORNER_TILES.includes(tileIndex)) return "corner";

  if (tileIndex >= 1 && tileIndex <= 9) return "bottom";       // GO → Jail
  if (tileIndex >= 11 && tileIndex <= 19) return "left";       // Jail → Free Parking
  if (tileIndex >= 21 && tileIndex <= 29) return "top";        // Free Parking → GO To Jail
  if (tileIndex >= 31 && tileIndex <= 39) return "right";      // Go To Jail → GO

  return "unknown";
}

function getPixelTokenSlot(tileIndex, playerIndexOnTile) {
  const side = getBoardSide(tileIndex);

  const isCorner = CORNER_TILES.includes(tileIndex);
  const tileW = isCorner ? CORNER_SIZE : TILE_WIDTH;
  const tileH = isCorner ? CORNER_SIZE : TILE_HEIGHT;

  const centerX = tileW / 2;
  const centerY = tileH / 2;

  const offset = TOKEN_SIZE;

  // ==========================================
  // PLAYER SUB-POSITIONS (0,1,2,3)
  // These are SMALL offset patterns you can tweak per side.
  // ==========================================

  // ----- BOTTOM (normal X spread, normal Y spread) -----
  const bottomSlots = [
    { dx: centerX - offset + 10, dy: centerY - offset + 10},
    { dx: centerX + offset - 10, dy: centerY - offset + 10},
    { dx: centerX - offset + 10, dy: centerY + offset - 10},
    { dx: centerX + offset - 10, dy: centerY + offset - 10},
  ];

  // ----- TOP (same as bottom unless you want changes) -----
  const topSlots = [
    { dx: centerX + offset - 10, dy: centerY + offset - 10},
    { dx: centerX - offset + 10, dy: centerY + offset - 10},
    { dx: centerX + offset - 10, dy: centerY - offset + 10},
    { dx: centerX - offset + 10, dy: centerY - offset + 10},
  ];

  // ----- LEFT SIDE (FLIPPED: tokens arranged vertically) -----
  // X stays near right edge, Y spacing is dominant
  const leftSlots = [
    { dx: centerY + offset - 10, dy: centerX - offset + 10}, // top-right
    { dx: centerY + offset - 10, dy: centerX + offset - 10}, // bottom-right
    { dx: centerY - offset + 10, dy: centerX - offset + 10}, // top-left
    { dx: centerY - offset + 10, dy: centerX + offset - 10}, // bottom-left
  ];

  // ----- RIGHT SIDE (FLIPPED: tokens arranged vertically) -----
  const rightSlots = [
    { dx: centerY - offset + 10, dy: centerX + offset - 10}, // top-right
    { dx: centerY - offset + 10, dy: centerX - offset + 10}, // bottom-right
    { dx: centerY + offset - 10, dy: centerX + offset - 10}, // top-left
    { dx: centerY + offset - 10, dy: centerX - offset + 10}, // bottom-left
  ];

  // ----- CORNERS (keep your old layout) -----
  const cornerSlots = [
    { dx: centerX - offset, dy: centerY - offset },
    { dx: centerX + offset, dy: centerY - offset },
    { dx: centerX - offset, dy: centerY + offset },
    { dx: centerX + offset, dy: centerY + offset },
  ];


  // ==========================================
  // SELECT THE PROPER SET BASED ON SIDE
  // ==========================================
  let slots;

  if (side === "bottom") slots = bottomSlots;
  else if (side === "top") slots = topSlots;
  else if (side === "left") slots = leftSlots;
  else if (side === "right") slots = rightSlots;
  else slots = cornerSlots;

  // Safety fallback
  const slot = slots[playerIndexOnTile] || slots[0];

  return {
    dx: slot.dx,
    dy: slot.dy
  };
}

// =====================
// PROPERTY INFO PANEL
// =====================

function renderPropertyInfo(tile) {
  if (!propertyDetailsEl) return;

  // Helper to reset buttons
  function resetButtons() {
    if (propertyActionBtn1) {
      propertyActionBtn1.style.display = "none";
      propertyActionBtn1.onclick = null;
    }
    if (propertyActionBtn2) {
      propertyActionBtn2.style.display = "none";
      propertyActionBtn2.onclick = null;
    }
  }

  // No tile / default state
  if (!tile) {
    propertyDetailsEl.innerHTML = `
      <p>Select a property on the board to view its details.</p>
    `;
    resetButtons();
    return;
  }

  const isOwnable =
    tile.type === "property" ||
    tile.type === "airport" ||
    tile.type === "utility";

    const owner = tile.owner != null ? players.find(p => p.id === tile.owner) : null;
  const ownerName = owner ? owner.name : "Unowned";
  const mortgageVal = tile.price ? getMortgageValue(tile) : 0;

  // Neutral / non-ownable tile
  if (!isOwnable) {
    // Special-case: Free Parking (No Wake Zone) – show extra info if jackpot rule exists
    if (tile.type === "free-parking") {
      // Safely check for rules/freeParkingPot if Feature 8 is present; otherwise fall back
      const jackpotOn =
        typeof rules !== "undefined" &&
        rules &&
        !!rules.freeParkingJackpot;

      const pot =
        typeof freeParkingPot !== "undefined" &&
        Number.isFinite(freeParkingPot)
          ? freeParkingPot
          : 0;

      propertyDetailsEl.innerHTML = `
        <h3>${tile.name}</h3>
        <p><strong>Type:</strong> Free Parking</p>
        ${
          jackpotOn
            ? `
              <p><strong>Jackpot rule:</strong> ON</p>
              <p><strong>Current jackpot:</strong> $${pot}</p>
              <p>Landing here collects the accumulated pot from taxes and certain card / fee payments.</p>
            `
            : `
              <p><strong>Jackpot rule:</strong> OFF</p>
              <p>This is a safe resting space. No rent or payments when you land here.</p>
            `
        }
      `;
    } else {
      // All other neutral tiles (Go, Long Distance, Chance, etc.)
      propertyDetailsEl.innerHTML = `
        <h3>${tile.name}</h3>
        <p>This tile is not ownable.</p>
      `;
    }

    resetButtons();
    return;
  }


  // Build rent section (CLEAN TABLE STYLE)
  let rentSection = "";

  if (tile.type === "property") {
    const r = tile.rents || {};
    const base = r[0] ?? tile.baseRent ?? 0;
    const hasOwner = owner != null;
    const fullSet = hasOwner && ownsFullGroup(owner, tile.group);

    // Determine the “active” row to highlight
    let activeKey = "base";
    if (tile.hotel) activeKey = "hotel";
    else if (tile.houses > 0) activeKey = `h${tile.houses}`;
    else if (fullSet) activeKey = "set";

    const row = (label, value, key) =>
      `<tr class="${activeKey === key ? "is-current" : ""}">
          <td>${label}</td><td>$${value}</td>
      </tr>`;

    rentSection = `
      <h4>Rent Table</h4>
      <table class="rent-table">
        <tbody>
          ${row("Rent", base, "base")}
          ${
            tile.group
              ? row("Rent w/ Color Set", base * 2, "set")
              : ""
          }
          ${row("1 House", r[1] ?? "-", "h1")}
          ${row("2 Houses", r[2] ?? "-", "h2")}
          ${row("3 Houses", r[3] ?? "-", "h3")}
          ${row("4 Houses", r[4] ?? "-", "h4")}
          ${row("Hotel", r.hotel ?? "-", "hotel")}
        </tbody>
      </table>
    `;
  }

  // Main info content (no buttons here)
  propertyDetailsEl.innerHTML = `
    <h3>${tile.name}</h3>
    <p><strong>Price:</strong> $${tile.price != null ? tile.price : "-"}</p>
    <p><strong>Owner:</strong> ${ownerName}</p>
    <p><strong>Mortgaged:</strong> ${tile.mortgaged ? "Yes" : "No"}</p>
    ${tile.type === "property" ? `
      <p><strong>Houses:</strong> ${tile.houses || 0}</p>
      <p><strong>Hotel:</strong> ${tile.hotel ? "Yes" : "No"}</p>
    ` : ""}
    <p><strong>Mortgage value:</strong> $${mortgageVal}</p>
    ${rentSection}
  `;

  resetButtons();

  // No owner → no actions
  if (!owner) return;

  const ownerPlayer = owner;

  let greenLabel = null;
  let greenHandler = null;
  let redLabel = null;
  let redHandler = null;

  const houseCost   = getHouseCost(tile.index);
  const houseRefund = Math.floor(houseCost / 2);

  // If mortgaged: only unmortgage possible (green)
  if (tile.mortgaged) {
    if (canUnmortgage(ownerPlayer, tile)) {
      const mortgage = mortgageVal;
      const fee = Math.ceil(mortgage * 0.1);
      const cost = mortgage + fee;

      greenLabel = `Unmortgage (-$${cost})`;
      greenHandler = () => {
        if (unmortgageProperty(ownerPlayer, tile)) {
          renderBoard();
          renderPropertyInfo(tile);
          updateHoldingsPanel();
        }
      };
    }
  } else {
    // Not mortgaged
    if (tile.type === "property") {
      // Positive actions: buy house or hotel
      if (canBuyHouse(ownerPlayer, tile)) {
        greenLabel = `Buy House (-$${houseCost})`;
        greenHandler = () => {
          if (buyHouse(ownerPlayer, tile)) {
            renderBoard();
            renderPropertyInfo(tile);
            updateHoldingsPanel();
          }
        };
      } else if (canBuyHotel(ownerPlayer, tile)) {
        greenLabel = `Buy Hotel (-$${houseCost})`;
        greenHandler = () => {
          if (buyHotel(ownerPlayer, tile)) {
            renderBoard();
            renderPropertyInfo(tile);
            updateHoldingsPanel();
          }
        };
      }

      // Negative actions: sell house, sell hotel, or mortgage
      if (canSellHouse(ownerPlayer, tile)) {
        redLabel = `Sell House (+$${houseRefund})`;
        redHandler = () => {
          if (sellHouse(ownerPlayer, tile)) {
            renderBoard();
            renderPropertyInfo(tile);
            updateHoldingsPanel();
          }
        };
      } else if (canSellHotel(ownerPlayer, tile)) {
        const hotelRefund = Math.floor(houseCost / 2);
        redLabel = `Sell Hotel (+$${hotelRefund})`;
        redHandler = () => {
          if (sellHotel(ownerPlayer, tile)) {
            renderBoard();
            renderPropertyInfo(tile);
            updateHoldingsPanel();
          }
        };
      } else if (canMortgage(ownerPlayer, tile)) {
        redLabel = `Mortgage (+$${mortgageVal})`;
        redHandler = () => {
          if (mortgageProperty(ownerPlayer, tile)) {
            renderBoard();
            renderPropertyInfo(tile);
            updateHoldingsPanel();
          }
        };
      }
    } else {
      // Airports / Utilities: only mortgage possible (red) when not mortgaged
      if (canMortgage(ownerPlayer, tile)) {
        redLabel = `Mortgage (+$${mortgageVal})`;
        redHandler = () => {
          if (mortgageProperty(ownerPlayer, tile)) {
            renderBoard();
            renderPropertyInfo(tile);
            updateHoldingsPanel();
          }
        };
      }
    }
  }

  // Apply green button
  if (propertyActionBtn1 && greenLabel && greenHandler) {
    propertyActionBtn1.style.display = "inline-block";
    propertyActionBtn1.textContent = greenLabel;
    propertyActionBtn1.classList.add("btn-green");
    propertyActionBtn1.classList.remove("btn-red");
    propertyActionBtn1.onclick = greenHandler;
  }

  // Apply red button
  if (propertyActionBtn2 && redLabel && redHandler) {
    propertyActionBtn2.style.display = "inline-block";
    propertyActionBtn2.textContent = redLabel;
    propertyActionBtn2.classList.add("btn-red");
    propertyActionBtn2.classList.remove("btn-green");
    propertyActionBtn2.onclick = redHandler;
  }
}

// =====================
// RENDER BOARD
// =====================

function renderBoard() {
  const boardDiv = document.getElementById("board");
  if (!boardDiv) return;

  boardDiv.innerHTML = "";

  board.forEach(tile => {
    const tileDiv = document.createElement("div");
    tileDiv.className = "tile";

    const pos = getTilePosition(tile.index);
    const isCorner = CORNER_TILES.includes(tile.index);
    let tileW = isCorner ? CORNER_SIZE : TILE_WIDTH;
    let tileH = isCorner ? CORNER_SIZE : TILE_HEIGHT;

    const edge = getEdgeType(tile.index) || "default";
    const edgeAdj = TILE_BOX_ADJUST[edge] || TILE_BOX_ADJUST.default;
    const override = TILE_BOX_ADJUST.overrides[tile.index] || {};

    const offsetTop =
      (edgeAdj.offsetTop || 0) + (override.offsetTop || 0);
    const offsetLeft =
      (edgeAdj.offsetLeft || 0) + (override.offsetLeft || 0);
    const extraWidth =
      (edgeAdj.extraWidth || 0) + (override.extraWidth || 0);
    const extraHeight =
      (edgeAdj.extraHeight || 0) + (override.extraHeight || 0);

    tileW += extraWidth;
    tileH += extraHeight;

    tileDiv.style.top = (pos.top + offsetTop) + "px";
    tileDiv.style.left = (pos.left + offsetLeft) + "px";
    tileDiv.style.width = tileW + "px";
    tileDiv.style.height = tileH + "px";

        const tileEdge = getEdgeType(tile.index);

    // Houses / hotel icons
    if (
      tile.type === "property" &&
      ((tile.houses && tile.houses > 0) || tile.hotel)
    ) {
      const edgeCfg    = tileEdge && HOUSE_BAR_CONFIG[tileEdge];
      const hcTopFrac  = edgeCfg?.topFrac  ?? 0.2;
      const hcLeftFrac = edgeCfg?.leftFrac ?? 0.5;

      const houseContainer = document.createElement("div");
      houseContainer.className = "house-container";
      houseContainer.style.top  = (tileH * hcTopFrac)  + "px";
      houseContainer.style.left = (tileW * hcLeftFrac) + "px";

      // TOP / BOTTOM EDGES → simple horizontal row (existing behavior)
      if (tileEdge === "top" || tileEdge === "bottom") {
        houseContainer.style.display = "flex";
        houseContainer.style.flexDirection = "row";

        if (tile.hotel) {
          const hotelIcon = document.createElement("div");
          hotelIcon.className = "hotel-icon";
          houseContainer.appendChild(hotelIcon);
        } else {
          const numHouses = Math.min(tile.houses || 0, 4);
          for (let i = 0; i < numHouses; i++) {
            const h = document.createElement("div");
            h.className = "house-icon";
            houseContainer.appendChild(h);
          }
        }
      } else {
        // LEFT / RIGHT EDGES → stack vertically around center,
        // shifted slightly upward and spaced per-house.

        houseContainer.style.display = "block"; // we'll absolutely position children

        if (tile.hotel) {
          const hotelIcon = document.createElement("div");
          hotelIcon.className = "hotel-icon";
          hotelIcon.style.position = "absolute";
          hotelIcon.style.left = "50%";
          hotelIcon.style.top = "50%";
          hotelIcon.style.transform = "translate(-50%, -8px)"; // small upward shift
          houseContainer.appendChild(hotelIcon);
        } else {
          const numHouses = Math.min(tile.houses || 0, 4);

          // spacing between houses in pixels
          const spacing = 16;

          // base offset so the whole stack is centered then nudged up a bit
          // e.g. for 3 houses: offsets ≈ [ -22, -6, 10 ]
          const baseOffset = -spacing * (numHouses - 1) / 2 - 6;

          for (let i = 0; i < numHouses; i++) {
            const h = document.createElement("div");
            h.className = "house-icon";

            const offsetY = baseOffset + i * spacing;

            h.style.position = "absolute";
            h.style.left = "50%";
            h.style.top = "50%";
            h.style.transform = `translate(-50%, ${offsetY}px)`;

            houseContainer.appendChild(h);
          }
        }
      }

      tileDiv.appendChild(houseContainer);
    }

    // Tokens on this tile
    const playersOnTile = players
      .map((p, idx) => ({ p, idx }))
      .filter(obj => obj.p.active && obj.p.position === tile.index);

    playersOnTile.forEach((obj, localIndex) => {
      const player = obj.p;
      const globalIndex = obj.idx;

      const token = document.createElement("div");
      token.className = "player";
      token.style.backgroundColor = player.color || "#ffffff";

      if (tile.index === 10) {
        const offsets = player.inJail
          ? JAIL_TOKEN_PIXEL_OFFSETS.inJail
          : JAIL_TOKEN_PIXEL_OFFSETS.justVisiting;
        const o = offsets[globalIndex] || offsets[0];
        token.style.top = o.dy + "px";
        token.style.left = o.dx + "px";
      } else {
        const slot = getPixelTokenSlot(tile.index, localIndex);
        token.style.top = slot.dy + "px";
        token.style.left = slot.dx + "px";
      }

      tileDiv.appendChild(token);
    });

    // Hover & click glow
    tileDiv.addEventListener("mouseenter", () => {
      const owner = tile.owner != null ? players.find(p => p.id === tile.owner) : null;
      const glowColor = owner && owner.color ? owner.color : "rgba(255,255,255,0.9)";
      tileDiv.style.outline = `2px solid ${glowColor}`;
      tileDiv.style.boxShadow = `0 0 16px ${glowColor}`;
    });

    tileDiv.addEventListener("mouseleave", () => {
      if (selectedTileIndex === tile.index) {
        const owner = tile.owner != null ? players.find(p => p.id === tile.owner) : null;
        const glowColor = owner && owner.color ? owner.color : "rgba(255,255,255,0.9)";
        tileDiv.style.outline = `2px solid ${glowColor}`;
        tileDiv.style.boxShadow = `0 0 16px ${glowColor}`;
      } else {
        tileDiv.style.outline = "none";
        tileDiv.style.boxShadow = "none";
      }
    });

    tileDiv.addEventListener("click", () => {
      // Is this tile ownable?
      const isOwnable =
        tile.type === "property" ||
        tile.type === "airport" ||
        tile.type === "utility";

      // If this is a neutral (non-ownable) space, clear selection and reset panel
      if (!isOwnable) {
        if (lastSelectedTileEl) {
          lastSelectedTileEl.style.outline = "none";
          lastSelectedTileEl.style.boxShadow = "none";
        }
        selectedTileIndex = null;
        lastSelectedTileEl = null;

        // Back to default "Select a property" text
        renderPropertyInfo(null);
        return;
      }

      // Ownable tile: show its info and keep the glow
      if (lastSelectedTileEl && lastSelectedTileEl !== tileDiv) {
        lastSelectedTileEl.style.outline = "none";
        lastSelectedTileEl.style.boxShadow = "none";
      }

      selectedTileIndex = tile.index;
      lastSelectedTileEl = tileDiv;

      const owner = tile.owner != null ? players.find(p => p.id === tile.owner) : null;
      const glowColor = owner && owner.color ? owner.color : "rgba(255,255,255,0.9)";
      tileDiv.style.outline = `2px solid ${glowColor}`;
      tileDiv.style.boxShadow = `0 0 16px ${glowColor}`;

      renderPropertyInfo(tile);
    });

    // Reapply selection glow after re-render
    if (selectedTileIndex === tile.index) {
      const owner = tile.owner != null ? players.find(p => p.id === tile.owner) : null;
      const glowColor = owner && owner.color ? owner.color : "rgba(255,255,255,0.9)";
      tileDiv.style.outline = `2px solid ${glowColor}`;
      tileDiv.style.boxShadow = `0 0 16px ${glowColor}`;
      lastSelectedTileEl = tileDiv;
    }

    boardDiv.appendChild(tileDiv);
  });
}

// =====================
// HOLDINGS PANEL
// =====================

function getCurrentPlayerIndex() {
  if (!turnOrder.length) return null;
  return turnOrder[currentTurnPointer] ?? turnOrder[0];
}

function getCurrentPlayer() {
  const idx = getCurrentPlayerIndex();
  if (idx == null) return null;
  return players[idx];
}

let holdingsViewPlayerId = null;

function getHoldingsViewPlayer() {
  // If a specific view player is set and still active, use them
  if (holdingsViewPlayerId != null) {
    const p = players.find(pl => pl.id === holdingsViewPlayerId && pl.active);
    if (p) return p;
  }
  // Fallback: current turn player
  return getCurrentPlayer();
}

function updateHoldingsPanel() {
  if (!holdingsPanelEl) return;

  const viewPlayer = getHoldingsViewPlayer();

  if (!viewPlayer || !viewPlayer.active) {
    holdingsPanelEl.innerHTML = "<p>No game in progress.</p>";
    if (holdingsPlayerNameEl) {
      holdingsPlayerNameEl.textContent = "No active player";
    }
    return;
  }

  // Update the name shown above the holdings list
  if (holdingsPlayerNameEl) {
    holdingsPlayerNameEl.textContent = viewPlayer.name;
  }

  const ownedTiles = board.filter(
    t =>
      (t.type === "property" || t.type === "airport" || t.type === "utility") &&
      t.owner === viewPlayer.id
  );

  if (!ownedTiles.length) {
  const nw = calculateNetWorth(viewPlayer);
  holdingsPanelEl.innerHTML = `
    <p><strong>${viewPlayer.name}</strong> has no properties yet.</p>
    <p>Money: $${viewPlayer.money}</p>
    <p>Net Worth: $${nw}</p>
  `;
  return;
}

  const listItems = ownedTiles
    .map(t => {
      let extra = "";
      if (t.type === "property") {
        const parts = [];
        if (t.houses && t.houses > 0) parts.push(`${t.houses} house(s)`);
        if (t.hotel) parts.push("hotel");
        if (parts.length) extra = ` — ${parts.join(", ")}`;
      }
      if (t.mortgaged) {
        extra += extra ? " (mortgaged)" : " — mortgaged";
      }
      return `<li>${t.name}${extra}</li>`;
    })
    .join("");

  const nw = calculateNetWorth(viewPlayer);

  holdingsPanelEl.innerHTML = `
    <p><strong>${viewPlayer.name}</strong></p>
    <p>Money: $${viewPlayer.money}</p>
    <p>Net Worth: $${nw}</p>
    <p><strong>Properties:</strong></p>
    <ul class="holdings-list">
      ${listItems}
    </ul>
  `;
}

function populateHoldingsPlayerSelect() {
  if (!holdingsPlayerSelectEl) return;

  holdingsPlayerSelectEl.innerHTML = "";

  const activePlayers = players.filter(p => p.active);

  activePlayers.forEach(p => {
    const opt = document.createElement("option");
    opt.value = String(p.id);
    opt.textContent = p.name;
    holdingsPlayerSelectEl.appendChild(opt);
  });

  // Try to keep the same selection if possible
  if (holdingsViewPlayerId != null) {
    holdingsPlayerSelectEl.value = String(holdingsViewPlayerId);
  }
}

// =====================
// JAIL / LONG DISTANCE MODAL LOGIC
// =====================

function openJailModalForPlayer(playerIdx) {
  currentJailPlayerIdx = playerIdx;
  const player = players[playerIdx];

  if (!jailModalEl) return;

  const attemptsLeft = 3 - (player.jailTurns || 0);
  jailModalTextEl.textContent =
    `${player.name} is in Long Distance.\n` +
    `You have ${attemptsLeft} attempt${attemptsLeft === 1 ? "" : "s"} left to roll doubles.`;

  if (jailUseCardBtn) {
    jailUseCardBtn.disabled = !(player.getOutOfJailCards && player.getOutOfJailCards > 0);
  }
  if (jailPayBtn) {
    jailPayBtn.disabled = player.money < 50;
  }
  if (jailRollBtn) {
    jailRollBtn.disabled = false;
  }

  jailModalEl.style.display = "flex";
}

function closeJailModal() {
  if (jailModalEl) {
    jailModalEl.style.display = "none";
  }
  currentJailPlayerIdx = null;
}

// Hook up jail modal buttons
if (jailUseCardBtn) {
  jailUseCardBtn.addEventListener("click", () => {
    if (currentJailPlayerIdx == null) return;
    const player = players[currentJailPlayerIdx];
    if (!player.getOutOfJailCards || player.getOutOfJailCards <= 0) return;

    player.getOutOfJailCards -= 1;
    player.inJail = false;
    player.jailTurns = 0;
    closeJailModal();

    startPostJailRoll(currentJailPlayerIdx);
  });
}

if (jailPayBtn) {
  jailPayBtn.addEventListener("click", () => {
    if (currentJailPlayerIdx == null) return;
    const player = players[currentJailPlayerIdx];
    if (player.money < 50) return;

    payToBank(player, 50, "Leaving Long Distance");
    player.inJail = false;
    player.jailTurns = 0;
    closeJailModal();

    startPostJailRoll(currentJailPlayerIdx);
  });
}

if (jailRollBtn) {
  jailRollBtn.addEventListener("click", () => {
    if (currentJailPlayerIdx == null) return;
    const idx = currentJailPlayerIdx;
    const player = players[idx];
    closeJailModal();
    attemptJailRoll(idx, player);
  });
}

// =====================
// BANKRUPTCY HANDLING
// =====================

function handlePlayerBankruptcy(player, creditor = null) {
  if (!player || !player.active) return;

  // If creditor is specified, ensure they are an active player
  if (creditor && !creditor.active) {
    creditor = null;
  }

  logEvent(
    `${player.name} has declared bankruptcy` +
    (creditor ? ` to ${creditor.name}` : "") +
    `.`
  );

  // 1. Determine all owned tiles
  const ownedTiles = board.filter(
    t =>
      (t.type === "property" || t.type === "airport" || t.type === "utility") &&
      t.owner === player.id
  );

  // 2. Transfer or clear properties
  if (creditor) {
    // Transfer to creditor
    ownedTiles.forEach(tile => {
      tile.owner = creditor.id;

      // Keep houses/hotels/mortgage state as-is
      if (!creditor.properties.includes(tile.index)) {
        creditor.properties.push(tile.index);
      }
    });
  } else {
    // No creditor → return to bank (clear ownership and improvements)
    ownedTiles.forEach(tile => {
      tile.owner = null;
      tile.mortgaged = false;
      tile.houses = 0;
      tile.hotel = false;
    });
  }

  // 3. Transfer remaining cash if bankrupt to another player
  if (creditor && player.money > 0) {
    creditor.money += player.money;
  }

  // 4. Zero out bankrupt player's state
  player.money = 0;
  player.properties = [];
  player.inJail = false;
  player.jailTurns = 0;
  player.active = false;

  // 5. Remove from turnOrder and adjust currentTurnPointer
  const id = player.id;
  const idxInOrder = turnOrder.indexOf(id);

  if (idxInOrder !== -1) {
    turnOrder.splice(idxInOrder, 1);

    if (turnOrder.length === 0) {
      // No one left – edge case (everyone bankrupt)
      if (currentTurnDisplay) {
        currentTurnDisplay.textContent = "Game Over: No active players.";
      }
    } else {
      if (currentTurnPointer > idxInOrder) {
        currentTurnPointer -= 1;
      }
      if (currentTurnPointer >= turnOrder.length) {
        currentTurnPointer = 0;
      }
    }
  }

  updateMoneyUI();
  renderBoard();
  updateHoldingsPanel();
  populateTradeOtherPlayers();
  populateTradePropertyLists();
  recomputeHouseHotelSupplyFromBoard();

  // 6. Check for a winner and update turn display
  if (turnOrder.length === 1) {
    const winner = players.find(p => p.id === turnOrder[0]);
    if (winner) {
      showInfoModal(`${winner.name} wins! All other players are bankrupt.`);
      logEvent(`${winner.name} has won the game (all other players bankrupt).`);
      if (currentTurnDisplay) {
        currentTurnDisplay.textContent = `Winner: ${winner.name}`;
      }
      return;
    }
  }

  if (turnOrder.length > 0 && currentTurnDisplay) {
    const nextIdx = turnOrder[currentTurnPointer];
    const nextPlayer = players[nextIdx];
    currentTurnDisplay.textContent = `Current Turn: ${nextPlayer.name}`;
  }
}


// =====================
// TRADE SYSTEM
// =====================

// Initialize and wire up the trade panel
function setupTradePanel() {
  if (!tradePanelEl || !tradeOtherPlayerSelect) return;

  // Wire Trade button in the Turn & Dice panel
  if (tradeBtn) {
    tradeBtn.onclick = () => {
      if (!turnOrder.length) {
        showInfoModal("Start the game before trading.");
        return;
      }
      openTradePanel();
    };
  }

  // Wire Confirm / Cancel inside the trade overlay
  if (tradeCancelBtn) {
    tradeCancelBtn.onclick = () => {
      closeTradePanel();
    };
  }

  if (tradeConfirmBtn) {
    tradeConfirmBtn.onclick = () => {
      confirmTrade();
    };
  }

  if (tradeOtherPlayerSelect) {
    tradeOtherPlayerSelect.onchange = () => {
      populateTradePropertyLists();
    };
  }
}

// Populate the "Trade with" dropdown with all active players except the current one
function populateTradeOtherPlayers() {
  if (!tradeOtherPlayerSelect) return;

  const current = getCurrentPlayer();
  tradeOtherPlayerSelect.innerHTML = "";
  if (!current) return;

  let firstId = null;

  players.forEach((p) => {
    if (!p.active) return;
    if (p.id === current.id) return;

    const opt = document.createElement("option");
    opt.value = String(p.id);
    opt.textContent = p.name;
    tradeOtherPlayerSelect.appendChild(opt);

    if (firstId === null) {
      firstId = p.id;
    }
  });

  // Default-select the first valid opponent if none is selected yet
  if (firstId !== null && !tradeOtherPlayerSelect.value) {
    tradeOtherPlayerSelect.value = String(firstId);
  }
}

// Helper to create one toggle-style property button
function createTradeButton(tile, selectionSet, containerEl) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "trade-prop-btn";
  btn.textContent = tile.name;
  btn.dataset.tileIndex = String(tile.index);

  if (selectionSet.has(tile.index)) {
    btn.classList.add("selected");
  }

  btn.addEventListener("click", () => {
    if (selectionSet.has(tile.index)) {
      selectionSet.delete(tile.index);
      btn.classList.remove("selected");
    } else {
      selectionSet.add(tile.index);
      btn.classList.add("selected");
    }
  });

  containerEl.appendChild(btn);
}

// Fill "your properties" and "opponent properties" lists as toggle buttons
function populateTradePropertyLists() {
  if (!tradeGiveListEl || !tradeReceiveListEl || !tradeOtherPlayerSelect) return;

  const current = getCurrentPlayer();
  if (!current) return;

  const otherId = parseInt(tradeOtherPlayerSelect.value || "-1", 10);
  const other = players.find((p) => p.id === otherId && p.active);

  // Reset selections & UI
  tradeGiveSelectedIndices = new Set();
  tradeReceiveSelectedIndices = new Set();
  tradeGiveListEl.innerHTML = "";
  tradeReceiveListEl.innerHTML = "";

  const isTradable = (t) =>
    t.type === "property" || t.type === "airport" || t.type === "utility";

  const currentTiles = board.filter((t) => isTradable(t) && t.owner === current.id);
  const otherTiles = other
    ? board.filter((t) => isTradable(t) && t.owner === other.id)
    : [];

  // Current player's properties
  if (currentTiles.length === 0) {
    const msg = document.createElement("p");
    msg.className = "trade-prop-empty";
    msg.textContent = "You have no tradable properties.";
    tradeGiveListEl.appendChild(msg);
  } else {
    currentTiles.forEach((t) =>
      createTradeButton(t, tradeGiveSelectedIndices, tradeGiveListEl)
    );
  }

  // Other player's properties
  if (!other || otherTiles.length === 0) {
    const msg = document.createElement("p");
    msg.className = "trade-prop-empty";
    msg.textContent = other
      ? `${other.name} has no tradable properties.`
      : "Select another player to see their properties.";
    tradeReceiveListEl.appendChild(msg);
  } else {
    otherTiles.forEach((t) =>
      createTradeButton(t, tradeReceiveSelectedIndices, tradeReceiveListEl)
    );
  }
}

// Open the trade overlay
function openTradePanel() {
  if (!tradePanelEl) return;

  populateTradeOtherPlayers();
  populateTradePropertyLists();

  if (tradeMoneyOfferedInput) tradeMoneyOfferedInput.value = "";
  if (tradeMoneyRequestedInput) tradeMoneyRequestedInput.value = "";

  tradePanelEl.style.display = "flex";
}

// Close the trade overlay
function closeTradePanel() {
  if (!tradePanelEl) return;
  tradePanelEl.style.display = "none";
}

// Confirm and execute the trade
function confirmTrade() {
  const current = getCurrentPlayer();
  if (!current) {
    showInfoModal("No current player.", "Trade");
    return;
  }

  const otherId = parseInt(tradeOtherPlayerSelect?.value || "-1", 10);
  const other = players.find((p) => p.id === otherId && p.active);
  if (!other) {
    showInfoModal("Please choose another player to trade with.", "Trade");
    return;
  }

  const moneyOffered =
    parseInt(tradeMoneyOfferedInput?.value || "0", 10) || 0;
  const moneyRequested =
    parseInt(tradeMoneyRequestedInput?.value || "0", 10) || 0;

  const giveIndices = Array.from(tradeGiveSelectedIndices);
  const receiveIndices = Array.from(tradeReceiveSelectedIndices);

  const summaryLines = [
    `Trade between ${current.name} and ${other.name}:`,
    "",
    giveIndices.length
      ? `${current.name} gives: ${giveIndices
          .map((i) => board[i].name)
          .join(", ")}`
      : `${current.name} gives: (no properties)`,
    receiveIndices.length
      ? `${other.name} gives: ${receiveIndices
          .map((i) => board[i].name)
          .join(", ")}`
      : `${other.name} gives: (no properties)`,
    moneyOffered ? `${current.name} pays $${moneyOffered}` : "",
    moneyRequested ? `${other.name} pays $${moneyRequested}` : "",
    "",
    "Confirm this trade?"
  ].filter(Boolean);

  showActionModal({
    title: "Confirm Trade",
    body: summaryLines.join("\n"),
    primaryLabel: "Confirm",
    secondaryLabel: "Cancel",
    onPrimary: () => {
      // Transfer properties
      giveIndices.forEach((idx) => {
        const tile = board[idx];
        if (tile && tile.owner === current.id) {
          tile.owner = other.id;
          tile.houses = 0;
          tile.hotel = false;
        }
      });

      receiveIndices.forEach((idx) => {
        const tile = board[idx];
        if (tile && tile.owner === other.id) {
          tile.owner = current.id;
          tile.houses = 0;
          tile.hotel = false;
        }
      });

      // Transfer money
      current.money = current.money - moneyOffered + moneyRequested;
      other.money = other.money + moneyOffered - moneyRequested;

      updateMoneyUI();
      renderBoard();
      updateHoldingsPanel();
      recomputeHouseHotelSupplyFromBoard();
      populateTradeOtherPlayers();
      populateTradePropertyLists();
      closeTradePanel();

      logEvent(
        `Trade completed between ${current.name} and ${other.name}.`
      );
    },
    onSecondary: () => {
      // Do nothing; trade canceled
      logEvent(
        `Trade canceled between ${current.name} and ${other.name}.`
      );
    }
  });
}



// =====================
// JAIL ROLL + SHARED MOVEMENT HELPERS
// =====================

// Attempt to roll out of jail (official rules)
function attemptJailRoll(playerIdx, player) {
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const total = d1 + d2;
  lastRollTotal = total;

  if (diceResultEl) {
    diceResultEl.textContent =
      `${player.name} (jail) rolled ${d1} + ${d2} = ${total}`;
  }

  showDiceOverlay(d1, d2, total);

  setTimeout(() => {
    hideDiceOverlay();

    if (d1 === d2) {
      // Rolled doubles → leave jail and move, but NO extra turn for these doubles
      player.inJail = false;
      player.jailTurns = 0;

      performMovementAndLanding(playerIdx, player, total, /*allowExtraTurnOnDoubles*/ false, d1, d2);
    } else {
      // Stay in jail, increment attempts
      player.jailTurns = (player.jailTurns || 0) + 1;

      if (player.jailTurns < 3) {
        // Still in jail, turn ends
        advanceToNextPlayer();
      } else {
        // Third failed attempt → pay $50 (if possible), then move
        player.jailTurns = 0;
        player.inJail = false;

        if (player.money >= 50) {
          player.money -= 50;
          updateMoneyUI();
        } else {
          // If they can't pay, you could handle bankruptcy here later
        }

        performMovementAndLanding(playerIdx, player, total, /*allowExtraTurnOnDoubles*/ false, d1, d2);
      }
    }
  }, DICE_ANIM_MS);
}

// Shared movement/landing logic used by normal rolls & jail rolls
function performMovementAndLanding(playerIdx, player, rollTotal, allowExtraTurnOnDoubles, d1 = null, d2 = null) {
  const oldPos = player.position;
  let newPos = (oldPos + rollTotal) % board.length;
  const passedGo = (oldPos + rollTotal >= board.length);

  if (passedGo) {
    player.money += 200;
    updateMoneyUI();
    showInfoModal(`${player.name} passed GO → +$200!`);
  }

  if (newPos === 30) {
    // Go directly to "Long Distance" (jail)
    player.position = 10;
    player.inJail = true;
    player.jailTurns = 0;
    showInfoModal(`${player.name} goes directly to Long Distance (jail)!`);
  } else {
    if (newPos === 10) {
      // Just visiting / leaving jail
      player.inJail = false;
      player.jailTurns = 0;
    }
    player.position = newPos;
  }

  // Show token on new space, then pause and handle landing
  renderBoard();
  updateHoldingsPanel();
  populateTradeOtherPlayers();
  populateTradePropertyLists();

  setTimeout(() => {
    if (newPos !== 30) {
      handleLanding(player, passedGo);
    }

    // Extra turn only allowed for NORMAL doubles (not leaving jail)
    if (allowExtraTurnOnDoubles && d1 !== null && d2 !== null && d1 === d2) {
      showInfoModal(`${player.name} rolled doubles and gets another turn!`);
      updateCurrentTurnDisplay();
    } else {
      advanceToNextPlayer();
    }

    renderBoard();
    updateHoldingsPanel();
    populateTradeOtherPlayers();
    populateTradePropertyLists();
  }, LANDING_PAUSE_MS);
}


function advanceToNextPlayer() {
  doublesInARow = 0; // reset when a turn fully ends
  currentTurnPointer = (currentTurnPointer + 1) % turnOrder.length;
  updateCurrentTurnDisplay();
}

let currentTurnPhase = "Ready to Roll";

function setTurnPhase(phase) {
  currentTurnPhase = phase;
  if (turnPhaseDisplay) {
    turnPhaseDisplay.textContent = `Phase: ${phase}`;
  }
}

function updateCurrentTurnDisplay() {
  if (!currentTurnDisplay || !turnOrder.length) return;
  const idx = turnOrder[currentTurnPointer];
  const p = players[idx];
  currentTurnDisplay.textContent = `Current Turn: ${p.name}`;

  // Phase priority
  if (typeof auctionActive !== "undefined" && auctionActive) {
    setTurnPhase("Auction");
  } else if (typeof isDebtActive === "function" && isDebtActive()) {
    setTurnPhase("Debt Resolution");
  } else if (p.inJail) {
    setTurnPhase("Jail Decision");
  } else {
    setTurnPhase("Ready to Roll");
  }
}


// Used when someone leaves jail via card or paying and takes a normal roll
function startPostJailRoll(playerIdx) {
  const player = players[playerIdx];

  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const rollTotal = d1 + d2;
  lastRollTotal = rollTotal;

  if (diceResultEl) {
    diceResultEl.textContent =
      `${player.name} rolled ${d1} + ${d2} = ${rollTotal}`;
  }

  showDiceOverlay(d1, d2, rollTotal);

  setTimeout(() => {
    hideDiceOverlay();
    // Official rules: doubles when leaving jail via pay/card do NOT give an extra turn
    performMovementAndLanding(playerIdx, player, rollTotal, /*allowExtraTurnOnDoubles*/ false, d1, d2);
  }, DICE_ANIM_MS);
}

// =====================
// DICE ANIMATION HELPERS
// (only keep these once in your file)
// =====================

const DICE_ANIM_MS = 800;      // how long dice anim shows
const LANDING_PAUSE_MS = 500;  // pause on tile before popup
const STEP_MOVE_MS = 140;      // delay between each tile step movement

function showDiceOverlay(d1, d2, total) {
  if (!diceOverlayEl || !diceOverlayTextEl) return;

  diceOverlayTextEl.textContent = `${d1} + ${d2} = ${total}`;

  // If you're using pip-based dice, also update their faces:
  if (typeof setDieFace === "function") {
    setDieFace(diceDie1El, d1);
    setDieFace(diceDie2El, d2);
  }

  diceOverlayEl.classList.remove("show", "animate");
  void diceOverlayEl.offsetWidth; // reflow to restart animation
  diceOverlayEl.classList.add("show", "animate");
}

function hideDiceOverlay() {
  if (!diceOverlayEl) return;
  diceOverlayEl.classList.remove("show");
}

// =====================
// JAIL ROLL + SHARED MOVEMENT HELPERS
// =====================

// Attempt to roll out of jail (official rules)
function attemptJailRoll(playerIdx, player) {
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const total = d1 + d2;
  lastRollTotal = total;

  if (diceResultEl) {
    diceResultEl.textContent =
      `${player.name} (in Long Distance) rolled ${d1} + ${d2} = ${total}`;
  }

  showDiceOverlay(d1, d2, total);

  setTimeout(() => {
    hideDiceOverlay();

    if (d1 === d2) {
      // Rolled doubles → leave jail and move, but NO extra turn for these doubles
      player.inJail = false;
      player.jailTurns = 0;

      performMovementAndLanding(
        playerIdx,
        player,
        total,
        /*allowExtraTurnOnDoubles*/ false,
        d1,
        d2
      );
    } else {
      // Stay in jail, increment attempts
      player.jailTurns = (player.jailTurns || 0) + 1;

      if (player.jailTurns < 3) {
        // Still in jail, turn ends
        advanceToNextPlayer();
      } else {
        // Third failed attempt → pay $50 (if possible), then move
        player.jailTurns = 0;
        player.inJail = false;

        if (player.money >= 50) {
          player.money -= 50;
          updateMoneyUI();
          showInfoModal(`${player.name} failed to roll doubles in 3 turns and paid $50 to leave Long Distance.`);
        } else {
          // If they can't pay, you could handle bankruptcy here later
          showInfoModal(`${player.name} cannot afford $50 to leave Long Distance!`);
        }

        performMovementAndLanding(
          playerIdx,
          player,
          total,
          /*allowExtraTurnOnDoubles*/ false,
          d1,
          d2
        );
      }
    }
  }, DICE_ANIM_MS);
}

// Shared movement/landing logic used by normal rolls & jail rolls
function performMovementAndLanding(
  playerIdx,
  player,
  rollTotal,
  allowExtraTurnOnDoubles,
  d1 = null,
  d2 = null
) {
  const oldPos = player.position;
  const boardSize = board.length;

  // Compute final destination and whether we pass GO
  const rawDestination = oldPos + rollTotal;
  const newPos = rawDestination % boardSize;
  const passedGo = rawDestination >= boardSize;

  if (passedGo) {
    player.money += 200;
    updateMoneyUI();
    showInfoModal(`${player.name} passed GO → +$200!`);
  }

  // Build path of every tile index the token will step onto
  const path = [];
  for (let i = 1; i <= rollTotal; i++) {
    path.push((oldPos + i) % boardSize);
  }

  let stepIndex = 0;

  function doStep() {
    // When we've finished stepping, handle landing / jail / next turn
    if (stepIndex >= path.length) {
      setTimeout(() => {
        // Go To Jail tile (index 30) special behavior
        if (newPos === 30) {
          player.position = 10; // Long Distance
          player.inJail = true;
          player.jailTurns = 0;

          renderBoard();
          updateHoldingsPanel();
          populateTradeOtherPlayers();
          populateTradePropertyLists();

          showInfoModal(
            `${player.name} landed on Go To Long Distance and is sent to Long Distance!`
          );
        } else {
          // Normal landing
          handleLanding(player, passedGo);
        }

        // Doubles = extra turn (only in normal movement, not leaving jail)
        if (allowExtraTurnOnDoubles && d1 !== null && d2 !== null && d1 === d2) {
          showInfoModal(`${player.name} rolled doubles and gets another turn!`);
          updateCurrentTurnDisplay();
        } else {
          advanceToNextPlayer();
        }

        renderBoard();
        updateHoldingsPanel();
        populateTradeOtherPlayers();
        populateTradePropertyLists();
      }, LANDING_PAUSE_MS);

      return;
    }

    // Move one step along the path
    player.position = path[stepIndex];
    stepIndex += 1;

    renderBoard();
    updateHoldingsPanel();
    // Don't handle landing yet; we only animate movement
    setTimeout(doStep, STEP_MOVE_MS);
  }

  // Safety: if somehow there are no steps, just handle landing immediately
  if (path.length === 0) {
    handleLanding(player, passedGo);
    return;
  }

  // Start stepping animation
  doStep();
}


function advanceToNextPlayer() {
  // A full turn ending resets doubles
  doublesInARow = 0;

  if (!turnOrder.length) return;
  currentTurnPointer = (currentTurnPointer + 1) % turnOrder.length;
  updateCurrentTurnDisplay();
}

function updateCurrentTurnDisplay() {
  if (!currentTurnDisplay || !turnOrder.length) return;
  const idx = turnOrder[currentTurnPointer];
  const p = players[idx];
  currentTurnDisplay.textContent = `Current Turn: ${p.name}`;

  // Phase priority
  if (typeof auctionActive !== "undefined" && auctionActive) {
    setTurnPhase("Auction");
  } else if (typeof isDebtActive === "function" && isDebtActive()) {
    setTurnPhase("Debt Resolution");
  } else if (p.inJail) {
    setTurnPhase("Jail Decision");
  } else {
    setTurnPhase("Ready to Roll");
  }
}


// Used when someone leaves jail via card or paying and then takes a normal roll
function startPostJailRoll(playerIdx) {
  const player = players[playerIdx];

  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const rollTotal = d1 + d2;
  lastRollTotal = rollTotal;

  if (diceResultEl) {
    diceResultEl.textContent =
      `${player.name} rolled ${d1} + ${d2} = ${rollTotal}`;
  }

  showDiceOverlay(d1, d2, rollTotal);

  setTimeout(() => {
    hideDiceOverlay();
    // Official rules: doubles when leaving jail via pay/card do NOT give an extra turn
    performMovementAndLanding(
      playerIdx,
      player,
      rollTotal,
      /*allowExtraTurnOnDoubles*/ false,
      d1,
      d2
    );
  }, DICE_ANIM_MS);
}

// Auction event listeners
if (auctionBidBtn) auctionBidBtn.addEventListener("click", handleAuctionBid);
if (auctionPassBtn) auctionPassBtn.addEventListener("click", handleAuctionPass);


// =====================
// DICE & TURN LOGIC
// =====================

if (rollBtn) {
  rollBtn.addEventListener("click", () => {
    if (!turnOrder.length) {
      showInfoModal("Start the game from the setup screen before rolling.");
      return;
    }

    if (auctionActive) {
      showInfoModal("Finish the auction before rolling.");
      return;
    }

    const currentIdx = turnOrder[currentTurnPointer];
    const player = players[currentIdx];
    
    setTurnPhase("Rolling Dice");

    // If player is in jail, open the jail modal for official options
    if (player.inJail) {
      openJailModalForPlayer(currentIdx);
      logEvent(`${player.name} is in Long Distance and must choose how to try to get out.`);
      return;
    }

    // NORMAL roll (not in jail)
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const rollTotal = d1 + d2;
    lastRollTotal = rollTotal;

    if (diceResultEl) {
      diceResultEl.textContent =
        `${player.name} rolled ${d1} + ${d2} = ${rollTotal}`;
    }

    logEvent(`${player.name} rolled ${d1} + ${d2} = ${rollTotal}.`);

    // Handle doubles count
    if (d1 === d2) {
      doublesInARow += 1;
    } else {
      doublesInARow = 0;
    }

    // Three doubles in a row → go directly to jail, do not move by third roll
    if (doublesInARow >= 3) {
      doublesInARow = 0;
      showInfoModal(`${player.name} rolled three doubles in a row and is sent to Long Distance!`);
      logEvent(`${player.name} rolled three doubles in a row and is sent to Long Distance (jail).`);
      player.position = 10;
      player.inJail = true;
      player.jailTurns = 0;
      renderBoard();
      updateHoldingsPanel();
      populateTradeOtherPlayers();
      populateTradePropertyLists();
      advanceToNextPlayer();
      return;
    }

    // Show center dice overlay
    showDiceOverlay(d1, d2, rollTotal);

    setTimeout(() => {
      hideDiceOverlay();
      setTurnPhase("Moving");

      // Normal movement & landing; doubles give extra turn here
      performMovementAndLanding(
        currentIdx,
        player,
        rollTotal,
        /*allowExtraTurnOnDoubles*/ true,
        d1,
        d2
      );
    }, DICE_ANIM_MS);
  });
}

// =====================
// END TURN BUTTON
// =====================

if (endTurnBtn) {
  endTurnBtn.addEventListener("click", () => {
    // No game yet
    if (!turnOrder || !turnOrder.length) {
      showInfoModal(
        "No game in progress",
        "Start a new game from the setup screen before ending turns."
      );
      return;
    }

    // If an auction is running, you shouldn't be able to skip it
    if (typeof auctionActive !== "undefined" && auctionActive) {
      showInfoModal(
        "Auction in progress",
        "Finish the current auction before ending the turn."
      );
      return;
    }

    const currentIdx = turnOrder[currentTurnPointer];
    const currentPlayer = players[currentIdx];

    logEvent(`${currentPlayer.name} ended their turn.`);

    // Pass play to the next player
    advanceToNextPlayer();
  });
}


// =====================
// HOLDINGS OVERLAY UI
// =====================

function openHoldingsOverlay() {
  if (!holdingsOverlayEl) return;

  // Default view to the current turn player when opening
  const current = getCurrentPlayer();
  holdingsViewPlayerId = current ? current.id : null;

  // Populate the player dropdown & render holdings
  populateHoldingsPlayerSelect();
  updateHoldingsPanel();

  holdingsOverlayEl.style.display = "flex";
}

function closeHoldingsOverlay() {
  if (!holdingsOverlayEl) return;
  holdingsOverlayEl.style.display = "none";
}

if (seeHoldingsBtn) {
  seeHoldingsBtn.addEventListener("click", openHoldingsOverlay);
}

if (closeHoldingsBtn) {
  closeHoldingsBtn.addEventListener("click", closeHoldingsOverlay);
}

if (holdingsPlayerSelectEl) {
  holdingsPlayerSelectEl.addEventListener("change", (e) => {
    const val = parseInt(e.target.value, 10);
    if (!Number.isNaN(val)) {
      holdingsViewPlayerId = val;
      updateHoldingsPanel();
    }
  });
}

// Clicking the neutral center of the board clears the property info panel
if (boardCenterHitbox) {
  boardCenterHitbox.addEventListener("click", () => {
    renderPropertyInfo(null);
  });
}

// =====================
// INITIAL RENDER
// =====================

renderBoard();
updateMoneyUI();
renderPropertyInfo(null);
updateHoldingsPanel();
setupTradePanel();
updateBankSupplyUI();


// =====================
// ONLINE MULTIPLAYER (HOST-AUTHORITATIVE SNAPSHOT SYNC)
// =====================
// - Host runs the full game logic (existing buttons / handlers).
// - Non-hosts request actions; host applies them and broadcasts a full snapshot.
// - Works without rewriting your core game engine.

const ONLINE = {
  enabled: true,
  socket: null,
  connected: false,
  roomCode: null,
  isHost: false,
  seat: null,
  roomPlayers: []
};

// Lobby DOM
const lobbyOverlayEl = document.getElementById("onlineLobby");
const lobbyNameEl = document.getElementById("lobbyName");
const createRoomBtnEl = document.getElementById("createRoomBtn");
const joinRoomBtnEl = document.getElementById("joinRoomBtn");
const joinCodeInputEl = document.getElementById("joinCodeInput");
const lobbyStatusEl = document.getElementById("lobbyStatus");
const roomInfoEl = document.getElementById("roomInfo");
const roomCodeTextEl = document.getElementById("roomCodeText");
const copyRoomCodeBtnEl = document.getElementById("copyRoomCodeBtn");
const roomPlayersListEl = document.getElementById("roomPlayersList");
const closeLobbyBtnEl = document.getElementById("closeLobbyBtn");
const onlineStartBtnEl = document.getElementById("onlineStartBtn");
const hostRulesCardEl = document.getElementById("hostRulesCard");

// Room pill
const openLobbyBtnEl = document.getElementById("openLobbyBtn");
const openLobbyCodeEl = document.getElementById("openLobbyCode");

// Color picker DOM
const onlineColorOverlayEl = document.getElementById("onlineColorOverlay");
const onlineColorChoicesEl = document.getElementById("onlineColorChoices");
const onlineColorSubtitleEl = document.getElementById("onlineColorSubtitle");

function setLobbyStatus(msg) {
  if (lobbyStatusEl) lobbyStatusEl.textContent = msg || "";
}

function showLobbyOverlay() {
  if (lobbyOverlayEl) lobbyOverlayEl.style.display = "flex";
  if (closeLobbyBtnEl) closeLobbyBtnEl.style.display = ONLINE.roomCode ? "inline-flex" : "none";
}

function hideLobbyOverlay() {
  if (lobbyOverlayEl) lobbyOverlayEl.style.display = "none";
}

function updateRoomPill(code) {
  if (!openLobbyBtnEl) return;
  if (openLobbyCodeEl) openLobbyCodeEl.textContent = code || "------";
  openLobbyBtnEl.style.display = code ? "inline-flex" : "none";
}

function showRoomInfo(code, playersList) {
  if (roomInfoEl) roomInfoEl.style.display = code ? "block" : "none";
  if (roomCodeTextEl) roomCodeTextEl.textContent = code || "------";
  updateRoomPill(code);
  renderRoomPlayers(playersList || []);
  if (closeLobbyBtnEl) closeLobbyBtnEl.style.display = code ? "inline-flex" : "none";
}

function renderRoomPlayers(list) {
  ONLINE.roomPlayers = Array.isArray(list) ? list : [];

  if (!roomPlayersListEl) return;
  roomPlayersListEl.innerHTML = "";

  ONLINE.roomPlayers
    .slice()
    .sort((a, b) => (a.seat ?? 0) - (b.seat ?? 0))
    .forEach((p) => {
      const li = document.createElement("li");
      const left = document.createElement("span");
      left.textContent = `${p.name || "Player"} (P${(p.seat ?? 0) + 1})`;
      const right = document.createElement("span");
      right.textContent = p.isHost ? "Host" : "";
      right.style.opacity = "0.85";
      li.appendChild(left);
      li.appendChild(right);
      roomPlayersListEl.appendChild(li);
    });

  if (onlineStartBtnEl) {
    const canStart = ONLINE.isHost && ONLINE.roomPlayers.length >= 2;
    onlineStartBtnEl.disabled = !canStart;
    onlineStartBtnEl.style.opacity = canStart ? "1" : "0.5";
  }
}

function buildSnapshot() {
  return {
    v: 1,
    roomCode: ONLINE.roomCode,
    players,
    rules,
    turnOrder,
    currentTurnPointer,
    lastRollTotal,
    freeParkingPot
  };
}

function applySnapshot(snap) {
  if (!snap || typeof snap !== "object") return;

  // Assign globals
  players = snap.players || players;
  rules = snap.rules || rules;
  turnOrder = snap.turnOrder || turnOrder;
  currentTurnPointer = typeof snap.currentTurnPointer === "number" ? snap.currentTurnPointer : currentTurnPointer;
  lastRollTotal = typeof snap.lastRollTotal === "number" ? snap.lastRollTotal : lastRollTotal;
  freeParkingPot = typeof snap.freeParkingPot === "number" ? snap.freeParkingPot : freeParkingPot;

  // Re-render UI
  updateMoneyUI();
  renderBoard();
  renderPropertyInfo(null);
  updateHoldingsPanel();
  setupTradePanel();
  updateBankSupplyUI();

  // If game started, close lobby automatically
  if (Array.isArray(turnOrder) && turnOrder.length >= 2) {
    hideLobbyOverlay();
    showOnlineColorPickerIfNeeded(false);
  }
}

function broadcastSnapshot() {
  if (!ONLINE.enabled) return;
  if (!ONLINE.socket) return;
  if (!ONLINE.isHost) return;
  ONLINE.socket.emit("hostState", buildSnapshot());
}

function requestHostAction(type, payload) {
  if (!ONLINE.enabled) return;
  if (!ONLINE.socket) return;
  if (ONLINE.isHost) return;

  ONLINE.socket.emit("requestAction", {
    type,
    payload: payload || { seat: ONLINE.seat }
  });
}

function forwardIfNonHost(btn, type) {
  if (!btn) return;
  btn.addEventListener(
    "click",
    (e) => {
      if (!ONLINE.enabled) return;
      if (ONLINE.isHost) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      requestHostAction(type, { seat: ONLINE.seat });
    },
    true
  );
}

function getLobbyPlayersSorted() {
  const list = Array.isArray(ONLINE.roomPlayers) ? ONLINE.roomPlayers.slice() : [];
  list.sort((a, b) => (a.seat ?? 0) - (b.seat ?? 0));
  return list;
}

function readRulesFromLobbyUI() {
  const auctionToggle    = document.getElementById("toggleAuctionMode");
  const unlimitedToggle  = document.getElementById("toggleUnlimitedHouses");
  const freeParkingTgl   = document.getElementById("toggleFreeParkingJackpot");
  const evenBuildTgl     = document.getElementById("toggleEvenBuild");
  const startMoneyInput  = document.getElementById("startMoneyInput");

  rules.auctionMode        = auctionToggle   ? !!auctionToggle.checked   : false;
  rules.unlimitedHouses    = unlimitedToggle ? !!unlimitedToggle.checked : false;
  rules.freeParkingJackpot = freeParkingTgl  ? !!freeParkingTgl.checked  : false;
  rules.evenHouseBuild     = evenBuildTgl    ? !!evenBuildTgl.checked    : true;

  let startingMoney = 1500;
  if (startMoneyInput) {
    const parsed = parseInt(startMoneyInput.value, 10);
    if (!Number.isNaN(parsed) && parsed >= 0) startingMoney = parsed;
  }
  rules.startingMoney = startingMoney;
}

function hostStartOnlineGameNow() {
  readRulesFromLobbyUI();

  // reset auction if function exists
  if (typeof resetAuctionState === "function") resetAuctionState();

  freeParkingPot = 0;
  turnOrder = [];

  players.forEach(p => {
    p.active = false;
    p.properties = [];
  });

  const lobbyPlayers = getLobbyPlayersSorted();
  const numPlayers = Math.max(2, Math.min(4, lobbyPlayers.length));

  const colorNames = Object.keys(COLOR_MAP);

  for (let idx = 0; idx < numPlayers; idx++) {
    const p = players[idx];
    const lp = lobbyPlayers[idx];

    const name = lp && lp.name ? String(lp.name).slice(0, 15) : `Player ${idx + 1}`;
    const colorName = colorNames[idx % colorNames.length];
    const hex = COLOR_MAP[colorName];
    const homeIndex = allowedHomeSpaces[idx % allowedHomeSpaces.length];

    p.name = name;
    p.color = hex; // temporary; each player can change after start
    p.home = homeIndex;
    p.position = 0;
    p.inJail = false;
    p.jailTurns = 0;
    p.getOutOfJailCards = 0;
    p.money = rules.startingMoney;
    p.properties = [];
    p.active = true;

    turnOrder.push(idx);
  }

  if (turnOrder.length < 2) {
    showInfoModal("You must have at least two players in the room.");
    return;
  }

  legendNameSpans.forEach((span, idx) => {
    if (!span) return;
    const p = players[idx];
    if (p.active) {
      span.textContent = p.name;
      span.style.opacity = "1";
    } else {
      span.textContent = `Player ${idx + 1}`;
      span.style.opacity = "0.4";
    }
  });

  updateMoneyUI();
  currentTurnPointer = 0;

  eventLogEntries.length = 0;
  renderEventLog();

  const firstPlayer = players[turnOrder[0]];
  if (currentTurnDisplay) currentTurnDisplay.textContent = `Current Turn: ${firstPlayer.name}`;

  showInfoModal(`🎲 Online game started! ${firstPlayer.name} goes first.`);
  logEvent(
    `Online game started with ${turnOrder.length} player(s). ` +
    `Auction Mode: ${rules.auctionMode ? "ON" : "OFF"}, ` +
    `Unlimited Houses: ${rules.unlimitedHouses ? "ON" : "OFF"}, ` +
    `Free Parking Jackpot: ${rules.freeParkingJackpot ? "ON" : "OFF"}, ` +
    `Even Build: ${rules.evenHouseBuild ? "ON" : "OFF"}, ` +
    `Start Money: $${rules.startingMoney}.`
  );
  logEvent(`${firstPlayer.name} goes first.`);

  renderBoard();
  renderPropertyInfo(null);
  updateHoldingsPanel();
  setupTradePanel();
  updateBankSupplyUI();

  hideLobbyOverlay();
  updateRoomPill(ONLINE.roomCode);

  // Sync immediately
  setTimeout(broadcastSnapshot, 0);

  // Prompt colors
  showOnlineColorPickerIfNeeded(true);
}

// ----- Color picker (host-authoritative via requestAction) -----

function isGameStarted() {
  return Array.isArray(turnOrder) && turnOrder.length >= 2;
}

function getColorNameFromHex(hex) {
  return Object.keys(COLOR_MAP).find(k => COLOR_MAP[k] === hex) || null;
}

function getTakenColorNames() {
  const taken = new Set();
  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (p && p.active) {
      const name = getColorNameFromHex(p.color);
      if (name) taken.add(name);
    }
  }
  return taken;
}

function buildColorPickerButtons() {
  if (!onlineColorChoicesEl) return;
  if (onlineColorChoicesEl.dataset.built === "1") return;

  onlineColorChoicesEl.innerHTML = "";
  Object.keys(COLOR_MAP).forEach((cName) => {
    const btn = document.createElement("button");
    btn.className = "color-choice-btn";
    btn.type = "button";
    btn.dataset.colorName = cName;

    const swatch = document.createElement("span");
    swatch.className = "color-choice-swatch";
    swatch.style.backgroundColor = COLOR_MAP[cName];

    const label = document.createElement("span");
    label.textContent = cName;

    btn.appendChild(swatch);
    btn.appendChild(label);

    btn.addEventListener("click", () => requestColorChoice(cName));
    onlineColorChoicesEl.appendChild(btn);
  });

  onlineColorChoicesEl.dataset.built = "1";
}

function refreshColorPickerUI() {
  if (!onlineColorChoicesEl) return;
  const me = players && typeof ONLINE.seat === "number" ? players[ONLINE.seat] : null;
  const myColorName = me ? getColorNameFromHex(me.color) : null;

  const taken = getTakenColorNames();
  const buttons = onlineColorChoicesEl.querySelectorAll("button.color-choice-btn");
  buttons.forEach((btn) => {
    const cName = btn.dataset.colorName;
    const isTaken = taken.has(cName);
    btn.disabled = !!myColorName || (isTaken && cName !== myColorName);
  });

  if (onlineColorSubtitleEl) {
    onlineColorSubtitleEl.textContent = myColorName
      ? `Locked in: ${myColorName}.`
      : "Pick a color that no one else has chosen.";
  }

  if (myColorName && onlineColorOverlayEl) {
    setTimeout(() => (onlineColorOverlayEl.style.display = "none"), 250);
  }
}

function showOnlineColorPickerIfNeeded(forceShow) {
  if (!ONLINE.enabled) return;
  if (!onlineColorOverlayEl || !onlineColorChoicesEl) return;
  if (!isGameStarted()) return;

  const me = players && typeof ONLINE.seat === "number" ? players[ONLINE.seat] : null;
  if (!me || !me.active) return;

  const myColorName = getColorNameFromHex(me.color);
  if (!forceShow && myColorName) return;

  buildColorPickerButtons();
  onlineColorOverlayEl.style.display = "flex";
  refreshColorPickerUI();
}

function requestColorChoice(colorName) {
  if (!colorName) return;

  if (ONLINE.isHost) {
    applySeatColorOnHost(ONLINE.seat, colorName);
    setTimeout(broadcastSnapshot, 0);
    refreshColorPickerUI();
  } else {
    requestHostAction("CHOOSE_COLOR", { seat: ONLINE.seat, colorName });
  }
}

function applySeatColorOnHost(seat, colorName) {
  const idx = Number(seat);
  if (!Number.isFinite(idx)) return;
  if (!players || !players[idx]) return;

  const hex = COLOR_MAP[colorName];
  if (!hex) return;

  // Unique among active players
  for (let i = 0; i < players.length; i++) {
    if (i === idx) continue;
    const p = players[i];
    if (p && p.active && p.color === hex) return;
  }

  players[idx].color = hex;
  renderBoard();
  updateMoneyUI();
}

// ----- Init online -----

function initOnline() {
  if (!ONLINE.enabled) return;

  if (typeof io === "undefined") {
    setLobbyStatus("Online server not detected. Make sure your server is running.");
    return;
  }

  ONLINE.socket = io();

  // Transition guests immediately when host starts the game
  ONLINE.socket.on("onlineStartGame", () => {
    hideLobbyOverlay();
  });

  ONLINE.socket.on("connect", () => {
    ONLINE.connected = true;
    setLobbyStatus("Connected. Create or join a room.");
    showLobbyOverlay();
  });

  ONLINE.socket.on("disconnect", () => {
    ONLINE.connected = false;
    setLobbyStatus("Disconnected.");
  });

  ONLINE.socket.on("roomJoined", (payload) => {
    const { code, seat, isHost, players: list } = payload || {};
    ONLINE.roomCode = code;
    ONLINE.seat = seat;
    ONLINE.isHost = !!isHost;

    // Host-only UI
    if (hostRulesCardEl) hostRulesCardEl.style.display = ONLINE.isHost ? "block" : "none";
    if (onlineStartBtnEl) onlineStartBtnEl.style.display = ONLINE.isHost ? "block" : "none";

    showRoomInfo(code, list);

    if (ONLINE.isHost) {
      setLobbyStatus("Room created. Share the code, then start the game.");
    } else {
      setLobbyStatus("Joined room. Waiting for host to start...");
    }

    showLobbyOverlay();
  });

  ONLINE.socket.on("roomUpdate", ({ code, players: list }) => {
    if (code) ONLINE.roomCode = code;
    showRoomInfo(ONLINE.roomCode, list);
  });

  ONLINE.socket.on("roomError", (msg) => {
    setLobbyStatus(msg || "Room error.");
  });

  ONLINE.socket.on("hostState", (snap) => {
    // Non-hosts receive authoritative snapshots
    if (!ONLINE.isHost) applySnapshot(snap);
  });

  ONLINE.socket.on("hostAction", ({ type, payload }) => {
    if (!ONLINE.isHost) return;

    // Color choices: always allowed
    if (type === "CHOOSE_COLOR") {
      const seat = payload && typeof payload.seat === "number" ? payload.seat : null;
      const colorName = payload && payload.colorName ? payload.colorName : null;
      if (seat !== null && colorName) {
        applySeatColorOnHost(seat, colorName);
        setTimeout(broadcastSnapshot, 0);
      }
      return;
    }

    const activeIdx = turnOrder && turnOrder.length ? turnOrder[currentTurnPointer] : 0;
    const requesterSeat = payload && typeof payload.seat === "number" ? payload.seat : null;

    if (requesterSeat !== null && requesterSeat !== activeIdx) return;

    if (type === "ROLL") {
      if (rollBtn) rollBtn.click();
      setTimeout(broadcastSnapshot, 0);
      return;
    }
    if (type === "END_TURN") {
      if (endTurnBtn) endTurnBtn.click();
      setTimeout(broadcastSnapshot, 0);
      return;
    }
    if (type === "BANKRUPT") {
      if (bankruptBtn) bankruptBtn.click();
      setTimeout(broadcastSnapshot, 0);
      return;
    }
  });

  // UI handlers
  if (createRoomBtnEl) {
    createRoomBtnEl.addEventListener("click", () => {
      const name = lobbyNameEl && lobbyNameEl.value ? lobbyNameEl.value.trim() : "";
      ONLINE.socket.emit("createRoom", { name });
      setLobbyStatus("Creating room...");
    });
  }

  if (joinRoomBtnEl) {
    joinRoomBtnEl.addEventListener("click", () => {
      const name = lobbyNameEl && lobbyNameEl.value ? lobbyNameEl.value.trim() : "";
      const code = joinCodeInputEl && joinCodeInputEl.value ? joinCodeInputEl.value.trim() : "";
      ONLINE.socket.emit("joinRoom", { code, name });
      setLobbyStatus("Joining room...");
    });
  }

  if (copyRoomCodeBtnEl) {
    copyRoomCodeBtnEl.addEventListener("click", async () => {
      try {
        if (!ONLINE.roomCode) return;
        await navigator.clipboard.writeText(ONLINE.roomCode);
        setLobbyStatus("Copied room code!");
      } catch {
        setLobbyStatus("Could not copy. Select and copy manually.");
      }
    });
  }

  if (closeLobbyBtnEl) {
    closeLobbyBtnEl.addEventListener("click", () => hideLobbyOverlay());
  }
  if (lobbyOverlayEl) {
    lobbyOverlayEl.addEventListener("click", (e) => {
      if (e.target === lobbyOverlayEl) hideLobbyOverlay();
    });
  }
  if (openLobbyBtnEl) {
    openLobbyBtnEl.addEventListener("click", () => showLobbyOverlay());
  }

  if (onlineStartBtnEl) {
    onlineStartBtnEl.addEventListener("click", () => {
      if (!ONLINE.isHost) return;
      if (ONLINE.roomPlayers.length < 2) {
        setLobbyStatus("Need at least 2 players to start.");
        return;
      }
      hostStartOnlineGameNow();
    });
  }

  // Non-host forwarding for core actions
  forwardIfNonHost(rollBtn, "ROLL");
  forwardIfNonHost(endTurnBtn, "END_TURN");
  forwardIfNonHost(bankruptBtn, "BANKRUPT");

  // Host: broadcast after almost any click that could mutate state
  document.addEventListener("click", () => {
    if (!ONLINE.enabled) return;
    if (!ONLINE.isHost) return;
    setTimeout(broadcastSnapshot, 20);
  });
}

initOnline();
