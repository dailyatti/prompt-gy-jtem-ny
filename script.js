// Professional Sports Betting & Analysis Prompt Library
// Enhanced with comprehensive match analysis and political forecasting

const sportsData = {
    // Traditional Sports
    football: {
        name: "Football (Soccer)",
        icon: "⚽",
        category: "traditional",
        title: "Professional Football Match Analysis & Betting Strategy",
        prompt: `You are a professional football analyst with 15+ years of experience in match analysis and betting strategy. Provide a comprehensive analysis for the following match with specific focus on:

**MATCH ANALYSIS FRAMEWORK:**

1. **Team Form & Performance Analysis:**
   - Last 10 matches performance (wins/draws/losses)
   - Home vs Away form comparison
   - Goals scored/conceded averages
   - Recent tactical changes or formations
   - Key player availability and injury reports

2. **Head-to-Head Historical Data:**
   - Last 5 meetings between teams
   - Historical goal patterns and scorelines
   - Venue-specific performance history
   - Seasonal trends and patterns

3. **Tactical Analysis:**
   - Formation matchups and tactical advantages
   - Key player battles and positional strengths
   - Set piece effectiveness (corners, free kicks)
   - Defensive vulnerabilities and attacking threats

4. **Statistical Deep Dive:**
   - Expected Goals (xG) analysis
   - Possession statistics and passing accuracy
   - Shot conversion rates and defensive actions
   - Corner and card statistics

5. **Market Analysis & Value Bets:**
   - Odds comparison across major bookmakers
   - Value identification in various markets
   - Over/Under goals analysis with statistical backing
   - Both Teams to Score probability assessment

6. **Risk Assessment:**
   - Weather conditions impact
   - Referee tendencies and card statistics
   - Motivation factors (league position, cup competitions)
   - Squad rotation possibilities

**BETTING RECOMMENDATIONS:**
Provide specific betting suggestions with:
- Confidence levels (1-10 scale)
- Stake recommendations (% of bankroll)
- Multiple market opportunities
- Risk management strategies

**MATCH PREDICTION:**
Final score prediction with detailed reasoning and alternative scenarios.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    tennis: {
        name: "Tennis",
        icon: "🎾",
        category: "traditional",
        title: "Professional Tennis Match Analysis & Betting Strategy",
        prompt: `You are a professional tennis analyst specializing in match prediction and betting strategy. Provide comprehensive analysis for the following tennis match:

**TENNIS MATCH ANALYSIS FRAMEWORK:**

1. **Player Form & Recent Performance:**
   - Last 10 matches win/loss record
   - Recent tournament performances and results
   - Current ranking and ranking trajectory
   - Match fitness and playing rhythm assessment

2. **Head-to-Head Analysis:**
   - Historical matchup record and patterns
   - Surface-specific head-to-head performance
   - Recent meetings and tactical adjustments
   - Psychological advantages and mental edge

3. **Surface & Conditions Analysis:**
   - Surface suitability for each player's game style
   - Weather conditions impact (wind, temperature, humidity)
   - Court speed and bounce characteristics
   - Indoor vs outdoor performance differences

4. **Technical & Tactical Breakdown:**
   - Serve statistics and return game effectiveness
   - Baseline vs net play preferences
   - Break point conversion rates
   - Tiebreak performance and clutch factor

5. **Physical & Mental Assessment:**
   - Current injury status and physical condition
   - Recent match load and fatigue factors
   - Mental toughness in pressure situations
   - Motivation levels and tournament importance

6. **Statistical Analysis:**
   - First serve percentage and ace rates
   - Unforced error patterns and consistency
   - Winners-to-errors ratio analysis
   - Set and game win percentages

**BETTING MARKET ANALYSIS:**
- Match winner odds evaluation
- Set betting opportunities and value
- Total games over/under analysis
- Handicap betting considerations

**RISK FACTORS:**
- Injury concerns and physical limitations
- Weather disruption possibilities
- Motivation and effort level assessment
- Historical upset patterns

**MATCH PREDICTION:**
Detailed prediction with set-by-set breakdown, key moments identification, and confidence levels.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    basketball: {
        name: "Basketball",
        icon: "🏀",
        category: "american",
        title: "Professional Basketball Game Analysis & Betting Strategy",
        prompt: `You are a professional basketball analyst with expertise in NBA, EuroLeague, and international basketball betting. Provide comprehensive analysis for the following game:

**BASKETBALL GAME ANALYSIS FRAMEWORK:**

1. **Team Performance Metrics:**
   - Recent form and win/loss streaks
   - Home court advantage and road performance
   - Offensive and defensive efficiency ratings
   - Pace of play and possession statistics

2. **Player Analysis & Matchups:**
   - Star player availability and injury reports
   - Key positional matchups and advantages
   - Bench depth and rotation patterns
   - Individual player prop opportunities

3. **Statistical Deep Dive:**
   - Points per game averages (home/away splits)
   - Field goal percentages and three-point shooting
   - Rebounding margins and turnover rates
   - Free throw shooting and foul trouble patterns

4. **Tactical Considerations:**
   - Coaching strategies and adjustments
   - Defensive schemes and offensive systems
   - Clutch time performance and execution
   - Timeout usage and game management

5. **Situational Factors:**
   - Back-to-back games and fatigue impact
   - Travel schedule and rest advantages
   - Playoff implications and motivation levels
   - Historical performance in similar situations

6. **Advanced Analytics:**
   - Effective field goal percentage analysis
   - True shooting percentage comparisons
   - Defensive rating and opponent adjustments
   - Plus/minus statistics and lineup efficiency

**BETTING OPPORTUNITIES:**
- Point spread analysis with confidence levels
- Total points over/under evaluation
- Player prop bets with statistical backing
- Live betting strategies and key moments

**RISK ASSESSMENT:**
- Injury report impact and late scratches
- Referee tendencies and foul calling patterns
- Weather conditions (for outdoor games)
- Line movement and sharp money indicators

**GAME PREDICTION:**
Final score prediction with quarter-by-quarter breakdown and key factors for success.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    ice_hockey: {
        name: "Ice Hockey",
        icon: "🏒",
        category: "winter",
        title: "Professional Ice Hockey Game Analysis & Betting Strategy",
        prompt: `You are a professional ice hockey analyst specializing in NHL, international, and European league analysis. Provide comprehensive analysis for the following game:

**ICE HOCKEY GAME ANALYSIS FRAMEWORK:**

1. **Team Form & Performance:**
   - Recent game results and point streaks
   - Home ice advantage and road performance
   - Goals for/against averages and trends
   - Power play and penalty kill effectiveness

2. **Goaltending Analysis:**
   - Starting goaltender confirmation and recent form
   - Save percentage and goals against average
   - Performance against specific opponents
   - Backup goaltender readiness and capability

3. **Special Teams Evaluation:**
   - Power play conversion rates and systems
   - Penalty kill success rates and strategies
   - Short-handed scoring opportunities
   - Discipline and penalty minutes trends

4. **Line Combinations & Matchups:**
   - Forward line chemistry and production
   - Defensive pairings and effectiveness
   - Key player matchups and advantages
   - Depth scoring and role player contributions

5. **Situational Analysis:**
   - Back-to-back game performance
   - Rest advantages and travel factors
   - Playoff race implications and motivation
   - Historical performance in similar situations

6. **Advanced Statistics:**
   - Corsi and Fenwick possession metrics
   - Expected goals (xG) analysis
   - Shot quality and high-danger chances
   - Faceoff win percentages by zone

**BETTING MARKET ANALYSIS:**
- Moneyline value assessment
- Puck line (+/-1.5) evaluation
- Total goals over/under analysis
- Period betting and live wagering opportunities

**KEY FACTORS:**
- Injury reports and lineup changes
- Referee assignments and calling tendencies
- Arena conditions and ice quality
- Divisional rivalry intensity

**GAME PREDICTION:**
Final score prediction with period breakdown, key moments, and overtime/shootout possibilities.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    baseball: {
        name: "Baseball",
        icon: "⚾",
        category: "american",
        title: "Professional Baseball Game Analysis & Betting Strategy",
        prompt: `You are a professional baseball analyst with expertise in MLB, international leagues, and advanced sabermetrics. Provide comprehensive analysis for the following game:

**BASEBALL GAME ANALYSIS FRAMEWORK:**

1. **Starting Pitcher Analysis:**
   - Recent starts and performance trends
   - ERA, WHIP, and strikeout rates
   - Performance against opposing lineup
   - Pitch count limitations and stamina
   - Historical performance at specific ballpark

2. **Bullpen Evaluation:**
   - Closer availability and recent usage
   - Setup men and middle relief effectiveness
   - Bullpen ERA and inherited runner statistics
   - Left/right-handed specialist matchups

3. **Offensive Analysis:**
   - Team batting averages and on-base percentages
   - Power numbers (home runs, slugging percentage)
   - Performance against left/right-handed pitching
   - Clutch hitting and runners in scoring position

4. **Ballpark Factors:**
   - Dimensions and home run tendencies
   - Weather conditions (wind, temperature, humidity)
   - Day vs night game historical performance
   - Surface conditions and field maintenance

5. **Situational Factors:**
   - Rest days and travel considerations
   - Playoff implications and motivation levels
   - Historical performance in series situations
   - Managerial strategies and lineup decisions

6. **Advanced Metrics:**
   - WAR (Wins Above Replacement) analysis
   - BABIP (Batting Average on Balls in Play)
   - FIP (Fielding Independent Pitching)
   - wOBA (Weighted On-Base Average)

**BETTING OPPORTUNITIES:**
- Moneyline value assessment
- Run line (+/-1.5) analysis
- Total runs over/under evaluation
- First 5 innings betting strategies
- Player prop bets (hits, RBIs, strikeouts)

**RISK CONSIDERATIONS:**
- Weather postponement possibilities
- Late lineup changes and scratches
- Umpire strike zone tendencies
- Bullpen availability and overuse

**GAME PREDICTION:**
Final score prediction with inning-by-inning analysis, key matchups, and extra-inning possibilities.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    american_football: {
        name: "American Football",
        icon: "🏈",
        category: "american",
        title: "Professional American Football Game Analysis & Betting Strategy",
        prompt: `You are a professional American football analyst specializing in NFL, college football, and comprehensive game analysis. Provide detailed analysis for the following game:

**AMERICAN FOOTBALL GAME ANALYSIS FRAMEWORK:**

1. **Team Performance Analysis:**
   - Recent form and win/loss trends
   - Home field advantage and road performance
   - Offensive and defensive efficiency rankings
   - Turnover differential and field position

2. **Offensive Unit Evaluation:**
   - Quarterback performance and decision-making
   - Running game effectiveness and offensive line
   - Receiving corps depth and red zone efficiency
   - Play-calling tendencies and situational success

3. **Defensive Unit Assessment:**
   - Pass rush effectiveness and sack rates
   - Secondary coverage and interception rates
   - Run defense and tackle efficiency
   - Third down conversion defense

4. **Special Teams Impact:**
   - Kicking game reliability and range
   - Return game effectiveness and field position
   - Punting and coverage team performance
   - Special teams touchdown potential

5. **Coaching & Strategy:**
   - Head coach tendencies and game management
   - Coordinator strategies and adjustments
   - Timeout usage and clock management
   - Historical performance in similar situations

6. **Advanced Analytics:**
   - Expected Points Added (EPA) analysis
   - Success rate on downs and distances
   - Pressure rate and time to throw
   - Yards after contact and explosive plays

**BETTING MARKET ANALYSIS:**
- Point spread evaluation and line movement
- Total points over/under assessment
- Moneyline value in upset scenarios
- Player prop betting opportunities
- Live betting strategies and key moments

**SITUATIONAL FACTORS:**
- Injury reports and impact players
- Weather conditions and playing surface
- Divisional rivalry intensity and history
- Playoff implications and motivation

**GAME PREDICTION:**
Final score prediction with quarter breakdown, key drives, and critical moments identification.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    // New Sports Added
    rugby: {
        name: "Rugby",
        icon: "🏉",
        category: "traditional",
        title: "Professional Rugby Match Analysis & Betting Strategy",
        prompt: `You are a professional rugby analyst with expertise in Rugby Union, Rugby League, and international competitions. Provide comprehensive analysis for the following match:

**RUGBY MATCH ANALYSIS FRAMEWORK:**

1. **Team Form & Performance:**
   - Recent match results and performance trends
   - Home advantage and away form analysis
   - Points scored/conceded averages
   - Discipline record and penalty counts

2. **Forward Pack Analysis:**
   - Scrum dominance and lineout efficiency
   - Breakdown performance and turnovers
   - Maul effectiveness and driving play
   - Physical conditioning and stamina

3. **Backline Assessment:**
   - Attacking flair and try-scoring ability
   - Defensive organization and line speed
   - Kicking game and territorial control
   - Individual player matchups and pace

4. **Set Piece Evaluation:**
   - Scrum success rates and penalties
   - Lineout throwing accuracy and options
   - Restart effectiveness and field position
   - Penalty and conversion success rates

5. **Tactical Considerations:**
   - Game plan suitability for conditions
   - Substitution patterns and impact players
   - Weather impact on playing style
   - Referee tendencies and interpretations

**BETTING OPPORTUNITIES:**
- Match winner and handicap betting
- Total points over/under analysis
- First try scorer and anytime try markets
- Half-time/full-time double results

**MATCH PREDICTION:**
Score prediction with key moments and tactical battle analysis.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    cricket: {
        name: "Cricket",
        icon: "🏏",
        category: "traditional",
        title: "Professional Cricket Match Analysis & Betting Strategy",
        prompt: `You are a professional cricket analyst specializing in Test, ODI, T20, and domestic cricket analysis. Provide comprehensive analysis for the following match:

**CRICKET MATCH ANALYSIS FRAMEWORK:**

1. **Team Form & Composition:**
   - Recent series and match results
   - Home vs away performance records
   - Team balance and playing XI selection
   - Captain and leadership group form

2. **Batting Analysis:**
   - Top order stability and run rates
   - Middle order depth and finishing ability
   - Power play and death over performance
   - Individual player form and averages

3. **Bowling Assessment:**
   - Pace attack effectiveness and variety
   - Spin bowling options and conditions
   - Death bowling and pressure situations
   - Fielding standards and catching

4. **Pitch & Conditions:**
   - Surface characteristics and expected behavior
   - Weather forecast and impact on play
   - Toss advantage and decision factors
   - Historical scoring patterns at venue

5. **Format-Specific Factors:**
   - Test: Session-by-session analysis
   - ODI: Powerplay and middle overs strategy
   - T20: Death overs and boundary hitting
   - Tournament context and pressure

**BETTING MARKETS:**
- Match winner and series betting
- Total runs and individual scores
- Method of dismissal and bowling figures
- Session and innings betting

**MATCH PREDICTION:**
Detailed prediction with session breakdown and key player performances.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    golf: {
        name: "Golf",
        icon: "⛳",
        category: "precision",
        title: "Professional Golf Tournament Analysis & Betting Strategy",
        prompt: `You are a professional golf analyst with expertise in PGA Tour, European Tour, and major championship analysis. Provide comprehensive analysis for the following tournament:

**GOLF TOURNAMENT ANALYSIS FRAMEWORK:**

1. **Course Analysis:**
   - Layout characteristics and key holes
   - Scoring averages and difficulty factors
   - Weather conditions and wind patterns
   - Green speeds and pin positions

2. **Player Form Assessment:**
   - Recent tournament results and trends
   - Course history and past performances
   - Statistical categories and strengths
   - Current world ranking and momentum

3. **Technical Analysis:**
   - Driving accuracy and distance stats
   - Greens in regulation percentage
   - Putting statistics and short game
   - Sand save percentage and recovery

4. **Course Fit Evaluation:**
   - Player style vs course requirements
   - Length advantages and positioning
   - Weather adaptability and experience
   - Pressure handling in contention

5. **Tournament Dynamics:**
   - Field strength and depth analysis
   - Cut line predictions and positioning
   - Final round scoring conditions
   - Historical winning scores and patterns

**BETTING OPPORTUNITIES:**
- Outright winner and each-way value
- Top 5/10/20 finishing positions
- Head-to-head matchup betting
- Round leader and daily fantasy

**TOURNAMENT PREDICTION:**
Winning score prediction with key contenders and value picks analysis.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    mma: {
        name: "Mixed Martial Arts",
        icon: "🥊",
        category: "combat",
        title: "Professional MMA Fight Analysis & Betting Strategy",
        prompt: `You are a professional MMA analyst with expertise in UFC, Bellator, and international promotions. Provide comprehensive analysis for the following fight:

**MMA FIGHT ANALYSIS FRAMEWORK:**

1. **Fighter Profiles:**
   - Recent fight results and performance
   - Fighting style and technical skills
   - Physical attributes and reach advantages
   - Age, experience, and career trajectory

2. **Technical Breakdown:**
   - Striking accuracy and power
   - Grappling skills and takedown defense
   - Ground game and submission threats
   - Cardio and conditioning levels

3. **Stylistic Matchup:**
   - Striking vs grappling advantages
   - Range and distance management
   - Cage control and pressure fighting
   - Defensive capabilities and vulnerabilities

4. **Mental & Physical Factors:**
   - Motivation and camp preparation
   - Injury history and recovery
   - Weight cutting and hydration
   - Pressure handling and experience

5. **Fight Environment:**
   - Venue and crowd impact
   - Referee assignment and tendencies
   - Weight class and division context
   - Title implications and rankings

**BETTING ANALYSIS:**
- Method of victory predictions
- Round betting and fight duration
- Performance bonuses potential
- Live betting opportunities

**FIGHT PREDICTION:**
Detailed prediction with round-by-round breakdown and finish probability.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    cycling: {
        name: "Cycling",
        icon: "🚴",
        category: "traditional",
        title: "Professional Cycling Race Analysis & Betting Strategy",
        prompt: `You are a professional cycling analyst specializing in Grand Tours, Classics, and stage racing analysis. Provide comprehensive analysis for the following race:

**CYCLING RACE ANALYSIS FRAMEWORK:**

1. **Race Profile Analysis:**
   - Stage characteristics and terrain
   - Elevation profile and key climbs
   - Distance and expected duration
   - Weather conditions and wind factors

2. **Rider Form Assessment:**
   - Recent race results and condition
   - Climbing, sprinting, and time trial abilities
   - Team support and tactical positioning
   - Historical performance on similar terrain

3. **Team Dynamics:**
   - Team strategy and leadership
   - Domestique support and strength
   - Tactical alliances and rivalries
   - Equipment and technical advantages

4. **Race Situation:**
   - General classification implications
   - Points and mountain jersey competitions
   - Breakaway potential and composition
   - Peloton control and chase dynamics

5. **Technical Factors:**
   - Route safety and technical sections
   - Feed zones and tactical opportunities
   - Finish line characteristics
   - Historical race patterns and tactics

**BETTING OPPORTUNITIES:**
- Stage winner and podium positions
- General classification betting
- Breakaway success and composition
- Head-to-head rider matchups

**RACE PREDICTION:**
Stage outcome prediction with tactical scenario analysis and key moments.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    // Politics
    politics: {
        name: "Political Analysis",
        icon: "🗳️",
        category: "politics",
        title: "Professional Political Event Analysis & Forecasting",
        prompt: `You are a professional political analyst with expertise in electoral forecasting, polling analysis, and political betting markets. Provide comprehensive analysis for the following political event:

**POLITICAL ANALYSIS FRAMEWORK:**

1. **Polling Data Analysis:**
   - Recent polling trends and methodology
   - Margin of error and confidence intervals
   - Polling house effects and historical accuracy
   - Likely voter models and turnout predictions

2. **Demographic Breakdown:**
   - Voter registration and turnout patterns
   - Age, gender, and ethnic voting trends
   - Geographic and regional variations
   - Educational and income correlations

3. **Historical Context:**
   - Previous election results and swings
   - Incumbent advantage and approval ratings
   - Economic indicators and voter sentiment
   - Campaign spending and resource allocation

4. **Current Factors:**
   - Recent events and their impact
   - Media coverage and narrative shifts
   - Debate performances and gaffes
   - Third-party candidates and vote splitting

5. **Market Analysis:**
   - Betting odds and implied probabilities
   - Prediction market movements
   - Sharp money and volume indicators
   - Arbitrage opportunities across platforms

**RISK ASSESSMENT:**
- Polling errors and systematic biases
- Turnout model uncertainties
- Late-deciding voter behavior
- External event impacts

**LEGAL DISCLAIMER:**
Political betting may be restricted in your jurisdiction. This analysis is for educational purposes only. Always verify local laws and regulations before placing any wagers.

**FORECAST:**
Probability assessment with confidence intervals and scenario analysis.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    // Enhanced existing sports
    boxing: {
        name: "Boxing",
        icon: "🥊",
        category: "combat",
        title: "Professional Boxing Fight Analysis & Betting Strategy",
        prompt: `You are a professional boxing analyst with expertise in professional boxing across all weight classes and major promotions. Provide comprehensive analysis for the following fight:

**BOXING FIGHT ANALYSIS FRAMEWORK:**

1. **Fighter Technical Analysis:**
   - Boxing style and stance preferences
   - Punch accuracy and power statistics
   - Defensive skills and ring IQ
   - Footwork and ring generalship

2. **Physical Attributes:**
   - Height, reach, and physical advantages
   - Weight cutting and rehydration
   - Age and career mileage factors
   - Injury history and recovery

3. **Recent Form & Opposition:**
   - Last 5 fight results and performances
   - Quality of opposition faced
   - Knockout ratio and finishing ability
   - Activity level and ring rust

4. **Tactical Matchup:**
   - Style vs style analysis
   - Range and distance control
   - Inside vs outside fighting
   - Pressure vs counter-punching

5. **Championship Context:**
   - Title implications and rankings
   - Mandatory defenses and politics
   - Purse and motivation factors
   - Venue and crowd support

**BETTING ANALYSIS:**
- Method of victory probabilities
- Round betting and fight duration
- Knockdown and referee involvement
- Scorecards and decision outcomes

**FIGHT PREDICTION:**
Round-by-round breakdown with key moments and finish probability analysis.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    swimming: {
        name: "Swimming",
        icon: "🏊",
        category: "water",
        title: "Professional Swimming Competition Analysis & Betting Strategy",
        prompt: `You are a professional swimming analyst with expertise in competitive swimming across all strokes and distances. Provide comprehensive analysis for the following competition:

**SWIMMING COMPETITION ANALYSIS FRAMEWORK:**

1. **Swimmer Performance Analysis:**
   - Personal best times and recent form
   - Seasonal progression and training cycles
   - Technique efficiency and stroke mechanics
   - Start and turn execution quality

2. **Event-Specific Factors:**
   - Distance specialization and pacing strategy
   - Stroke technique and efficiency
   - Split time analysis and race tactics
   - Heat placement and lane assignments

3. **Competition Environment:**
   - Pool characteristics and conditions
   - Altitude and temperature effects
   - Competition level and field strength
   - Timing system and measurement accuracy

4. **Physical & Mental Preparation:**
   - Training camp and preparation quality
   - Injury status and recovery
   - Mental toughness and pressure handling
   - Coach-athlete relationship and strategy

5. **Historical Performance:**
   - Previous competition results
   - Championship and major meet experience
   - Relay contributions and team dynamics
   - Age group progression and potential

**BETTING OPPORTUNITIES:**
- Event winner and podium positions
- Record-breaking potential
- Relay team compositions
- Head-to-head swimmer matchups

**COMPETITION PREDICTION:**
Time predictions with medal contenders and breakthrough performance potential.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    volleyball: {
        name: "Volleyball",
        icon: "🏐",
        category: "traditional",
        title: "Professional Volleyball Match Analysis & Betting Strategy",
        prompt: `You are a professional volleyball analyst with expertise in indoor volleyball, beach volleyball, and international competitions. Provide comprehensive analysis for the following match:

**VOLLEYBALL MATCH ANALYSIS FRAMEWORK:**

1. **Team Formation & Strategy:**
   - Starting lineup and rotation patterns
   - Offensive systems and play calling
   - Defensive formations and blocking schemes
   - Serving strategies and pressure points

2. **Player Skill Assessment:**
   - Attack efficiency and kill percentages
   - Serving accuracy and ace potential
   - Blocking effectiveness and timing
   - Defensive skills and dig statistics

3. **Match Dynamics:**
   - Set-by-set performance trends
   - Momentum shifts and timeout usage
   - Substitution patterns and impact players
   - Rally length and point construction

4. **Technical Analysis:**
   - Reception quality and passing accuracy
   - Setting distribution and tempo
   - Attack angles and court coverage
   - Error rates and unforced mistakes

5. **Competitive Context:**
   - Tournament implications and motivation
   - Head-to-head historical results
   - Home court advantage and crowd support
   - Coaching experience and adjustments

**BETTING MARKETS:**
- Match winner and set betting
- Total points over/under
- Individual player performance props
- Set score predictions

**MATCH PREDICTION:**
Set-by-set analysis with key rotation battles and momentum factors.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    league_of_legends: {
        name: "League of Legends",
        icon: "🎮",
        category: "esports",
        title: "Professional League of Legends Match Analysis & Betting Strategy",
        prompt: `You are a professional League of Legends analyst with expertise in competitive LoL across all major regions and tournaments. Provide comprehensive analysis for the following match:

**LEAGUE OF LEGENDS MATCH ANALYSIS FRAMEWORK:**

1. **Team Composition & Meta:**
   - Draft phase strategy and champion priorities
   - Team composition synergy and win conditions
   - Current meta adaptation and innovation
   - Patch changes impact on team strengths

2. **Player Performance Analysis:**
   - Individual player form and champion pools
   - Laning phase statistics and efficiency
   - Team fighting contribution and positioning
   - Clutch performance and pressure handling

3. **Strategic Analysis:**
   - Early game planning and execution
   - Mid game transition and objective control
   - Late game scaling and team fighting
   - Map control and vision warfare

4. **Head-to-Head & Historical:**
   - Previous matchup results and patterns
   - Coaching staff strategies and adaptations
   - Player matchup advantages and weaknesses
   - Tournament context and stakes

5. **Current Form & Momentum:**
   - Recent match results and performance
   - Roster changes and team chemistry
   - Practice and preparation quality
   - Mental state and confidence levels

**BETTING OPPORTUNITIES:**
- Match winner and map betting
- First blood and objective markets
- Player performance props
- Game duration and kill totals

**MATCH PREDICTION:**
Game-by-game analysis with draft predictions and key moment identification.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    },

    formula1: {
        name: "Formula 1",
        icon: "🏎️",
        category: "motor",
        title: "Professional Formula 1 Race Analysis & Betting Strategy",
        prompt: `You are a professional Formula 1 analyst with expertise in race strategy, technical analysis, and championship dynamics. Provide comprehensive analysis for the following race:

**FORMULA 1 RACE ANALYSIS FRAMEWORK:**

1. **Circuit Analysis:**
   - Track characteristics and layout
   - Overtaking opportunities and DRS zones
   - Tire degradation and strategy implications
   - Weather forecast and track evolution

2. **Driver & Team Performance:**
   - Current championship standings
   - Recent race form and qualifying pace
   - Car performance and development trajectory
   - Driver skill at specific circuit type

3. **Technical Considerations:**
   - Car setup and aerodynamic efficiency
   - Power unit reliability and performance
   - Tire compound selection and strategy
   - Fuel load and race pace simulation

4. **Strategic Elements:**
   - Pit stop strategy and timing windows
   - Safety car probability and impact
   - Grid position and starting tire choice
   - Team orders and championship implications

5. **Race Day Factors:**
   - Starting grid analysis and turn 1 scenarios
   - Weather conditions and tire selection
   - Driver motivation and pressure situations
   - Historical race patterns and statistics

**BETTING MARKETS:**
- Race winner and podium positions
- Fastest lap and pole position
- Driver head-to-head matchups
- Constructor championship points

**RACE PREDICTION:**
Detailed race strategy analysis with key overtaking moments and championship implications.

Please analyze: [SPECIFIC_MATCH] on [SPECIFIC_DATE] in [SPECIFIC_LEAGUE] ([SPECIFIC_SEASON])`
    }
};

// Enhanced application state
let currentSport = null;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let copyCount = JSON.parse(localStorage.getItem('copyCount') || '{}');
let effectiveness = JSON.parse(localStorage.getItem('effectiveness') || '{}');
let currentFilter = 'all';
let searchTerm = '';
let isLightTheme = localStorage.getItem('theme') === 'light';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    renderSportsGrid();
    setupEventListeners();
    setupIntersectionObserver();
});

function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (isLightTheme) {
        document.body.classList.add('light-theme');
        themeIcon.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        isLightTheme = !isLightTheme;
        document.body.classList.toggle('light-theme');
        themeIcon.textContent = isLightTheme ? '☀️' : '🌙';
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    });
}

function renderSportsGrid() {
    const grid = document.getElementById('sports-grid');
    const noResults = document.getElementById('no-results');
    
    const filteredSports = Object.entries(sportsData).filter(([key, sport]) => {
        const matchesFilter = currentFilter === 'all' || 
                            currentFilter === 'favorites' && favorites.includes(key) ||
                            sport.category === currentFilter;
        const matchesSearch = !searchTerm || 
                            sport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            sport.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    
    if (filteredSports.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = filteredSports.map(([key, sport]) => {
        const isFavorite = favorites.includes(key);
        const count = copyCount[key] || 0;
        const effectivenessValue = effectiveness[key] || 75;
        
        return `
            <div class="sport-card p-6 rounded-2xl cursor-pointer text-center relative transition-all duration-500 hover:shadow-2xl animated" 
                 data-sport="${key}" 
                 onclick="showPrompt('${key}')">
                <div class="favorite-star ${isFavorite ? 'is-favorite' : ''}" 
                     onclick="event.stopPropagation(); toggleFavorite('${key}')" 
                     title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                    ⭐
                </div>
                ${count > 0 ? `<div class="copy-counter absolute top-3 left-3 bg-blue-500/80 text-white text-xs font-bold px-2 py-1 rounded-full">${count}</div>` : ''}
                <div class="text-4xl lg:text-5xl mb-4">${sport.icon}</div>
                <h3 class="font-bold text-lg lg:text-xl mb-2 text-white">${sport.name}</h3>
                <div class="text-sm text-slate-400 mb-3 capitalize">${sport.category.replace('_', ' ')}</div>
                <div class="effectiveness-bar w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300" 
                         style="width: ${effectivenessValue}%"></div>
                </div>
                <div class="text-xs text-slate-400">${effectivenessValue}% Effective</div>
            </div>
        `;
    }).join('');
}

function showPrompt(sportKey) {
    currentSport = sportKey;
    const sport = sportsData[sportKey];
    const container = document.getElementById('prompt-container');
    
    // Update content
    document.getElementById('prompt-title').textContent = sport.title;
    document.getElementById('prompt-category').textContent = `Category: ${sport.category.replace('_', ' ').toUpperCase()}`;
    document.getElementById('prompt-text').value = sport.prompt;
    document.getElementById('sport-icon').textContent = sport.icon;
    
    // Update stats
    document.getElementById('effectiveness-display').textContent = `${effectiveness[sportKey] || 75}%`;
    document.getElementById('copy-count-display').textContent = copyCount[sportKey] || 0;
    
    // Update effectiveness slider
    const slider = document.getElementById('effectiveness-slider');
    slider.value = effectiveness[sportKey] || 75;
    document.getElementById('effectiveness-value').textContent = `${slider.value}%`;
    
    // Update favorite button
    const isFavorite = favorites.includes(sportKey);
    const favoriteBtn = document.getElementById('favorite-button');
    const favoriteIcon = document.getElementById('favorite-icon');
    const favoriteText = document.getElementById('favorite-text');
    
    if (isFavorite) {
        favoriteBtn.classList.add('bg-yellow-500/30', 'border-yellow-400');
        favoriteBtn.classList.remove('bg-yellow-600/20', 'border-yellow-500/50');
        favoriteIcon.textContent = '⭐';
        favoriteText.textContent = 'Favorited';
    } else {
        favoriteBtn.classList.remove('bg-yellow-500/30', 'border-yellow-400');
        favoriteBtn.classList.add('bg-yellow-600/20', 'border-yellow-500/50');
        favoriteIcon.textContent = '☆';
        favoriteText.textContent = 'Add Favorite';
    }
    
    // Show specific match options for supported sports
    const supportedSports = ['football', 'tennis', 'basketball', 'ice_hockey', 'baseball', 'american_football'];
    const specificOptions = document.getElementById('specific-match-options');
    if (supportedSports.includes(sportKey)) {
        specificOptions.classList.remove('hidden');
    } else {
        specificOptions.classList.add('hidden');
    }
    
    // Show container with animation
    container.classList.remove('prompt-hidden');
    container.classList.add('prompt-visible');
    
    // Scroll to prompt
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update selected card
    document.querySelectorAll('.sport-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-sport="${sportKey}"]`).classList.add('selected');
}

function copyPrompt() {
    const promptText = document.getElementById('prompt-text');
    let finalPrompt = promptText.value;
    
    // Replace placeholders with specific values if provided
    const specificMatch = document.getElementById('specific-match-input').value;
    const specificDate = document.getElementById('specific-date-input').value;
    const specificLeague = document.getElementById('specific-league-input').value;
    const specificSeason = document.getElementById('specific-season-input').value;
    
    if (specificMatch) {
        finalPrompt = finalPrompt.replace('[SPECIFIC_MATCH]', specificMatch);
    }
    if (specificDate) {
        finalPrompt = finalPrompt.replace('[SPECIFIC_DATE]', specificDate);
    }
    if (specificLeague) {
        finalPrompt = finalPrompt.replace('[SPECIFIC_LEAGUE]', specificLeague);
    }
    if (specificSeason) {
        finalPrompt = finalPrompt.replace('[SPECIFIC_SEASON]', specificSeason);
    }
    
    // Remove any remaining placeholders
    finalPrompt = finalPrompt.replace(/\[SPECIFIC_[A-Z_]+\]/g, '[Please specify]');
    
    navigator.clipboard.writeText(finalPrompt).then(() => {
        // Update copy count
        copyCount[currentSport] = (copyCount[currentSport] || 0) + 1;
        localStorage.setItem('copyCount', JSON.stringify(copyCount));
        
        // Show feedback
        const feedback = document.getElementById('copy-feedback');
        const copyText = document.getElementById('copy-text');
        
        feedback.style.opacity = '1';
        copyText.textContent = 'Copied!';
        
        setTimeout(() => {
            feedback.style.opacity = '0';
            copyText.textContent = 'Copy Prompt';
        }, 2000);
        
        // Update display
        document.getElementById('copy-count-display').textContent = copyCount[currentSport];
        renderSportsGrid();
    });
}

function toggleFavorite(sportKey) {
    const index = favorites.indexOf(sportKey);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(sportKey);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderSportsGrid();
    
    // Update favorite button if this sport is currently shown
    if (currentSport === sportKey) {
        const isFavorite = favorites.includes(sportKey);
        const favoriteBtn = document.getElementById('favorite-button');
        const favoriteIcon = document.getElementById('favorite-icon');
        const favoriteText = document.getElementById('favorite-text');
        
        if (isFavorite) {
            favoriteBtn.classList.add('bg-yellow-500/30', 'border-yellow-400');
            favoriteBtn.classList.remove('bg-yellow-600/20', 'border-yellow-500/50');
            favoriteIcon.textContent = '⭐';
            favoriteText.textContent = 'Favorited';
        } else {
            favoriteBtn.classList.remove('bg-yellow-500/30', 'border-yellow-400');
            favoriteBtn.classList.add('bg-yellow-600/20', 'border-yellow-500/50');
            favoriteIcon.textContent = '☆';
            favoriteText.textContent = 'Add Favorite';
        }
    }
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderSportsGrid();
    });
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.category;
            
            // Update active button
            document.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('category-badge');
                btn.classList.add('bg-slate-700/80', 'hover:bg-slate-600/80');
            });
            e.target.classList.add('category-badge');
            e.target.classList.remove('bg-slate-700/80', 'hover:bg-slate-600/80');
            
            renderSportsGrid();
        });
    });
    
    // Close prompt
    document.getElementById('close-prompt-button').addEventListener('click', () => {
        const container = document.getElementById('prompt-container');
        container.classList.remove('prompt-visible');
        container.classList.add('prompt-hidden');
        
        // Remove selected state
        document.querySelectorAll('.sport-card').forEach(card => {
            card.classList.remove('selected');
        });
    });
    
    // Copy button
    document.getElementById('copy-button').addEventListener('click', copyPrompt);
    
    // Favorite button
    document.getElementById('favorite-button').addEventListener('click', () => {
        if (currentSport) {
            toggleFavorite(currentSport);
        }
    });
    
    // Effectiveness slider
    const effectivenessSlider = document.getElementById('effectiveness-slider');
    effectivenessSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('effectiveness-value').textContent = `${value}%`;
        document.getElementById('effectiveness-display').textContent = `${value}%`;
        
        if (currentSport) {
            effectiveness[currentSport] = parseInt(value);
            localStorage.setItem('effectiveness', JSON.stringify(effectiveness));
            renderSportsGrid();
        }
    });
    
    // Specific match options
    setupSpecificMatchOptions();
    
    // Edit functionality
    setupEditFunctionality();
    
    // Tools functionality
    setupToolsFunctionality();
}

