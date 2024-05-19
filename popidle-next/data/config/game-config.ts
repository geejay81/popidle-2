const gameConfig = {
    gameType: process.env.GAME_TYPE,
    gameIdentifier: process.env.GAME_IDENTIFIER,
    gameTitle: process.env.GAME_TITLE,
    puzzleTitle: process.env.GAME_PUZZLE_TITLE,
    colourBannerBackground: process.env.COLOUR_BANNER_BACKGROUND ?? "",
    colourBannerForeground: process.env.COLOUR_BANNER_FOREGROUND ?? ""
}

export default gameConfig;