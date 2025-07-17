// Enhanced Sports Betting Prompt Library - English Version
class PromptLibrary {
    constructor() {
        this.currentSport = null;
        this.currentFilter = 'all';
        this.isLightTheme = false;
        this.visibleItems = 12;
        this.itemsPerLoad = 12;
        this.copyCount = {};
        
        this.defaultPrompts = {
            football: {
                name: "Football (Soccer)",
                icon: "⚽",
                category: "traditional",
                title: "Professional Football Match Analysis",
                prompt: `Act as a professional football analyst with 15+ years of experience in sports betting and match prediction. Analyze the upcoming match with comprehensive detail:

**MATCH ANALYSIS FRAMEWORK:**

1. **Team Form Analysis:**
   - Last 10 matches performance for both teams
   - Home vs Away form comparison
   - Recent head-to-head record (last 5 meetings)
   - Current league position and points gap

2. **Key Player Assessment:**
   - Injury reports and player availability
   - Top scorers and assist providers form
   - Goalkeeper performance statistics
   - Key player suspensions or returns

3. **Tactical Analysis:**
   - Formation preferences and tactical setup
   - Playing style compatibility/clash
   - Set piece effectiveness (corners, free kicks)
   - Defensive vulnerabilities and attacking strengths

4. **Statistical Deep Dive:**
   - Goals scored/conceded averages
   - Shots on target percentage
   - Possession statistics and passing accuracy
   - Corner kicks and yellow/red card averages

5. **Market Analysis:**
   - Current betting odds interpretation
   - Value betting opportunities identification
   - Over/Under goals market assessment
   - Both teams to score probability

6. **Weather & External Factors:**
   - Weather conditions impact
   - Stadium atmosphere and crowd support
   - Travel fatigue considerations
   - Referee tendencies and historical decisions

**BETTING RECOMMENDATIONS:**
Provide specific betting suggestions with:
- Confidence level (1-10)
- Stake recommendation (% of bankroll)
- Alternative betting options
- Risk management advice

**FINAL PREDICTION:**
- Exact score prediction with reasoning
- Match outcome probability percentages
- Key events likely to occur
- Timeline of potential goals/cards

Format your analysis professionally with clear sections and data-driven insights. Include recent examples and statistical evidence to support all predictions.`
            },
            
            tennis: {
                name: "Tennis",
                icon: "🎾",
                category: "traditional",
                title: "Professional Tennis Match Analysis",
                prompt: `Act as a professional tennis analyst and former ATP/WTA tour expert. Provide comprehensive analysis for the upcoming tennis match:

**PLAYER ANALYSIS FRAMEWORK:**

1. **Current Form Assessment:**
   - Last 10 matches win/loss record
   - Recent tournament performances
   - Surface-specific form (hard court/clay/grass)
   - Current ranking and ranking trajectory

2. **Head-to-Head Analysis:**
   - Historical matchup record
   - Surface-specific H2H performance
   - Recent meetings analysis
   - Playing style matchup dynamics

3. **Physical & Mental State:**
   - Injury concerns and fitness level
   - Match load and fatigue factors
   - Pressure handling in big moments
   - Confidence level assessment

4. **Technical Analysis:**
   - Serve statistics (1st serve %, aces, double faults)
   - Return game effectiveness
   - Baseline vs net play preferences
   - Break point conversion rates

5. **Surface & Conditions:**
   - Surface suitability for each player
   - Weather conditions impact (wind, temperature)
   - Court speed and bounce characteristics
   - Indoor vs outdoor considerations

6. **Statistical Breakdown:**
   - Winners to unforced errors ratio
   - Average rally length preferences
   - Tiebreak performance history
   - Set completion percentages

**BETTING MARKET ANALYSIS:**
- Match winner odds evaluation
- Set betting opportunities
- Games handicap assessment
- Over/Under total games analysis
- Special markets (aces, double faults, etc.)

**TACTICAL PREDICTIONS:**
- Key tactical battles to watch
- Potential momentum shifts
- Critical game/set scenarios
- Player adaptation strategies

**FINAL RECOMMENDATION:**
- Match outcome prediction with confidence %
- Recommended betting strategy
- Value betting opportunities
- Risk management approach

Provide detailed reasoning for all predictions with statistical backing and recent performance examples.`
            },
            
            basketball: {
                name: "Basketball",
                icon: "🏀",
                category: "traditional",
                title: "Professional Basketball Game Analysis",
                prompt: `Act as a professional basketball analyst with extensive NBA/EuroLeague experience. Analyze the upcoming game with comprehensive detail:

**TEAM ANALYSIS FRAMEWORK:**

1. **Current Form & Momentum:**
   - Last 10 games performance (W/L record)
   - Home vs Away splits
   - Recent scoring trends and defensive efficiency
   - Back-to-back game considerations

2. **Head-to-Head Analysis:**
   - Season series record
   - Historical matchup trends
   - Scoring patterns in previous meetings
   - Key player performances in H2H

3. **Key Player Assessment:**
   - Star player availability and form
   - Injury report impact analysis
   - Bench depth and rotation strength
   - Matchup advantages/disadvantages

4. **Statistical Deep Dive:**
   - Offensive rating and pace of play
   - Defensive efficiency metrics
   - Rebounding differentials
   - Turnover rates and fast break points

5. **Tactical Analysis:**
   - Offensive system effectiveness
   - Defensive schemes and weaknesses
   - Three-point shooting trends
   - Paint dominance and interior play

6. **Situational Factors:**
   - Rest days and travel schedule
   - Motivation levels (playoff implications)
   - Coaching adjustments and strategies
   - Referee crew tendencies

**BETTING MARKET EVALUATION:**
- Point spread analysis and value
- Over/Under total points assessment
- Player prop betting opportunities
- Quarter/half betting strategies
- Alternative spread options

**PERFORMANCE PREDICTIONS:**
- Expected scoring distribution
- Key statistical categories forecast
- Potential game flow scenarios
- Critical momentum moments

**FINAL RECOMMENDATIONS:**
- Game outcome prediction with confidence level
- Best betting value identification
- Bankroll management suggestions
- Live betting opportunities to watch

Support all analysis with recent statistics, advanced metrics, and situational examples from similar games.`
            },
            
            ice_hockey: {
                name: "Ice Hockey",
                icon: "🏒",
                category: "winter",
                title: "Professional Ice Hockey Game Analysis",
                prompt: `Act as a professional ice hockey analyst with extensive NHL/international hockey experience. Provide comprehensive analysis for the upcoming game:

**TEAM ANALYSIS FRAMEWORK:**

1. **Current Form Assessment:**
   - Last 10 games record and performance
   - Home ice advantage statistics
   - Recent goal scoring and defensive trends
   - Power play and penalty kill efficiency

2. **Goaltending Analysis:**
   - Starting goaltender confirmation
   - Recent save percentage and GAA
   - Performance against similar opponents
   - Backup goaltender readiness

3. **Head-to-Head History:**
   - Season series record
   - Historical scoring patterns
   - Special teams performance in matchups
   - Overtime/shootout tendencies

4. **Line Combinations & Depth:**
   - Top line chemistry and production
   - Defensive pairings effectiveness
   - Fourth line energy and impact
   - Injury replacements and call-ups

5. **Special Teams Analysis:**
   - Power play conversion rates
   - Penalty kill success percentage
   - Short-handed scoring opportunities
   - Discipline and penalty minutes

6. **Situational Factors:**
   - Back-to-back game impact
   - Travel and rest considerations
   - Playoff race implications
   - Rivalry intensity factors

**STATISTICAL BREAKDOWN:**
- Shots on goal averages
- Faceoff win percentages
- Hits and blocked shots trends
- Plus/minus differentials

**BETTING MARKET ANALYSIS:**
- Moneyline value assessment
- Puck line (+/-1.5) evaluation
- Over/Under total goals analysis
- Period betting opportunities
- Player prop markets (goals, assists, shots)

**TACTICAL PREDICTIONS:**
- Expected game tempo and style
- Key matchup battles
- Special teams impact forecast
- Potential game-changing moments

**FINAL RECOMMENDATIONS:**
- Game outcome prediction with reasoning
- Best betting value opportunities
- Risk management strategy
- Live betting scenarios to monitor

Include advanced hockey analytics, recent performance trends, and situational examples to support all predictions.`
            },
            
            baseball: {
                name: "Baseball",
                icon: "⚾",
                category: "traditional",
                title: "Professional Baseball Game Analysis",
                prompt: `Act as a professional baseball analyst with extensive MLB experience and sabermetric expertise. Analyze the upcoming game with comprehensive detail:

**PITCHING MATCHUP ANALYSIS:**

1. **Starting Pitcher Assessment:**
   - Recent form and velocity trends
   - ERA, WHIP, and strikeout rates
   - Performance vs opposing team historically
   - Pitch count and workload considerations

2. **Bullpen Evaluation:**
   - Closer and setup man availability
   - Recent usage and fatigue levels
   - Matchup advantages vs opposing hitters
   - Bullpen depth and reliability

**OFFENSIVE ANALYSIS:**

1. **Lineup Construction:**
   - Key hitter availability and form
   - Platoon advantages (L/R matchups)
   - Recent offensive production trends
   - Clutch hitting with RISP statistics

2. **Team Offensive Metrics:**
   - Team batting average and OPS
   - Home run and extra-base hit trends
   - Stolen base success and aggression
   - Strikeout and walk rates

**SITUATIONAL FACTORS:**

1. **Ballpark Considerations:**
   - Stadium dimensions and characteristics
   - Weather conditions (wind, temperature)
   - Day vs night game implications
   - Surface conditions and maintenance

2. **Team Dynamics:**
   - Recent series performance
   - Travel and rest factors
   - Managerial tendencies and strategies
   - Injury report and roster moves

**ADVANCED ANALYTICS:**
- Expected statistics (xBA, xSLG, xERA)
- Defensive efficiency metrics
- Base running and situational hitting
- Leverage index and high-pressure performance

**BETTING MARKET EVALUATION:**
- Moneyline value assessment
- Run line (+/-1.5) analysis
- Over/Under total runs evaluation
- First 5 innings betting opportunities
- Player prop markets (hits, RBIs, strikeouts)

**GAME FLOW PREDICTIONS:**
- Expected scoring patterns by inning
- Bullpen usage scenarios
- Key at-bat situations
- Potential extra-inning factors

**FINAL RECOMMENDATIONS:**
- Game outcome prediction with confidence level
- Best betting value identification
- Bankroll allocation suggestions
- In-game betting opportunities

Support analysis with recent statistics, advanced metrics, and historical performance data against similar opponents.`
            },
            
            american_football: {
                name: "American Football",
                icon: "🏈",
                category: "traditional",
                title: "Professional American Football Game Analysis",
                prompt: `Act as a professional NFL analyst with extensive experience in game planning and statistical analysis. Provide comprehensive analysis for the upcoming game:

**TEAM ANALYSIS FRAMEWORK:**

1. **Offensive Unit Assessment:**
   - Quarterback performance and decision-making
   - Running game effectiveness and O-line health
   - Receiving corps depth and matchup advantages
   - Red zone efficiency and scoring trends

2. **Defensive Unit Evaluation:**
   - Pass rush effectiveness and sack rates
   - Secondary coverage and interception rates
   - Run defense and tackle efficiency
   - Third down conversion defense

3. **Special Teams Impact:**
   - Kicking game reliability (FG/XP accuracy)
   - Punt and kick return capabilities
   - Coverage team effectiveness
   - Field position battle importance

**SITUATIONAL ANALYSIS:**

1. **Recent Form & Momentum:**
   - Last 5 games performance trends
   - Home field advantage statistics
   - Divisional vs non-divisional performance
   - Prime time game history

2. **Injury Report Impact:**
   - Key player availability assessment
   - Depth chart implications
   - Position group vulnerabilities
   - Return timeline for injured stars

3. **Weather & Environmental:**
   - Weather conditions impact on game plan
   - Dome vs outdoor performance splits
   - Temperature and wind considerations
   - Field condition and surface type

**ADVANCED METRICS:**
- DVOA (Defense-adjusted Value Over Average)
- Expected points added (EPA) per play
- Success rate on downs and distances
- Pressure rate and time to throw

**COACHING & STRATEGY:**
- Head coach tendencies and adjustments
- Coordinator strengths and weaknesses
- Game script predictions
- Timeout usage and clock management

**BETTING MARKET ANALYSIS:**
- Point spread value assessment
- Over/Under total points evaluation
- First half/quarter betting opportunities
- Player prop markets (passing yards, rushing, etc.)
- Alternative spreads and totals

**KEY MATCHUPS:**
- Individual position battles
- Scheme vs scheme advantages
- Potential mismatch exploitations
- X-factor players to watch

**FINAL PREDICTIONS:**
- Final score prediction with reasoning
- Confidence level on spread and total
- Best betting value opportunities
- Game flow and momentum scenarios

Include recent performance data, advanced analytics, and historical context to support all predictions and recommendations.`
            },
            
            // New Sports
            rugby: {
                name: "Rugby",
                icon: "🏉",
                category: "traditional",
                title: "Professional Rugby Match Analysis",
                prompt: `Act as a professional rugby analyst with extensive experience in both Rugby Union and Rugby League. Analyze the upcoming match with comprehensive detail:

**TEAM ANALYSIS FRAMEWORK:**

1. **Forward Pack Assessment:**
   - Scrum dominance and lineout efficiency
   - Breakdown/ruck performance
   - Maul effectiveness and driving power
   - Front row stability and hooker accuracy

2. **Backline Evaluation:**
   - Half-back combination effectiveness
   - Center partnership and defensive alignment
   - Wing pace and finishing ability
   - Fullback positioning and counter-attack threat

3. **Set Piece Analysis:**
   - Lineout success rates and variations
   - Scrum penalty count and dominance
   - Restart effectiveness (22m dropouts, kick-offs)
   - Penalty and conversion kicking accuracy

**TACTICAL CONSIDERATIONS:**

1. **Playing Style Assessment:**
   - Territory vs possession game preference
   - Kicking strategy and aerial contest
   - Offloading game and continuity
   - Defensive line speed and pressure

2. **Weather & Pitch Conditions:**
   - Ground conditions impact on handling
   - Wind direction and kicking game
   - Temperature effects on player performance
   - Referee interpretation tendencies

**STATISTICAL BREAKDOWN:**
- Try scoring and conceding averages
- Penalty count and discipline record
- Possession and territory percentages
- Tackle success rates and missed tackles

**BETTING MARKET EVALUATION:**
- Match winner and handicap analysis
- Total points over/under assessment
- First try scorer opportunities
- Half-time/full-time double results
- Player performance markets

**FINAL RECOMMENDATIONS:**
- Match outcome prediction with confidence
- Key betting value identification
- Risk management approach
- Live betting opportunities to monitor

Support analysis with recent form, head-to-head records, and statistical trends from similar conditions.`
            },
            
            cricket: {
                name: "Cricket",
                icon: "🏏",
                category: "traditional",
                title: "Professional Cricket Match Analysis",
                prompt: `Act as a professional cricket analyst with extensive knowledge of Test, ODI, and T20 formats. Analyze the upcoming match with comprehensive detail:

**MATCH FORMAT CONSIDERATIONS:**
- Format-specific strategies and approaches
- Over limitations and powerplay impacts
- DLS method implications if applicable
- Tournament context and qualification scenarios

**TEAM ANALYSIS FRAMEWORK:**

1. **Batting Unit Assessment:**
   - Top order stability and form
   - Middle order depth and finishing ability
   - Power hitters and boundary scoring rates
   - Recent run scoring trends and averages

2. **Bowling Attack Evaluation:**
   - Pace vs spin bowling balance
   - New ball and death bowling specialists
   - Economy rates and wicket-taking ability
   - Bowling depth and all-rounder contributions

3. **Fielding Standards:**
   - Catching efficiency and drop rates
   - Ground fielding and run-out opportunities
   - Wicket-keeping standards and stumping rates
   - Captain's field placement strategies

**PITCH & CONDITIONS:**

1. **Surface Analysis:**
   - Pitch type and expected behavior
   - Historical scoring patterns at venue
   - Deterioration expectations over match duration
   - Toss advantage and decision implications

2. **Weather Factors:**
   - Rain probability and DLS scenarios
   - Wind conditions affecting bowling
   - Dew factor in day-night matches
   - Temperature impact on player performance

**STATISTICAL INSIGHTS:**
- Recent head-to-head records
- Venue-specific performance history
- Player vs player matchup statistics
- Format-specific team strengths/weaknesses

**BETTING MARKET ANALYSIS:**
- Match winner odds evaluation
- Total runs over/under assessment
- Top batsman/bowler markets
- Method of dismissal betting
- Session-by-session betting (Test matches)

**KEY MATCHUPS:**
- Batsman vs bowler historical performance
- Spin vs pace effectiveness on surface
- Left-hand vs right-hand combinations
- Pressure situation performers

**FINAL PREDICTIONS:**
- Match outcome with detailed reasoning
- Expected total runs/wickets
- Key player performance forecasts
- Best betting value opportunities

Include recent form analysis, pitch reports, and weather forecasts to support all predictions.`
            },
            
            golf: {
                name: "Golf",
                icon: "⛳",
                category: "precision",
                title: "Professional Golf Tournament Analysis",
                prompt: `Act as a professional golf analyst with extensive PGA Tour and major championship experience. Analyze the upcoming tournament with comprehensive detail:

**COURSE ANALYSIS:**

1. **Course Setup & Conditions:**
   - Course length and par breakdown
   - Green speeds and pin position difficulty
   - Rough thickness and penalty areas
   - Weather forecast impact on scoring

2. **Key Course Features:**
   - Driving accuracy requirements
   - Approach shot precision demands
   - Putting surface characteristics
   - Risk/reward hole analysis

**PLAYER FORM ASSESSMENT:**

1. **Recent Performance:**
   - Last 5 tournament results and trends
   - Strokes gained statistics breakdown
   - Putting performance and short game
   - Driving distance and accuracy metrics

2. **Course History:**
   - Previous performance at venue
   - Similar course type success rates
   - Major championship experience
   - Pressure situation handling

**STATISTICAL ANALYSIS:**
- Strokes gained: off-the-tee, approach, around-green, putting
- Scoring average in similar conditions
- Cut-making percentage and consistency
- Final round scoring average under pressure

**FIELD STRENGTH EVALUATION:**
- World ranking representation
- Recent major winners presence
- Home course advantage players
- Dark horse candidates identification

**BETTING MARKET ANALYSIS:**
- Outright winner odds assessment
- Top 5/10 finish value betting
- Head-to-head matchup evaluation
- First round leader opportunities
- Cut-making probability analysis

**WEATHER & CONDITIONS:**
- Wind direction and strength impact
- Temperature effects on ball flight
- Rain probability and course softening
- Optimal tee time advantages

**FINAL RECOMMENDATIONS:**
- Tournament winner prediction with reasoning
- Best value betting opportunities
- Each-way betting strategies
- Daily fantasy golf lineup suggestions
- Live betting scenarios to monitor

Support analysis with recent statistical trends, course history data, and weather-adjusted performance metrics.`
            },
            
            mma: {
                name: "Mixed Martial Arts",
                icon: "🥊",
                category: "combat",
                title: "Professional MMA Fight Analysis",
                prompt: `Act as a professional MMA analyst with extensive knowledge of fighting techniques, training camps, and fight dynamics. Analyze the upcoming fight with comprehensive detail:

**FIGHTER ANALYSIS FRAMEWORK:**

1. **Fighting Style Assessment:**
   - Primary discipline background (boxing, wrestling, BJJ, etc.)
   - Striking technique and power analysis
   - Grappling skills and takedown defense
   - Submission game and ground control

2. **Physical Attributes:**
   - Reach and height advantages/disadvantages
   - Weight cutting history and impact
   - Cardio and endurance levels
   - Injury history and recovery status

3. **Recent Form & Activity:**
   - Last 5 fight results and performances
   - Time since last fight (ring rust factors)
   - Training camp reports and preparation
   - Opponent quality and progression

**TACTICAL BREAKDOWN:**

1. **Matchup Analysis:**
   - Style vs style advantages
   - Potential fight path scenarios
   - Cage control and positioning
   - Clinch work effectiveness

2. **Mental Game:**
   - Pressure handling and experience
   - Comeback ability and heart
   - Game planning and adaptability
   - Confidence and momentum factors

**STATISTICAL INSIGHTS:**
- Significant strikes landed/absorbed per minute
- Takedown accuracy and defense percentages
- Submission attempt rates and success
- Fight finish rates and methods

**BETTING MARKET EVALUATION:**
- Fight winner odds analysis
- Method of victory betting (KO/TKO, submission, decision)
- Round betting and fight duration
- Performance bonuses probability
- Prop betting opportunities

**FIGHT PREDICTION FACTORS:**
- Expected fight pace and tempo
- Key moments and turning points
- Referee impact and rule enforcement
- Corner advice and between-round adjustments

**FINAL RECOMMENDATIONS:**
- Fight outcome prediction with confidence level
- Best betting value identification
- Risk management for volatile sport
- Live betting opportunities during fight

Include recent fight footage analysis, training camp insights, and historical performance data against similar opponents.`
            },
            
            cycling: {
                name: "Cycling",
                icon: "🚴",
                category: "traditional",
                title: "Professional Cycling Race Analysis",
                prompt: `Act as a professional cycling analyst with extensive knowledge of Grand Tours, classics, and stage racing. Analyze the upcoming race with comprehensive detail:

**RACE PROFILE ANALYSIS:**

1. **Stage/Route Characteristics:**
   - Distance and elevation profile
   - Climb categorization and difficulty
   - Sprint opportunities and intermediate points
   - Technical descents and dangerous sections

2. **Weather Conditions:**
   - Wind direction and crosswind potential
   - Temperature and precipitation forecast
   - Road surface conditions
   - Visibility and safety factors

**RIDER FORM ASSESSMENT:**

1. **Current Condition:**
   - Recent race results and performance
   - Training block completion and peaking
   - Injury status and recovery timeline
   - Team role and tactical positioning

2. **Specialization Match:**
   - Climber vs sprinter vs all-rounder suitability
   - Time trial capabilities if applicable
   - Breakaway success history
   - Grand Tour vs one-day race preference

**TEAM DYNAMICS:**
- Team strength and depth analysis
- Domestique support quality
- Tactical approach and race strategy
- Leadership hierarchy and protected riders

**STATISTICAL BREAKDOWN:**
- Power output estimates and climbing speeds
- Sprint finish success rates
- Breakaway success probability
- Historical performance at similar races

**BETTING MARKET ANALYSIS:**
- Stage winner odds evaluation
- General classification impact betting
- Points/mountains jersey implications
- Head-to-head rider matchups
- Team classification opportunities

**TACTICAL PREDICTIONS:**
- Expected race scenario development
- Key selection points and attacks
- Sprint train formations
- Breakaway composition and success chances

**FINAL RECOMMENDATIONS:**
- Stage outcome prediction with reasoning
- Best betting value opportunities
- Multi-stage tournament strategy
- Live betting scenarios during race

Support analysis with power data, historical race results, and current form indicators from recent competitions.`
            },
            
            // Politics
            politics: {
                name: "Political Analysis",
                icon: "🗳️",
                category: "politics",
                title: "Professional Political Event Analysis",
                prompt: `Act as a professional political analyst with extensive experience in electoral politics, polling analysis, and political forecasting. Analyze the upcoming political event with comprehensive detail:

**ELECTORAL ANALYSIS FRAMEWORK:**

1. **Polling Data Assessment:**
   - Recent polling trends and methodology
   - Margin of error and confidence intervals
   - Polling house bias adjustments
   - Likely voter model accuracy

2. **Demographic Breakdown:**
   - Key voting bloc preferences
   - Turnout expectations by group
   - Geographic regional analysis
   - Age, gender, and education splits

3. **Historical Context:**
   - Previous election results comparison
   - Swing state/district identification
   - Incumbent advantage/disadvantage factors
   - Electoral cycle patterns

**CAMPAIGN DYNAMICS:**

1. **Candidate Assessment:**
   - Campaign organization strength
   - Fundraising and resource allocation
   - Message effectiveness and resonance
   - Debate performance and public appearances

2. **External Factors:**
   - Economic indicators impact
   - Current events influence
   - Media coverage analysis
   - Third-party candidate effects

**PREDICTIVE MODELING:**
- Electoral college/seat projections
- Popular vote margin estimates
- Swing state probability analysis
- Turnout model scenarios

**BETTING MARKET EVALUATION:**
- Election winner odds analysis
- Electoral vote total betting
- State-by-state outcome markets
- Margin of victory predictions
- Special proposition betting

**RISK FACTORS:**
- Polling error historical ranges
- Late-deciding voter impact
- Weather and logistics effects
- Legal challenges and recounts

**FINAL PREDICTIONS:**
- Election outcome forecast with confidence intervals
- Key states/races to watch
- Potential upset scenarios
- Best betting value opportunities

**IMPORTANT DISCLAIMER:**
This analysis is for educational and entertainment purposes only. Political betting may not be legal in all jurisdictions. Always verify local laws and regulations before placing any political bets.

Support analysis with recent polling data, historical election results, and current political climate indicators.`
            },
            
            // Existing sports with enhanced prompts
            esports_lol: {
                name: "League of Legends",
                icon: "🎮",
                category: "esports",
                title: "Professional LoL Match Analysis",
                prompt: `Act as a professional League of Legends analyst with extensive knowledge of competitive play, meta analysis, and team dynamics. Analyze the upcoming match with comprehensive detail:

**TEAM COMPOSITION ANALYSIS:**

1. **Current Meta Understanding:**
   - Patch version and recent changes impact
   - Champion priority picks and bans
   - Role meta shifts and power picks
   - Item build optimizations

2. **Player Form Assessment:**
   - Individual player recent performance
   - Champion pool depth and comfort picks
   - Mechanical skill and consistency
   - Clutch performance in high-pressure situations

**STRATEGIC FRAMEWORK:**

1. **Early Game Analysis:**
   - Jungle pathing and gank preferences
   - Lane matchup advantages/disadvantages
   - First objective priority (Dragon/Herald)
   - Vision control and ward placement patterns

2. **Mid-Late Game Execution:**
   - Team fighting coordination
   - Objective control and macro play
   - Split push vs team fight preference
   - Baron and Elder Dragon execution

**STATISTICAL BREAKDOWN:**
- Average game time and win conditions
- First blood and early game statistics
- Objective control rates (Dragons, Barons, Towers)
- Team fight win rates and damage distribution

**BETTING MARKET ANALYSIS:**
- Match winner odds evaluation
- Map handicap betting opportunities
- Total maps over/under assessment
- First blood and first tower markets
- Player performance prop betting

**HEAD-TO-HEAD ANALYSIS:**
- Recent matchup history
- Player vs player lane performance
- Draft phase tendencies
- Coaching staff strategic approaches

**FINAL RECOMMENDATIONS:**
- Match outcome prediction with reasoning
- Best betting value identification
- Live betting opportunities during draft
- Series length and map predictions

Include recent tournament performance, patch adaptation speed, and team synergy analysis to support predictions.`
            },
            
            formula1: {
                name: "Formula 1",
                icon: "🏎️",
                category: "motor",
                title: "Professional F1 Race Analysis",
                prompt: `Act as a professional Formula 1 analyst with extensive knowledge of racing strategy, technical regulations, and driver performance. Analyze the upcoming race with comprehensive detail:

**CIRCUIT ANALYSIS:**

1. **Track Characteristics:**
   - Circuit layout and key corner analysis
   - Overtaking opportunities and DRS zones
   - Tire degradation and compound selection
   - Weather forecast and track evolution

2. **Historical Performance:**
   - Previous race results at circuit
   - Qualifying vs race pace correlation
   - Safety car probability and impact
   - Pit stop strategy effectiveness

**DRIVER & TEAM ASSESSMENT:**

1. **Current Form:**
   - Recent race and qualifying performance
   - Championship standings implications
   - Driver confidence and momentum
   - Team development trajectory

2. **Car Performance:**
   - Aerodynamic package efficiency
   - Power unit reliability and performance
   - Tire management capabilities
   - Setup optimization for circuit

**STRATEGIC CONSIDERATIONS:**
- Qualifying position importance
- Pit stop window analysis
- Tire strategy scenarios
- Weather contingency planning

**BETTING MARKET EVALUATION:**
- Race winner odds assessment
- Podium finish betting opportunities
- Fastest lap and pole position markets
- Constructor championship implications
- Head-to-head driver matchups

**RACE PREDICTION FACTORS:**
- Expected race pace hierarchy
- Strategic battle scenarios
- Potential safety car triggers
- Championship fight implications

**FINAL RECOMMENDATIONS:**
- Race outcome prediction with detailed reasoning
- Best betting value opportunities
- Qualifying vs race betting strategy
- Live betting scenarios during race

Support analysis with telemetry data, practice session times, and historical circuit performance patterns.`
            },
            
            // Enhanced existing sports
            boxing: {
                name: "Boxing",
                icon: "🥊",
                category: "combat",
                title: "Professional Boxing Fight Analysis",
                prompt: `Act as a professional boxing analyst with extensive knowledge of fighting styles, training methods, and fight dynamics. Analyze the upcoming bout with comprehensive detail:

**FIGHTER ANALYSIS FRAMEWORK:**

1. **Fighting Style Assessment:**
   - Orthodox vs southpaw stance advantages
   - Offensive style (pressure, counter-puncher, boxer-puncher)
   - Defensive capabilities and head movement
   - Ring IQ and tactical adaptability

2. **Physical Attributes:**
   - Reach and height advantages
   - Hand speed and power analysis
   - Footwork and mobility assessment
   - Chin durability and recovery ability

3. **Recent Activity & Form:**
   - Last 5 fight performances
   - Training camp reports and sparring
   - Weight making history and impact
   - Injury concerns and recovery status

**TECHNICAL BREAKDOWN:**
- Punch output and accuracy statistics
- Power punch percentage and knockdown rates
- Defensive metrics (punches avoided, blocked)
- Round-by-round scoring tendencies

**MATCHUP ANALYSIS:**
- Style vs style advantages
- Historical performance against similar opponents
- Age and experience factors
- Pressure vs boxing ability

**BETTING MARKET EVALUATION:**
- Fight winner odds analysis
- Method of victory betting (KO, TKO, Decision)
- Round betting and fight duration
- Knockdown and point deduction props
- Over/under total rounds

**CHAMPIONSHIP IMPLICATIONS:**
- Title significance and motivation
- Mandatory challenger vs voluntary defense
- Career-defining moment analysis
- Future fight implications

**FINAL RECOMMENDATIONS:**
- Fight outcome prediction with confidence level
- Best betting value identification
- Round-by-round breakdown
- Live betting opportunities during fight

Include recent fight footage analysis, training footage insights, and historical performance against similar fighting styles.`
            },
            
            swimming: {
                name: "Swimming",
                icon: "🏊",
                category: "water",
                title: "Professional Swimming Competition Analysis",
                prompt: `Act as a professional swimming analyst with extensive knowledge of competitive swimming, technique analysis, and performance prediction. Analyze the upcoming competition with comprehensive detail:

**SWIMMER PERFORMANCE ANALYSIS:**

1. **Current Season Form:**
   - Recent competition times and improvements
   - Personal best progression timeline
   - Training cycle and peaking strategy
   - Competition schedule and fatigue factors

2. **Technical Assessment:**
   - Stroke technique efficiency
   - Start and turn execution quality
   - Race strategy and pacing patterns
   - Finishing strength and sprint capability

3. **Event Specialization:**
   - Distance preference and versatility
   - Stroke specialty and secondary events
   - Individual medley capabilities
   - Relay contribution potential

**COMPETITION CONDITIONS:**
- Pool specifications and altitude effects
- Water temperature and lane assignments
- Competition timing and session scheduling
- Qualifying standards and pressure factors

**STATISTICAL ANALYSIS:**
- Season best times comparison
- Historical performance at venue
- Head-to-head racing records
- Championship meet performance history

**BETTING MARKET EVALUATION:**
- Event winner odds assessment
- Medal position betting opportunities
- Time achievement markets (under/over)
- Head-to-head swimmer matchups
- Relay team performance betting

**PERFORMANCE PREDICTION FACTORS:**
- Taper and training periodization
- Mental preparation and competition experience
- Equipment and technology advantages
- Weather and environmental conditions

**FINAL RECOMMENDATIONS:**
- Event outcome predictions with reasoning
- Best betting value opportunities
- Multi-event strategy considerations
- Live betting during competition

Support analysis with recent time progressions, technique video analysis, and historical performance data at similar competitions.`
            },
            
            volleyball: {
                name: "Volleyball",
                icon: "🏐",
                category: "traditional",
                title: "Professional Volleyball Match Analysis",
                prompt: `Act as a professional volleyball analyst with extensive knowledge of indoor and beach volleyball tactics, player roles, and team dynamics. Analyze the upcoming match with comprehensive detail:

**TEAM FORMATION ANALYSIS:**

1. **Player Position Assessment:**
   - Outside hitter effectiveness and versatility
   - Middle blocker presence and quick attack
   - Setter distribution and leadership
   - Libero passing and defensive coverage

2. **Rotation Strengths:**
   - Serving rotation effectiveness
   - Blocking combinations and timing
   - Passing formation stability
   - Substitution patterns and impact

**TACTICAL FRAMEWORK:**

1. **Offensive System:**
   - Attack tempo and combination plays
   - Setter hand preference and tendencies
   - Back row attack utilization
   - Transition offense efficiency

2. **Defensive Scheme:**
   - Block-defense system coordination
   - Dig and coverage patterns
   - Serve receive formation
   - Emergency defense capabilities

**STATISTICAL BREAKDOWN:**
- Attack percentage and kill efficiency
- Serving aces and error rates
- Block solo and assist statistics
- Passing efficiency ratings

**MATCH CONDITIONS:**
- Court surface and net height specifications
- Crowd support and home advantage
- Tournament stage and pressure factors
- Rest time between matches

**BETTING MARKET ANALYSIS:**
- Match winner odds evaluation
- Set handicap betting opportunities
- Total sets over/under assessment
- First set winner predictions
- Player performance prop markets

**KEY MATCHUPS:**
- Setter vs setter battle
- Outside hitter effectiveness
- Middle blocker dominance
- Serving pressure impact

**FINAL RECOMMENDATIONS:**
- Match outcome prediction with set scores
- Best betting value identification
- Live betting opportunities during sets
- Tournament progression implications

Include recent match footage analysis, statistical trends, and head-to-head performance history.`
            }
        };
        
        this.prompts = { ...this.defaultPrompts };
        this.loadFromStorage();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderSports();
        this.setupIntersectionObserver();
        this.loadTheme();
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.filterSports(e.target.value);
        });

        // Category filters
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveFilter(e.target.dataset.category);
            });
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Prompt container interactions
        document.getElementById('close-prompt-button').addEventListener('click', () => {
            this.hidePrompt();
        });

        document.getElementById('copy-button').addEventListener('click', () => {
            this.copyPrompt();
        });

        document.getElementById('edit-button').addEventListener('click', () => {
            this.editCurrentPrompt();
        });

        // Modal interactions
        document.getElementById('cancel-edit-btn').addEventListener('click', () => {
            this.hideModal();
        });

        document.getElementById('edit-form').addEventListener('submit', (e) => {
            this.savePrompt(e);
        });

        // Add new prompt button
        document.getElementById('add-new-prompt-btn').addEventListener('click', () => {
            this.showAddPromptModal();
        });

        // Tool buttons
        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportPrompts();
        });

        document.getElementById('import-input').addEventListener('change', (e) => {
            this.importPrompts(e);
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
            this.showResetConfirmation();
        });

        // Inline tool buttons
        document.getElementById('export-btn-inline').addEventListener('click', () => {
            this.exportPrompts();
        });

        document.getElementById('import-input-inline').addEventListener('change', (e) => {
            this.importPrompts(e);
        });

        document.getElementById('reset-btn-inline').addEventListener('click', () => {
            this.showResetConfirmation();
        });

        // Effectiveness slider
        document.getElementById('effectiveness-slider').addEventListener('input', (e) => {
            document.getElementById('effectiveness-value').textContent = e.target.value + '%';
        });

        // Specific match options
        document.getElementById('specific-match-checkbox').addEventListener('change', (e) => {
            document.getElementById('match-input-container').classList.toggle('hidden', !e.target.checked);
        });

        document.getElementById('specific-date-checkbox').addEventListener('change', (e) => {
            document.getElementById('date-input-container').classList.toggle('hidden', !e.target.checked);
        });

        document.getElementById('specific-league-checkbox').addEventListener('change', (e) => {
            document.getElementById('league-input-container').classList.toggle('hidden', !e.target.checked);
        });

        document.getElementById('specific-season-checkbox').addEventListener('change', (e) => {
            document.getElementById('season-input-container').classList.toggle('hidden', !e.target.checked);
        });

        // Close modal when clicking outside
        document.getElementById('edit-modal').addEventListener('click', (e) => {
            if (e.target.id === 'edit-modal') {
                this.hideModal();
            }
        });

        document.getElementById('alert-modal').addEventListener('click', (e) => {
            if (e.target.id === 'alert-modal') {
                this.hideAlertModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hidePrompt();
                this.hideModal();
                this.hideAlertModal();
            }
        });
    }

    renderSports() {
        const grid = document.getElementById('sports-grid');
        const filteredSports = this.getFilteredSports();
        const visibleSports = filteredSports.slice(0, this.visibleItems);
        
        grid.innerHTML = '';
        
        visibleSports.forEach((sport, index) => {
            const card = this.createSportCard(sport);
            card.style.animationDelay = `${index * 0.1}s`;
            grid.appendChild(card);
        });

        // Show/hide no results message
        document.getElementById('no-results').style.display = 
            filteredSports.length === 0 ? 'block' : 'none';
    }

    createSportCard(sport) {
        const card = document.createElement('div');
        card.className = 'sport-card p-4 rounded-2xl text-center cursor-pointer relative animated';
        card.dataset.sport = sport.key;
        
        const isFavorite = this.getFavorites().includes(sport.key);
        const copyCount = this.copyCount[sport.key] || 0;
        
        card.innerHTML = `
            <div class="favorite-star ${isFavorite ? 'is-favorite' : ''}" data-sport="${sport.key}">⭐</div>
            ${copyCount > 0 ? `<div class="copy-counter absolute top-2 left-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1 font-bold">${copyCount}</div>` : ''}
            <div class="text-4xl mb-3">${sport.icon}</div>
            <h3 class="font-semibold text-sm lg:text-base">${sport.name}</h3>
        `;

        // Add click handlers
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('favorite-star')) {
                this.showPrompt(sport.key);
            }
        });

        card.querySelector('.favorite-star').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(sport.key);
        });

        return card;
    }

    getFilteredSports() {
        let sports = Object.entries(this.prompts).map(([key, data]) => ({
            key,
            ...data
        }));

        // Apply category filter
        if (this.currentFilter === 'favorites') {
            const favorites = this.getFavorites();
            sports = sports.filter(sport => favorites.includes(sport.key));
        } else if (this.currentFilter !== 'all') {
            sports = sports.filter(sport => sport.category === this.currentFilter);
        }

        // Apply search filter
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        if (searchTerm) {
            sports = sports.filter(sport => 
                sport.name.toLowerCase().includes(searchTerm) ||
                sport.category.toLowerCase().includes(searchTerm)
            );
        }

        return sports;
    }

    setActiveFilter(category) {
        this.currentFilter = category;
        this.visibleItems = this.itemsPerLoad;
        
        // Update button states
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.classList.remove('category-badge');
            btn.classList.add('bg-slate-700', 'hover:bg-slate-600');
        });
        
        const activeBtn = document.querySelector(`[data-category="${category}"]`);
        activeBtn.classList.add('category-badge');
        activeBtn.classList.remove('bg-slate-700', 'hover:bg-slate-600');
        
        this.renderSports();
    }

    filterSports(searchTerm) {
        this.visibleItems = this.itemsPerLoad;
        this.renderSports();
    }

    showPrompt(sportKey) {
        const sport = this.prompts[sportKey];
        if (!sport) return;

        this.currentSport = sportKey;
        
        // Update prompt display
        document.getElementById('prompt-title').textContent = sport.title;
        document.getElementById('prompt-category').textContent = `Category: ${sport.category}`;
        document.getElementById('sport-icon').textContent = sport.icon;
        
        // Show specific match options for supported sports
        const supportedSports = ['football', 'tennis', 'basketball', 'ice_hockey', 'baseball', 'american_football'];
        const showSpecificOptions = supportedSports.includes(sportKey);
        document.getElementById('specific-match-options').classList.toggle('hidden', !showSpecificOptions);
        
        this.updatePromptText();
        
        // Update card selection
        document.querySelectorAll('.sport-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-sport="${sportKey}"]`).classList.add('selected');
        
        // Show prompt container
        const container = document.getElementById('prompt-container');
        container.classList.remove('prompt-hidden');
        container.classList.add('prompt-visible');
        
        // Scroll to prompt
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Show inline tools
        document.getElementById('tools-inline').style.display = 'flex';
    }

    updatePromptText() {
        const sport = this.prompts[this.currentSport];
        let promptText = sport.prompt;
        
        // Apply specific match customizations
        if (document.getElementById('specific-match-checkbox').checked) {
            const matchInput = document.getElementById('specific-match-input').value;
            if (matchInput) {
                promptText = promptText.replace(/upcoming match|upcoming game|upcoming fight|upcoming race|upcoming competition/gi, 
                    `${matchInput} match`);
            }
        }
        
        if (document.getElementById('specific-date-checkbox').checked) {
            const dateInput = document.getElementById('specific-date-input').value;
            if (dateInput) {
                const date = new Date(dateInput);
                const formattedDate = date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                promptText = `SPECIFIC DATE ANALYSIS: ${formattedDate}\n\n${promptText}`;
            }
        }
        
        if (document.getElementById('specific-league-checkbox').checked) {
            const leagueInput = document.getElementById('specific-league-input').value;
            if (leagueInput) {
                promptText = promptText.replace(/league|tournament|competition/gi, leagueInput);
            }
        }
        
        if (document.getElementById('specific-season-checkbox').checked) {
            const seasonInput = document.getElementById('specific-season-input').value;
            if (seasonInput) {
                promptText = `SEASON CONTEXT: ${seasonInput}\n\n${promptText}`;
            }
        }
        
        document.getElementById('prompt-text').value = promptText;
    }

    hidePrompt() {
        const container = document.getElementById('prompt-container');
        container.classList.remove('prompt-visible');
        container.classList.add('prompt-hidden');
        
        // Clear selections
        document.querySelectorAll('.sport-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Hide inline tools
        document.getElementById('tools-inline').style.display = 'none';
        
        this.currentSport = null;
    }

    async copyPrompt() {
        const promptText = document.getElementById('prompt-text').value;
        
        try {
            await navigator.clipboard.writeText(promptText);
            
            // Update copy count
            if (this.currentSport) {
                this.copyCount[this.currentSport] = (this.copyCount[this.currentSport] || 0) + 1;
                this.saveToStorage();
                this.renderSports(); // Re-render to show updated count
            }
            
            // Show feedback
            const feedback = document.getElementById('copy-feedback');
            const copyText = document.getElementById('copy-text');
            
            feedback.classList.remove('opacity-0');
            feedback.classList.add('opacity-100');
            copyText.textContent = 'Copied!';
            
            setTimeout(() => {
                feedback.classList.remove('opacity-100');
                feedback.classList.add('opacity-0');
                copyText.textContent = 'Copy';
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy to clipboard. Please try again.');
        }
    }

    editCurrentPrompt() {
        if (!this.currentSport) return;
        this.showEditModal(this.currentSport);
    }

    showEditModal(sportKey) {
        const sport = this.prompts[sportKey];
        
        document.getElementById('modal-title').textContent = sportKey ? 'Edit Prompt' : 'Add New Prompt';
        document.getElementById('edit-key').value = sportKey || '';
        document.getElementById('edit-name').value = sport?.name || '';
        document.getElementById('edit-icon').value = sport?.icon || '';
        document.getElementById('edit-category').value = sport?.category || 'traditional';
        document.getElementById('edit-prompt-title').value = sport?.title || '';
        document.getElementById('edit-prompt').value = sport?.prompt || '';
        
        this.showModal();
    }

    showAddPromptModal() {
        this.showEditModal(null);
    }

    showModal() {
        document.getElementById('edit-modal').classList.add('visible');
    }

    hideModal() {
        document.getElementById('edit-modal').classList.remove('visible');
    }

    savePrompt(e) {
        e.preventDefault();
        
        const key = document.getElementById('edit-key').value || 
                   document.getElementById('edit-name').value.toLowerCase().replace(/\s+/g, '_');
        
        const promptData = {
            name: document.getElementById('edit-name').value,
            icon: document.getElementById('edit-icon').value,
            category: document.getElementById('edit-category').value,
            title: document.getElementById('edit-prompt-title').value,
            prompt: document.getElementById('edit-prompt').value
        };
        
        this.prompts[key] = promptData;
        this.saveToStorage();
        this.renderSports();
        this.hideModal();
        
        // If editing current prompt, update display
        if (this.currentSport === key) {
            this.showPrompt(key);
        }
    }

    toggleFavorite(sportKey) {
        const favorites = this.getFavorites();
        const index = favorites.indexOf(sportKey);
        
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(sportKey);
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.renderSports();
    }

    getFavorites() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    exportPrompts() {
        const data = {
            prompts: this.prompts,
            favorites: this.getFavorites(),
            copyCount: this.copyCount,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sports-betting-prompts-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importPrompts(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                if (data.prompts) {
                    this.prompts = { ...this.prompts, ...data.prompts };
                }
                if (data.favorites) {
                    localStorage.setItem('favorites', JSON.stringify(data.favorites));
                }
                if (data.copyCount) {
                    this.copyCount = { ...this.copyCount, ...data.copyCount };
                }
                
                this.saveToStorage();
                this.renderSports();
                alert('Prompts imported successfully!');
            } catch (error) {
                alert('Error importing file. Please check the file format.');
            }
        };
        reader.readAsText(file);
        
        // Reset file input
        e.target.value = '';
    }

    showResetConfirmation() {
        this.showAlert(
            'Reset Confirmation',
            'Are you sure you want to reset all prompts to default? This will delete all custom prompts and cannot be undone.',
            [
                {
                    text: 'Cancel',
                    class: 'bg-slate-600 hover:bg-slate-500',
                    action: () => this.hideAlertModal()
                },
                {
                    text: 'Reset',
                    class: 'bg-red-600 hover:bg-red-500',
                    action: () => {
                        this.resetToDefaults();
                        this.hideAlertModal();
                    }
                }
            ]
        );
    }

    resetToDefaults() {
        this.prompts = { ...this.defaultPrompts };
        this.copyCount = {};
        localStorage.removeItem('favorites');
        this.saveToStorage();
        this.renderSports();
        this.hidePrompt();
        alert('All prompts have been reset to defaults.');
    }

    showAlert(title, message, buttons) {
        document.getElementById('alert-modal-title').textContent = title;
        document.getElementById('alert-modal-message').textContent = message;
        
        const buttonContainer = document.getElementById('alert-modal-buttons');
        buttonContainer.innerHTML = '';
        
        buttons.forEach(button => {
            const btn = document.createElement('button');
            btn.textContent = button.text;
            btn.className = `px-6 py-2 rounded-lg transition ${button.class}`;
            btn.addEventListener('click', button.action);
            buttonContainer.appendChild(btn);
        });
        
        document.getElementById('alert-modal').classList.add('visible');
    }

    hideAlertModal() {
        document.getElementById('alert-modal').classList.remove('visible');
    }

    toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
        document.body.classList.toggle('light-theme', this.isLightTheme);
        document.getElementById('theme-icon').textContent = this.isLightTheme ? '☀️' : '🌙';
        localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.isLightTheme = true;
            document.body.classList.add('light-theme');
            document.getElementById('theme-icon').textContent = '☀️';
        }
    }

    setupIntersectionObserver() {
        const sentinel = document.getElementById('load-more-sentinel');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.loadMoreItems();
            }
        });
        observer.observe(sentinel);
    }

    loadMoreItems() {
        const filteredSports = this.getFilteredSports();
        if (this.visibleItems < filteredSports.length) {
            this.visibleItems += this.itemsPerLoad;
            this.renderSports();
        }
    }

    saveToStorage() {
        localStorage.setItem('customPrompts', JSON.stringify(this.prompts));
        localStorage.setItem('copyCount', JSON.stringify(this.copyCount));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('customPrompts');
        if (saved) {
            this.prompts = { ...this.defaultPrompts, ...JSON.parse(saved) };
        }
        
        const savedCopyCount = localStorage.getItem('copyCount');
        if (savedCopyCount) {
            this.copyCount = JSON.parse(savedCopyCount);
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PromptLibrary();
});