function setupSpecificMatchOptions() {
    const checkboxes = [
        'specific-match-checkbox',
        'specific-date-checkbox', 
        'specific-league-checkbox',
        'specific-season-checkbox'
    ];
    
    checkboxes.forEach(checkboxId => {
        const checkbox = document.getElementById(checkboxId);
        const containerId = checkboxId.replace('checkbox', 'input-container');
        const container = document.getElementById(containerId);
        
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        });
    });
}

function setupEditFunctionality() {
    const editButton = document.getElementById('edit-button');
    const addButton = document.getElementById('add-new-prompt-btn');
    const modal = document.getElementById('edit-modal');
    const form = document.getElementById('edit-form');
    const cancelButton = document.getElementById('cancel-edit-btn');
    
    editButton.addEventListener('click', () => {
        if (currentSport) {
            openEditModal(currentSport);
        }
    });
    
    addButton.addEventListener('click', () => {
        openEditModal(null);
    });
    
    cancelButton.addEventListener('click', closeEditModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeEditModal();
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        savePrompt();
    });
}

function openEditModal(sportKey) {
    const modal = document.getElementById('edit-modal');
    const title = document.getElementById('modal-title');
    const form = document.getElementById('edit-form');
    
    if (sportKey) {
        // Edit existing
        const sport = sportsData[sportKey];
        title.textContent = 'Edit Prompt';
        document.getElementById('edit-key').value = sportKey;
        document.getElementById('edit-name').value = sport.name;
        document.getElementById('edit-icon').value = sport.icon;
        document.getElementById('edit-category').value = sport.category;
        document.getElementById('edit-prompt-title').value = sport.title;
        document.getElementById('edit-prompt').value = sport.prompt;
    } else {
        // Add new
        title.textContent = 'Add New Prompt';
        form.reset();
        document.getElementById('edit-key').value = '';
    }
    
    modal.classList.add('visible');
}

function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    modal.classList.remove('visible');
}

function savePrompt() {
    const key = document.getElementById('edit-key').value || generateKey();
    const name = document.getElementById('edit-name').value;
    const icon = document.getElementById('edit-icon').value;
    const category = document.getElementById('edit-category').value;
    const title = document.getElementById('edit-prompt-title').value;
    const prompt = document.getElementById('edit-prompt').value;
    
    sportsData[key] = {
        name,
        icon,
        category,
        title,
        prompt
    };
    
    // Save to localStorage
    localStorage.setItem('customSportsData', JSON.stringify(sportsData));
    
    closeEditModal();
    renderSportsGrid();
    
    // Show the updated prompt if it was being edited
    if (currentSport === key) {
        showPrompt(key);
    }
}

function generateKey() {
    return 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function setupToolsFunctionality() {
    // Export functionality
    document.getElementById('export-btn').addEventListener('click', exportData);
    document.getElementById('export-btn-inline').addEventListener('click', exportData);
    
    // Import functionality
    document.getElementById('import-input').addEventListener('change', importData);
    document.getElementById('import-input-inline').addEventListener('change', importData);
    
    // Reset functionality
    document.getElementById('reset-btn').addEventListener('click', resetData);
    document.getElementById('reset-btn-inline').addEventListener('click', resetData);
}

function exportData() {
    const data = {
        sportsData,
        favorites,
        copyCount,
        effectiveness,
        exportDate: new Date().toISOString(),
        version: '2.0'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sports-betting-prompts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.sportsData) {
                Object.assign(sportsData, data.sportsData);
                localStorage.setItem('customSportsData', JSON.stringify(sportsData));
            }
            if (data.favorites) {
                favorites = data.favorites;
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
            if (data.copyCount) {
                copyCount = data.copyCount;
                localStorage.setItem('copyCount', JSON.stringify(copyCount));
            }
            if (data.effectiveness) {
                effectiveness = data.effectiveness;
                localStorage.setItem('effectiveness', JSON.stringify(effectiveness));
            }
            
            renderSportsGrid();
            showAlert('Success', 'Data imported successfully!', [
                { text: 'OK', class: 'bg-green-600 hover:bg-green-500' }
            ]);
        } catch (error) {
            showAlert('Error', 'Failed to import data. Please check the file format.', [
                { text: 'OK', class: 'bg-red-600 hover:bg-red-500' }
            ]);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

function resetData() {
    showAlert(
        'Reset Confirmation',
        'This will restore all original prompts and delete all custom prompts, favorites, and statistics. This action cannot be undone.',
        [
            { text: 'Cancel', class: 'bg-slate-600 hover:bg-slate-500' },
            { 
                text: 'Reset All Data', 
                class: 'bg-red-600 hover:bg-red-500',
                action: () => {
                    localStorage.removeItem('customSportsData');
                    localStorage.removeItem('favorites');
                    localStorage.removeItem('copyCount');
                    localStorage.removeItem('effectiveness');
                    
                    favorites = [];
                    copyCount = {};
                    effectiveness = {};
                    
                    // Reset to original data
                    location.reload();
                }
            }
        ]
    );
}

function showAlert(title, message, buttons) {
    const modal = document.getElementById('alert-modal');
    const titleEl = document.getElementById('alert-modal-title');
    const messageEl = document.getElementById('alert-modal-message');
    const buttonsEl = document.getElementById('alert-modal-buttons');
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    buttonsEl.innerHTML = buttons.map(button => 
        `<button class="px-6 py-2 rounded-lg transition ${button.class}" onclick="${button.action ? 'this.clickAction()' : 'closeAlert()'}">
            ${button.text}
        </button>`
    ).join('');
    
    // Add click actions
    buttons.forEach((button, index) => {
        if (button.action) {
            buttonsEl.children[index].clickAction = button.action;
        }
    });
    
    modal.classList.add('visible');
}

function closeAlert() {
    const modal = document.getElementById('alert-modal');
    modal.classList.remove('visible');
}

function setupIntersectionObserver() {
    const sentinel = document.getElementById('load-more-sentinel');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Could implement lazy loading here if needed
            }
        });
    });
    
    observer.observe(sentinel);
}

// Load custom data on startup
const customData = localStorage.getItem('customSportsData');
if (customData) {
    try {
        const parsed = JSON.parse(customData);
        Object.assign(sportsData, parsed);
    } catch (error) {
        console.error('Failed to load custom data:', error);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const promptContainer = document.getElementById('prompt-container');
        const editModal = document.getElementById('edit-modal');
        const alertModal = document.getElementById('alert-modal');
        
        if (alertModal.classList.contains('visible')) {
            closeAlert();
        } else if (editModal.classList.contains('visible')) {
            closeEditModal();
        } else if (promptContainer.classList.contains('prompt-visible')) {
            document.getElementById('close-prompt-button').click();
        }
    }
    
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'c' && currentSport) {
            e.preventDefault();
            copyPrompt();
        }
        if (e.key === 'f') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
    }
});

// Mobile optimizations
if (window.innerWidth <= 640) {
    const addButton = document.getElementById('add-new-prompt-btn');
    addButton.classList.add('fab');
    addButton.innerHTML = '➕';
}