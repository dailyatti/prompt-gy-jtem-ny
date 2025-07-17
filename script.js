// Professional Sports Betting & Analysis Prompt Library - Complete Version
// All Hungarian features + New English enhancements

// Enhanced sports data with all original sports + 5 new ones + politics
const sportsData = {
    // Traditional Sports
    football: {
        name: "Football (Soccer)",
        icon: "⚽",
        category: "traditional",
        promptTitle: "Professional Football Match Analysis & Betting Strategy",
        prompt: `You are a professional football analyst and betting strategist with 15+ years of experience in European and international football markets. Provide a comprehensive pre-match analysis for the specified match.

**MATCH ANALYSIS FRAMEWORK:**

**1. TEAM FORM & RECENT PERFORMANCE**
- Last 5 matches analysis (wins/draws/losses)
- Goals scored vs conceded trends
- Home/away form comparison
- Performance against similar opposition
- Injury list and key player availability

**2. HEAD-TO-HEAD ANALYSIS**
- Historical record between teams (last 10 meetings)
- Goals patterns in previous encounters
- Home/away advantage in H2H
- Recent tactical battles and outcomes

**3. TACTICAL ANALYSIS**
- Formation preferences and tactical setup
- Key player roles and responsibilities
- Pressing intensity and defensive structure
- Set-piece strengths and weaknesses
- Counter-attacking vs possession-based approach

**4. STATISTICAL BREAKDOWN**
- xG (Expected Goals) analysis
- Shot conversion rates
- Defensive actions per game
- Possession statistics and passing accuracy
- Corner kicks and set-piece frequency

**5. MARKET ANALYSIS & VALUE BETS**
- 1X2 market assessment with probability
- Over/Under goals analysis (0.5, 1.5, 2.5, 3.5)
- Both Teams to Score probability
- Asian Handicap recommendations
- Player props and cards markets

**6. RISK ASSESSMENT**
- Weather conditions impact
- Referee tendencies (cards, penalties)
- Motivation factors (league position, European qualification)
- Squad rotation possibilities
- Psychological factors and pressure

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- League: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide specific odds recommendations with confidence levels (1-10) and stake suggestions (1-5 units). Include alternative betting strategies for different risk appetites.`,
        effectiveness: 88,
        copyCount: 0,
        isFavorite: false
    },

    tennis: {
        name: "Tennis",
        icon: "🎾",
        category: "traditional",
        promptTitle: "Professional Tennis Match Analysis & Betting Strategy",
        prompt: `You are a professional tennis analyst and betting expert specializing in ATP, WTA, and Grand Slam tournaments. Provide comprehensive pre-match analysis for the specified tennis match.

**TENNIS MATCH ANALYSIS FRAMEWORK:**

**1. PLAYER FORM & RECENT PERFORMANCE**
- Last 10 matches record and performance trends
- Recent tournament results and progression
- Physical condition and injury concerns
- Match fitness and playing rhythm assessment

**2. HEAD-TO-HEAD ANALYSIS**
- Career H2H record and recent meetings
- Performance on current surface type
- Set and game win percentages in H2H
- Psychological edge and mental toughness

**3. SURFACE & CONDITIONS ANALYSIS**
- Surface specialization (Hard/Clay/Grass)
- Court speed and bounce characteristics
- Weather conditions (wind, temperature, humidity)
- Indoor vs outdoor performance differences

**4. PLAYING STYLE MATCHUP**
- Serve and return statistics
- Baseline vs net play preferences
- Forehand/backhand strengths and weaknesses
- Break point conversion rates
- Tiebreak performance records

**5. STATISTICAL BREAKDOWN**
- First serve percentage and ace rates
- Double fault tendencies
- Winners to unforced errors ratio
- Break points saved/converted percentages
- Average match duration and set scores

**6. BETTING MARKET ANALYSIS**
- Match winner probability assessment
- Set betting opportunities (2-0, 2-1 predictions)
- Total games over/under analysis
- Handicap betting value
- First set winner and early break predictions

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Tournament: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include specific recommendations for live betting opportunities and in-play strategies based on momentum shifts and tactical adjustments.`,
        effectiveness: 85,
        copyCount: 0,
        isFavorite: false
    },

    basketball: {
        name: "Basketball",
        icon: "🏀",
        category: "american",
        promptTitle: "Professional Basketball Analysis & Betting Strategy",
        prompt: `You are a professional basketball analyst specializing in NBA, EuroLeague, and international basketball betting markets. Provide comprehensive pre-game analysis for the specified basketball match.

**BASKETBALL ANALYSIS FRAMEWORK:**

**1. TEAM PERFORMANCE ANALYSIS**
- Recent form and win/loss streaks
- Home court advantage statistics
- Offensive and defensive efficiency ratings
- Pace of play and possessions per game
- Bench depth and rotation patterns

**2. PLAYER ANALYSIS & MATCHUPS**
- Star player performance and availability
- Key matchup advantages/disadvantages
- Injury report impact on rotations
- Player props opportunities (points, rebounds, assists)
- Foul trouble tendencies and impact

**3. STATISTICAL BREAKDOWN**
- Field goal percentages (2PT, 3PT, FT)
- Rebounding margins and second-chance points
- Turnover rates and fast break opportunities
- Assists to turnover ratios
- Points in the paint vs perimeter scoring

**4. TACTICAL ANALYSIS**
- Offensive systems and play calling
- Defensive schemes and switching patterns
- Three-point shooting volume and efficiency
- Pick and roll effectiveness
- Late-game execution and clutch performance

**5. SITUATIONAL FACTORS**
- Back-to-back games and fatigue
- Travel schedule and time zone changes
- Motivation levels and playoff implications
- Coaching adjustments and timeout usage
- Historical performance in similar situations

**6. BETTING MARKET OPPORTUNITIES**
- Point spread analysis and value assessment
- Total points over/under with pace considerations
- Quarter/half betting opportunities
- Player props and performance markets
- Live betting strategies and momentum plays

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- League: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for pre-game and in-play betting with risk management strategies and bankroll allocation suggestions.`,
        effectiveness: 82,
        copyCount: 0,
        isFavorite: false
    },

    icehockey: {
        name: "Ice Hockey",
        icon: "🏒",
        category: "winter",
        promptTitle: "Professional Ice Hockey Analysis & Betting Strategy",
        prompt: `You are a professional ice hockey analyst with expertise in NHL, European leagues, and international hockey betting markets. Provide comprehensive pre-game analysis for the specified hockey match.

**ICE HOCKEY ANALYSIS FRAMEWORK:**

**1. TEAM FORM & PERFORMANCE**
- Recent game results and point streaks
- Home/away performance differentials
- Goals for/against trends and defensive stability
- Power play and penalty kill efficiency
- Back-to-back game performance

**2. GOALTENDING ANALYSIS**
- Starting goaltender confirmation and recent form
- Save percentage and goals against average
- Performance against specific opponents
- Backup goaltender reliability
- Goaltender fatigue and workload management

**3. LINE COMBINATIONS & MATCHUPS**
- Forward line chemistry and production
- Defensive pairings and ice time distribution
- Special teams units effectiveness
- Key player matchups and deployment
- Injury impacts on line combinations

**4. STATISTICAL BREAKDOWN**
- Shot attempts and shot quality metrics
- Faceoff win percentages by zone
- Hits, blocks, and physical play indicators
- Penalty minutes and discipline issues
- Corsi and Fenwick advanced analytics

**5. SITUATIONAL ANALYSIS**
- Performance in different game states
- Third period and overtime tendencies
- Response to scoring first or trailing
- Performance against divisional rivals
- Playoff race implications and motivation

**6. BETTING MARKET ASSESSMENT**
- Moneyline value and three-way betting
- Puck line (spread) analysis
- Total goals over/under assessment
- Period betting opportunities
- Player props (goals, assists, shots, saves)

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- League: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include recommendations for live betting opportunities, especially during power plays, penalty kills, and goaltender changes.`,
        effectiveness: 79,
        copyCount: 0,
        isFavorite: false
    },

    baseball: {
        name: "Baseball",
        icon: "⚾",
        category: "american",
        promptTitle: "Professional Baseball Analysis & Betting Strategy",
        prompt: `You are a professional baseball analyst specializing in MLB, NPB, and international baseball betting markets. Provide comprehensive pre-game analysis for the specified baseball match.

**BASEBALL ANALYSIS FRAMEWORK:**

**1. PITCHING MATCHUP ANALYSIS**
- Starting pitcher recent form and statistics
- ERA, WHIP, and strikeout rates
- Performance against opposing team historically
- Bullpen depth and recent usage patterns
- Pitcher fatigue and days of rest

**2. OFFENSIVE ANALYSIS**
- Team batting averages and on-base percentages
- Power numbers (home runs, slugging percentage)
- Performance against left/right-handed pitching
- Clutch hitting and runners in scoring position
- Recent offensive trends and hot/cold streaks

**3. BALLPARK FACTORS**
- Stadium dimensions and weather conditions
- Wind direction and speed impact
- Temperature effects on ball flight
- Historical run scoring in venue
- Day vs night game considerations

**4. ADVANCED ANALYTICS**
- WAR (Wins Above Replacement) for key players
- wOBA and wRC+ offensive metrics
- FIP and xFIP pitching indicators
- Defensive efficiency and fielding metrics
- Base running and stolen base success rates

**5. SITUATIONAL FACTORS**
- Series context and momentum
- Travel and time zone considerations
- Injury report and lineup changes
- Managerial tendencies and strategy
- Divisional rivalry implications

**6. BETTING MARKET OPPORTUNITIES**
- Moneyline value assessment
- Run line (spread) analysis with pitching matchup
- Total runs over/under with weather factors
- First 5 innings betting strategies
- Player props (hits, RBIs, strikeouts, home runs)

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- League: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for pre-game betting and live wagering opportunities, especially around pitching changes and late-inning situations.`,
        effectiveness: 81,
        copyCount: 0,
        isFavorite: false
    },

    americanfootball: {
        name: "American Football",
        icon: "🏈",
        category: "american",
        promptTitle: "Professional American Football Analysis & Betting Strategy",
        prompt: `You are a professional American football analyst specializing in NFL, college football, and professional football betting markets. Provide comprehensive pre-game analysis for the specified football match.

**AMERICAN FOOTBALL ANALYSIS FRAMEWORK:**

**1. OFFENSIVE UNIT ANALYSIS**
- Quarterback performance and recent form
- Offensive line protection and run blocking
- Receiving corps depth and matchup advantages
- Running game effectiveness and yards per carry
- Red zone efficiency and touchdown conversion

**2. DEFENSIVE UNIT ANALYSIS**
- Pass rush effectiveness and sack rates
- Secondary coverage and interception rates
- Run defense and yards allowed per carry
- Third down conversion defense
- Turnover creation and defensive scores

**3. SPECIAL TEAMS EVALUATION**
- Kicking game accuracy and range
- Punt and kick return capabilities
- Field position impact and coverage units
- Special teams penalties and mistakes
- Weather impact on kicking game

**4. COACHING & STRATEGY**
- Offensive and defensive scheme matchups
- Play calling tendencies in key situations
- Halftime adjustments and game management
- Clock management and timeout usage
- Historical performance in similar games

**5. SITUATIONAL ANALYSIS**
- Home field advantage and crowd impact
- Divisional rivalry factors
- Playoff implications and motivation
- Injury report impact on key positions
- Weather conditions and playing surface

**6. BETTING MARKET ASSESSMENT**
- Point spread analysis and line movement
- Total points over/under with pace factors
- Moneyline value in close matchups
- First half and quarter betting opportunities
- Player props (passing yards, rushing yards, touchdowns)

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- League: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include recommendations for live betting strategies, especially around halftime adjustments, momentum shifts, and late-game scenarios.`,
        effectiveness: 84,
        copyCount: 0,
        isFavorite: false
    },

    // NEW SPORTS - 5 additions as requested

    rugby: {
        name: "Rugby",
        icon: "🏉",
        category: "traditional",
        promptTitle: "Professional Rugby Analysis & Betting Strategy",
        prompt: `You are a professional rugby analyst specializing in Rugby Union, Rugby League, and international rugby betting markets. Provide comprehensive pre-match analysis for the specified rugby match.

**RUGBY ANALYSIS FRAMEWORK:**

**1. TEAM FORM & PERFORMANCE**
- Recent match results and performance trends
- Home advantage and travel factors
- Points scored vs conceded analysis
- Discipline record and penalty counts
- Injury list and key player availability

**2. FORWARD PACK ANALYSIS**
- Scrum dominance and lineout efficiency
- Breakdown work and ruck success rates
- Maul effectiveness and driving play
- Front row stability and hooker accuracy
- Back row mobility and ball-handling

**3. BACKLINE ASSESSMENT**
- Half-back combination and game management
- Center partnership and defensive alignment
- Wing pace and finishing ability
- Fullback positioning and counter-attack
- Kicking game accuracy and territory play

**4. SET PIECE EVALUATION**
- Lineout throwing and lifting coordination
- Scrum engagement and wheel tendencies
- Restart reception and kick-off strategy
- Penalty and conversion success rates
- Drop goal opportunities and execution

**5. TACTICAL ANALYSIS**
- Territory vs possession game plans
- Phase play patterns and continuity
- Defensive line speed and organization
- Kicking strategy and field position
- Substitution impact and bench strength

**6. BETTING MARKET OPPORTUNITIES**
- Match winner and handicap betting
- Total points over/under analysis
- First try scorer and anytime try markets
- Half-time/full-time double results
- Player props (tries, conversions, tackles)

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Competition: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide specific recommendations for pre-match and in-play betting, considering momentum shifts and tactical adjustments during the match.`,
        effectiveness: 77,
        copyCount: 0,
        isFavorite: false
    },

    cricket: {
        name: "Cricket",
        icon: "🏏",
        category: "traditional",
        promptTitle: "Professional Cricket Analysis & Betting Strategy",
        prompt: `You are a professional cricket analyst specializing in Test matches, ODIs, T20s, and international cricket betting markets. Provide comprehensive pre-match analysis for the specified cricket match.

**CRICKET ANALYSIS FRAMEWORK:**

**1. TEAM COMPOSITION & FORM**
- Recent series and match results
- Home/away performance records
- Squad selection and team balance
- Key player form and fitness
- Captain and vice-captain leadership

**2. BATTING ANALYSIS**
- Top order stability and run rates
- Middle order depth and acceleration
- Tail-end contributions and partnerships
- Power play and death over performance
- Performance against spin and pace

**3. BOWLING ATTACK ASSESSMENT**
- Pace bowling variety and effectiveness
- Spin bowling options and conditions suitability
- Death bowling skills and yorker execution
- New ball and old ball strategies
- Bowling depth and all-rounder contributions

**4. PITCH & CONDITIONS ANALYSIS**
- Pitch type and expected behavior
- Weather forecast and impact
- Dew factor in day/night matches
- Ground dimensions and boundary scoring
- Historical scoring patterns at venue

**5. FORMAT-SPECIFIC FACTORS**
- Test: Session-by-session analysis, follow-on scenarios
- ODI: Powerplay strategies, middle overs approach
- T20: Death overs execution, super over preparation
- Tournament context and net run rate implications

**6. BETTING MARKET OPPORTUNITIES**
- Match winner and series betting
- Total runs over/under for each innings
- Top batsman and bowler markets
- Method of dismissal and milestone betting
- In-play opportunities and momentum shifts

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Tournament: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include detailed recommendations for session betting, partnership markets, and live betting strategies based on match situation and conditions.`,
        effectiveness: 80,
        copyCount: 0,
        isFavorite: false
    },

    golf: {
        name: "Golf",
        icon: "⛳",
        category: "precision",
        promptTitle: "Professional Golf Tournament Analysis & Betting Strategy",
        prompt: `You are a professional golf analyst specializing in PGA Tour, European Tour, and major championship betting markets. Provide comprehensive pre-tournament analysis for the specified golf event.

**GOLF TOURNAMENT ANALYSIS FRAMEWORK:**

**1. COURSE ANALYSIS**
- Course layout and design characteristics
- Par distribution and scoring opportunities
- Rough thickness and fairway width
- Green speed and undulation complexity
- Weather forecast and wind patterns

**2. PLAYER FORM ASSESSMENT**
- Recent tournament results and finishes
- Strokes gained statistics (driving, approach, putting)
- Course history and previous performances
- Current world ranking and momentum
- Physical fitness and injury concerns

**3. STATISTICAL BREAKDOWN**
- Driving distance and accuracy percentages
- Greens in regulation and proximity to pin
- Putting average and three-putt avoidance
- Sand save percentage and scrambling ability
- Scoring average in different conditions

**4. COURSE FIT ANALYSIS**
- Length requirements and driving advantages
- Iron play precision and approach shot demands
- Putting surface compatibility
- Mental toughness and pressure performance
- Historical success on similar courses

**5. FIELD STRENGTH & COMPETITION**
- Top-ranked players participation
- Emerging talent and dark horse candidates
- Cut line predictions and weekend positioning
- Head-to-head matchup assessments
- Withdrawal and late entry impacts

**6. BETTING MARKET OPPORTUNITIES**
- Outright winner and each-way value
- Top 5, Top 10, and Top 20 finishes
- First round leader and 36-hole positions
- Head-to-head matchups and group betting
- Player props (eagles, birdies, missed cuts)

**SPECIFIC TOURNAMENT DETAILS:**
- Tournament: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Course: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for pre-tournament betting and daily fantasy golf strategies, including weather contingency plans and cut line analysis.`,
        effectiveness: 75,
        copyCount: 0,
        isFavorite: false
    },

    mma: {
        name: "MMA",
        icon: "🥊",
        category: "combat",
        promptTitle: "Professional MMA Fight Analysis & Betting Strategy",
        prompt: `You are a professional MMA analyst specializing in UFC, Bellator, and international mixed martial arts betting markets. Provide comprehensive pre-fight analysis for the specified MMA bout.

**MMA FIGHT ANALYSIS FRAMEWORK:**

**1. FIGHTER PROFILES**
- Professional record and recent fight history
- Fighting style and preferred techniques
- Physical attributes (reach, height, weight cutting)
- Training camp and coaching team
- Injury history and recovery status

**2. TECHNICAL ANALYSIS**
- Striking accuracy and power punching
- Grappling credentials and takedown defense
- Ground game and submission threats
- Cardio conditioning and fight endurance
- Cage control and octagon awareness

**3. STYLISTIC MATCHUP**
- Striker vs grappler dynamics
- Orthodox vs southpaw considerations
- Range management and distance control
- Clinch work and dirty boxing
- Scrambling ability and position recovery

**4. STATISTICAL BREAKDOWN**
- Significant strikes landed per minute
- Takedown accuracy and defense percentages
- Submission attempts and success rates
- Fight finish rates and method of victory
- Performance against similar opponents

**5. PSYCHOLOGICAL FACTORS**
- Mental toughness and adversity response
- Pressure fighting vs counter-punching
- Crowd influence and venue familiarity
- Weight cut difficulty and hydration
- Motivation and career implications

**6. BETTING MARKET ASSESSMENT**
- Moneyline value and upset potential
- Method of victory predictions
- Round betting and fight duration
- Performance bonuses and finish incentives
- Live betting opportunities and momentum shifts

**SPECIFIC FIGHT DETAILS:**
- Fight: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Event: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include detailed recommendations for pre-fight betting and live wagering strategies, considering referee tendencies and judging criteria variations.`,
        effectiveness: 78,
        copyCount: 0,
        isFavorite: false
    },

    cycling: {
        name: "Cycling",
        icon: "🚴",
        category: "traditional",
        promptTitle: "Professional Cycling Race Analysis & Betting Strategy",
        prompt: `You are a professional cycling analyst specializing in Grand Tours, Classics, and international cycling betting markets. Provide comprehensive pre-race analysis for the specified cycling event.

**CYCLING RACE ANALYSIS FRAMEWORK:**

**1. RACE PROFILE ANALYSIS**
- Stage terrain and elevation profile
- Distance and expected race duration
- Climb categorization and difficulty
- Sprint opportunities and finish type
- Weather conditions and wind direction

**2. RIDER FORM ASSESSMENT**
- Recent race results and performance
- Training block completion and peak timing
- Team role and tactical responsibilities
- Physical condition and injury status
- Motivation and season objectives

**3. TEAM DYNAMICS**
- Team strength and depth analysis
- Domestique support and lead-out trains
- Tactical approach and race strategy
- Equipment advantages and technology
- Team chemistry and communication

**4. STAGE TYPE SPECIALIZATION**
- Climber performance on mountain stages
- Sprinter capabilities and lead-out quality
- Time trial specialists and equipment
- Breakaway artists and opportunists
- All-rounder adaptability

**5. TACTICAL CONSIDERATIONS**
- Peloton control and pace setting
- Breakaway probability and composition
- Sprint train organization and timing
- Climb pacing and attack patterns
- Weather adaptation and equipment choices

**6. BETTING MARKET OPPORTUNITIES**
- Stage winner and podium finishes
- General classification movements
- Points and mountain jersey competitions
- Head-to-head rider matchups
- Team classification and nationality betting

**SPECIFIC RACE DETAILS:**
- Race: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Tour/Event: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for stage betting and overall tour strategies, including breakaway analysis and sprint finish predictions.`,
        effectiveness: 73,
        copyCount: 0,
        isFavorite: false
    },

    // POLITICS - As requested
    politics: {
        name: "Political Events",
        icon: "🗳️",
        category: "politics",
        promptTitle: "Professional Political Event Analysis & Forecasting",
        prompt: `You are a professional political analyst and forecasting expert specializing in electoral predictions, policy outcomes, and political event betting markets. Provide comprehensive analysis for the specified political event.

**POLITICAL ANALYSIS FRAMEWORK:**

**1. POLLING DATA ANALYSIS**
- Recent polling trends and methodology
- Margin of error and confidence intervals
- Polling house bias and historical accuracy
- Likely voter models and turnout predictions
- Demographic breakdowns and swing groups

**2. ELECTORAL DYNAMICS**
- Candidate/party strengths and weaknesses
- Campaign funding and resource allocation
- Ground game organization and voter outreach
- Media coverage and narrative momentum
- Debate performance and public appearances

**3. DEMOGRAPHIC ANALYSIS**
- Voter registration and turnout patterns
- Age, gender, and ethnic voting preferences
- Geographic and regional variations
- Education and income level correlations
- Urban vs rural voting behaviors

**4. HISTORICAL CONTEXT**
- Previous election results and trends
- Incumbent advantage or disadvantage
- Economic indicators and voter sentiment
- Issue salience and priority rankings
- Third-party impact and vote splitting

**5. EXTERNAL FACTORS**
- Economic conditions and market performance
- International events and foreign policy
- Social movements and cultural issues
- Media influence and information sources
- Unexpected events and October surprises

**6. FORECASTING MODELS**
- Statistical models and prediction algorithms
- Swing state analysis and electoral college
- Popular vote vs electoral outcome scenarios
- Confidence intervals and probability ranges
- Scenario planning and contingency analysis

**RISK DISCLAIMER:**
Political betting involves significant uncertainty and regulatory considerations. This analysis is for informational purposes only and should not be considered financial advice. Always verify legal status of political betting in your jurisdiction.

**SPECIFIC EVENT DETAILS:**
- Event: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Jurisdiction: [SPECIFIC_LEAGUE]
- Election Cycle: [SPECIFIC_SEASON]

Provide probability assessments with confidence levels and identify potential value opportunities in political betting markets while emphasizing risk management and legal compliance.`,
        effectiveness: 70,
        copyCount: 0,
        isFavorite: false
    },

    // All other existing sports from Hungarian version...
    boxing: {
        name: "Boxing",
        icon: "🥊",
        category: "combat",
        promptTitle: "Professional Boxing Match Analysis & Betting Strategy",
        prompt: `You are a professional boxing analyst with expertise in professional boxing across all weight divisions and major sanctioning bodies. Provide comprehensive pre-fight analysis for the specified boxing match.

**BOXING ANALYSIS FRAMEWORK:**

**1. FIGHTER PROFILES & RECORDS**
- Professional record and recent fight history
- Quality of opposition and level stepped up
- Championship experience and title defenses
- Amateur background and technical foundation
- Age, physical prime, and career trajectory

**2. TECHNICAL ANALYSIS**
- Boxing style and tactical approach
- Punch accuracy and power statistics
- Defensive skills and ring IQ
- Footwork and ring generalship
- Conditioning and stamina levels

**3. PHYSICAL MATCHUP**
- Height, reach, and physical advantages
- Weight cutting and rehydration process
- Punch resistance and recovery ability
- Hand speed and reflexes comparison
- Southpaw vs orthodox considerations

**4. PSYCHOLOGICAL FACTORS**
- Mental toughness and adversity response
- Pressure fighting vs boxing ability
- Crowd influence and venue experience
- Motivation and career significance
- Confidence levels and recent setbacks

**5. TRAINING CAMP ANALYSIS**
- Preparation quality and sparring partners
- Coaching team and corner expertise
- Injury concerns and training disruptions
- Weight management and physical condition
- Strategic adjustments and game planning

**6. BETTING MARKET ASSESSMENT**
- Moneyline value and upset potential
- Method of victory predictions (KO, TKO, Decision)
- Round betting and fight duration
- Knockdown props and referee stoppages
- Live betting opportunities and momentum shifts

**SPECIFIC FIGHT DETAILS:**
- Fight: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Venue: [SPECIFIC_LEAGUE]
- Card Position: [SPECIFIC_SEASON]

Include detailed recommendations for pre-fight betting strategies and live wagering opportunities, considering referee tendencies and judging criteria.`,
        effectiveness: 83,
        copyCount: 0,
        isFavorite: false
    },

    swimming: {
        name: "Swimming",
        icon: "🏊",
        category: "water",
        promptTitle: "Professional Swimming Competition Analysis & Betting Strategy",
        prompt: `You are a professional swimming analyst specializing in Olympic, World Championships, and international swimming competition betting markets. Provide comprehensive pre-competition analysis.

**SWIMMING ANALYSIS FRAMEWORK:**

**1. SWIMMER PERFORMANCE ANALYSIS**
- Personal best times and seasonal progression
- Recent competition results and form
- Training base and coaching changes
- Technical stroke analysis and efficiency
- Race strategy and pacing patterns

**2. EVENT-SPECIFIC FACTORS**
- Distance specialization and endurance
- Stroke technique and underwater work
- Start and turn execution quality
- Finishing strength and race tactics
- Pool conditions and lane assignments

**3. COMPETITION DYNAMICS**
- Heat placement and seeding advantages
- Relay team composition and order
- Multiple event scheduling and recovery
- Pressure handling and championship experience
- Home pool advantage and crowd support

**4. TECHNICAL CONSIDERATIONS**
- Stroke rate and distance per stroke
- Split time analysis and negative splitting
- Underwater dolphin kick effectiveness
- Breathing patterns and rhythm
- Equipment and suit technology

**5. PHYSICAL & MENTAL PREPARATION**
- Taper timing and peak performance
- Injury status and training disruptions
- Mental preparation and visualization
- Competition routine and warm-up
- Altitude and travel adjustment

**6. BETTING MARKET OPPORTUNITIES**
- Individual event winners and podium places
- Relay team victories and record attempts
- Head-to-head swimmer matchups
- Time-based props and record breaking
- Medal count and team performance

**SPECIFIC COMPETITION DETAILS:**
- Event: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Competition: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for pre-competition betting and session-by-session strategies, including world record potential and upset possibilities.`,
        effectiveness: 72,
        copyCount: 0,
        isFavorite: false
    },

    volleyball: {
        name: "Volleyball",
        icon: "🏐",
        category: "traditional",
        promptTitle: "Professional Volleyball Match Analysis & Betting Strategy",
        prompt: `You are a professional volleyball analyst specializing in indoor volleyball, beach volleyball, and international competition betting markets. Provide comprehensive pre-match analysis.

**VOLLEYBALL ANALYSIS FRAMEWORK:**

**1. TEAM FORMATION & TACTICS**
- Starting lineup and rotation system
- Offensive system (5-1, 6-2, 4-2) effectiveness
- Defensive formation and digging ability
- Serving strategy and ace potential
- Substitution patterns and specialist roles

**2. PLAYER ANALYSIS**
- Setter distribution and decision making
- Outside hitter attack percentage and kills
- Middle blocker effectiveness and quick attacks
- Libero passing and defensive coverage
- Opposite hitter power and versatility

**3. TECHNICAL SKILLS ASSESSMENT**
- Passing accuracy and first ball control
- Attack efficiency and kill percentage
- Block effectiveness and stuff blocks
- Serving accuracy and service aces
- Defensive digs and transition play

**4. MATCH DYNAMICS**
- Set-by-set performance patterns
- Momentum shifts and timeout usage
- Pressure point execution (20+ scores)
- Deuce situation performance
- Fifth set mental toughness

**5. PHYSICAL & TACTICAL FACTORS**
- Team height and net presence
- Court coverage and defensive range
- Conditioning and endurance levels
- Coaching adjustments and strategy
- Home court advantage and crowd impact

**6. BETTING MARKET OPPORTUNITIES**
- Match winner and set betting
- Total sets over/under (3, 4, or 5 sets)
- Set score predictions and margins
- Individual player performance props
- First set winner and early momentum

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Competition: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include recommendations for live betting opportunities, especially around set points, momentum shifts, and tactical timeouts.`,
        effectiveness: 74,
        copyCount: 0,
        isFavorite: false
    },

    // E-Sports
    lol: {
        name: "League of Legends",
        icon: "🎮",
        category: "esports",
        promptTitle: "Professional League of Legends Match Analysis & Betting Strategy",
        prompt: `You are a professional League of Legends analyst specializing in LCS, LEC, LCK, LPL, and international tournament betting markets. Provide comprehensive pre-match analysis.

**LEAGUE OF LEGENDS ANALYSIS FRAMEWORK:**

**1. TEAM COMPOSITION & META**
- Current patch meta and champion priorities
- Team composition synergy and win conditions
- Pick/ban phase strategy and flexibility
- Power spikes and scaling patterns
- Team fighting vs split push preferences

**2. PLAYER ANALYSIS**
- Individual player form and champion pools
- Lane matchup advantages and disadvantages
- Mechanical skill and clutch performance
- Communication and shotcalling ability
- Pressure handling in high-stakes matches

**3. STRATEGIC ANALYSIS**
- Early game aggression vs scaling approach
- Objective control (Dragon, Baron, Herald)
- Vision control and map awareness
- Rotation timing and macro play
- Late game decision making

**4. RECENT PERFORMANCE**
- Match history and win/loss streaks
- Performance against similar opponents
- Adaptation to patch changes
- Scrim results and practice reports
- Player substitutions and roster changes

**5. TOURNAMENT CONTEXT**
- Playoff implications and seeding
- Head-to-head record and psychological edge
- Best-of series vs best-of-one performance
- International experience and stage presence
- Coaching staff and draft preparation

**6. BETTING MARKET OPPORTUNITIES**
- Match winner and series betting
- Map/game handicaps and totals
- First blood and early game props
- Dragon and Baron control betting
- Player performance and KDA props

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Tournament: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for pre-match and live betting strategies, including draft phase analysis and in-game momentum shifts.`,
        effectiveness: 76,
        copyCount: 0,
        isFavorite: false
    },

    // Motor Sports
    f1: {
        name: "Formula 1",
        icon: "🏎️",
        category: "motor",
        promptTitle: "Professional Formula 1 Race Analysis & Betting Strategy",
        prompt: `You are a professional Formula 1 analyst specializing in Grand Prix racing and international motorsport betting markets. Provide comprehensive pre-race analysis for the specified F1 race.

**FORMULA 1 ANALYSIS FRAMEWORK:**

**1. CIRCUIT ANALYSIS**
- Track characteristics and layout complexity
- Overtaking opportunities and DRS zones
- Tire degradation and compound selection
- Weather forecast and track conditions
- Historical lap times and pole positions

**2. DRIVER & TEAM PERFORMANCE**
- Current championship standings and form
- Driver skill on specific circuit types
- Team car performance and reliability
- Recent upgrades and development direction
- Driver-team combination effectiveness

**3. QUALIFYING & GRID POSITION**
- Qualifying performance predictions
- Grid penalty impacts and strategy
- Starting tire compound choices
- First corner and early race scenarios
- Safety car probability and timing

**4. RACE STRATEGY ANALYSIS**
- Pit stop strategy and tire management
- Fuel load optimization
- Weather contingency planning
- Undercut vs overcut opportunities
- Strategic risk-taking vs point scoring

**5. TECHNICAL FACTORS**
- Car setup for race vs qualifying
- Engine reliability and power unit usage
- Aerodynamic efficiency and drag levels
- Brake cooling and thermal management
- Suspension setup for track surface

**6. BETTING MARKET OPPORTUNITIES**
- Race winner and podium finishes
- Fastest lap and pole position betting
- Head-to-head driver matchups
- Points scoring and DNF predictions
- Constructor championship implications

**SPECIFIC RACE DETAILS:**
- Race: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Circuit: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Include detailed recommendations for pre-race betting and live wagering opportunities, considering strategy variations and race incident possibilities.`,
        effectiveness: 81,
        copyCount: 0,
        isFavorite: false
    },

    // Winter Sports
    skiing: {
        name: "Alpine Skiing",
        icon: "⛷️",
        category: "winter",
        promptTitle: "Professional Alpine Skiing Analysis & Betting Strategy",
        prompt: `You are a professional alpine skiing analyst specializing in World Cup, Olympic, and international skiing competition betting markets. Provide comprehensive pre-race analysis.

**ALPINE SKIING ANALYSIS FRAMEWORK:**

**1. DISCIPLINE ANALYSIS**
- Event type (Downhill, Super-G, Giant Slalom, Slalom)
- Course setting and gate configuration
- Terrain difficulty and technical demands
- Speed vs technical skill requirements
- Weather impact on course conditions

**2. ATHLETE PERFORMANCE**
- Current World Cup standings and form
- Discipline specialization and versatility
- Recent race results and consistency
- Injury status and physical condition
- Equipment setup and ski technology

**3. COURSE CONDITIONS**
- Snow quality and surface preparation
- Weather forecast and visibility
- Temperature impact on ski performance
- Course inspection and athlete feedback
- Starting order advantages and disadvantages

**4. TECHNICAL FACTORS**
- Skiing technique and style efficiency
- Gate approach and line selection
- Risk-taking vs consistency balance
- Pressure handling and mental toughness
- Experience on similar courses

**5. RACE DAY DYNAMICS**
- Bib number and starting position
- Course deterioration throughout field
- Weather changes during competition
- Timing splits and intermediate analysis
- Disqualification and mistake potential

**6. BETTING MARKET OPPORTUNITIES**
- Race winner and podium predictions
- Head-to-head athlete matchups
- Nationality and team betting
- Time margin and winning gap props
- DNF (Did Not Finish) possibilities

**SPECIFIC RACE DETAILS:**
- Race: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Venue: [SPECIFIC_LEAGUE]
- Season: [SPECIFIC_SEASON]

Provide detailed recommendations for pre-race betting strategies and live wagering opportunities during the competition.`,
        effectiveness: 69,
        copyCount: 0,
        isFavorite: false
    },

    // Logic & Strategy
    chess: {
        name: "Chess",
        icon: "♟️",
        category: "logic",
        promptTitle: "Professional Chess Match Analysis & Betting Strategy",
        prompt: `You are a professional chess analyst specializing in classical, rapid, and blitz chess competition betting markets. Provide comprehensive pre-match analysis for the specified chess match.

**CHESS ANALYSIS FRAMEWORK:**

**1. PLAYER RATING & FORM**
- Current ELO ratings and recent performance
- Tournament results and match history
- Time control specialization and adaptation
- Opening repertoire and preparation depth
- Recent games analysis and pattern recognition

**2. PLAYING STYLE ANALYSIS**
- Positional vs tactical playing preferences
- Endgame technique and calculation ability
- Time management and clock handling
- Pressure performance and blunder frequency
- Risk assessment and decision making

**3. HEAD-TO-HEAD ANALYSIS**
- Historical match results and trends
- Opening choices in previous encounters
- Psychological edge and mental warfare
- Adaptation and counter-preparation
- Recent form against similar opponents

**4. TOURNAMENT CONTEXT**
- Match format and time controls
- Playoff implications and standings
- Preparation time and seconds available
- Venue conditions and playing environment
- Prize fund and motivation factors

**5. TECHNICAL PREPARATION**
- Opening theory and novelty potential
- Computer preparation and analysis depth
- Team support and coaching quality
- Physical condition and stamina
- Mental preparation and focus ability

**6. BETTING MARKET OPPORTUNITIES**
- Match winner and series betting
- Individual game outcomes and draws
- Time-based props and flag falls
- Opening choice and first move betting
- Blunder and mistake frequency props

**SPECIFIC MATCH DETAILS:**
- Match: [SPECIFIC_MATCH]
- Date: [SPECIFIC_DATE]
- Tournament: [SPECIFIC_LEAGUE]
- Format: [SPECIFIC_SEASON]

Include detailed recommendations for match betting and game-by-game strategies, considering psychological factors and preparation advantages.`,
        effectiveness: 71,
        copyCount: 0,
        isFavorite: false
    }
};

// Enhanced application state
let currentSport = null;
let filteredSports = Object.keys(sportsData);
let currentCategory = 'all';
let searchQuery = '';
let isLightTheme = false;
let displayedSports = [];
let itemsPerPage = 24;
let currentPage = 0;

// Enhanced DOM elements
const elements = {
    sportsGrid: document.getElementById('sports-grid'),
    promptContainer: document.getElementById('prompt-container'),
    promptTitle: document.getElementById('prompt-title'),
    promptCategory: document.getElementById('prompt-category'),
    promptText: document.getElementById('prompt-text'),
    copyButton: document.getElementById('copy-button'),
    copyText: document.getElementById('copy-text'),
    copyFeedback: document.getElementById('copy-feedback'),
    searchInput: document.getElementById('search-input'),
    noResults: document.getElementById('no-results'),
    categoryFilters: document.querySelectorAll('.category-filter'),
    closePromptButton: document.getElementById('close-prompt-button'),
    editButton: document.getElementById('edit-button'),
    editModal: document.getElementById('edit-modal'),
    editForm: document.getElementById('edit-form'),
    cancelEditBtn: document.getElementById('cancel-edit-btn'),
    addNewPromptBtn: document.getElementById('add-new-prompt-btn'),
    modalTitle: document.getElementById('modal-title'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    favoriteButton: document.getElementById('favorite-button'),
    favoriteIcon: document.getElementById('favorite-icon'),
    favoriteText: document.getElementById('favorite-text'),
    effectivenessSlider: document.getElementById('effectiveness-slider'),
    effectivenessValue: document.getElementById('effectiveness-value'),
    effectivenessDisplay: document.getElementById('effectiveness-display'),
    copyCountDisplay: document.getElementById('copy-count-display'),
    exportBtn: document.getElementById('export-btn'),
    importInput: document.getElementById('import-input'),
    resetBtn: document.getElementById('reset-btn'),
    alertModal: document.getElementById('alert-modal'),
    alertModalTitle: document.getElementById('alert-modal-title'),
    alertModalMessage: document.getElementById('alert-modal-message'),
    alertModalButtons: document.getElementById('alert-modal-buttons'),
    loadMoreSentinel: document.getElementById('load-more-sentinel'),
    specificMatchOptions: document.getElementById('specific-match-options'),
    specificMatchCheckbox: document.getElementById('specific-match-checkbox'),
    matchInputContainer: document.getElementById('match-input-container'),
    specificMatchInput: document.getElementById('specific-match-input'),
    specificDateCheckbox: document.getElementById('specific-date-checkbox'),
    dateInputContainer: document.getElementById('date-input-container'),
    specificDateInput: document.getElementById('specific-date-input'),
    specificLeagueCheckbox: document.getElementById('specific-league-checkbox'),
    leagueInputContainer: document.getElementById('league-input-container'),
    specificLeagueInput: document.getElementById('specific-league-input'),
    specificSeasonCheckbox: document.getElementById('specific-season-checkbox'),
    seasonInputContainer: document.getElementById('season-input-container'),
    specificSeasonInput: document.getElementById('specific-season-input'),
    sportIcon: document.getElementById('sport-icon')
};

// Enhanced category mappings with icons
const categoryInfo = {
    all: { name: "All Categories", icon: "🌟" },
    favorites: { name: "Favorites", icon: "⭐" },
    traditional: { name: "Traditional Sports", icon: "🏆" },
    american: { name: "American Sports", icon: "🇺🇸" },
    esports: { name: "E-Sports", icon: "🎮" },
    motor: { name: "Motorsport", icon: "🏎️" },
    combat: { name: "Combat Sports", icon: "🥊" },
    water: { name: "Water Sports", icon: "🏊" },
    winter: { name: "Winter Sports", icon: "❄️" },
    precision: { name: "Precision Sports", icon: "🎯" },
    politics: { name: "Politics", icon: "🗳️" },
    logic: { name: "Logic & Strategy", icon: "🧠" }
};

// Enhanced sport icons mapping
const sportIcons = {
    football: "⚽",
    tennis: "🎾",
    basketball: "🏀",
    icehockey: "🏒",
    baseball: "⚾",
    americanfootball: "🏈",
    rugby: "🏉",
    cricket: "🏏",
    golf: "⛳",
    mma: "🥊",
    cycling: "🚴",
    politics: "🗳️",
    boxing: "🥊",
    swimming: "🏊",
    volleyball: "🏐",
    lol: "🎮",
    f1: "🏎️",
    skiing: "⛷️",
    chess: "♟️"
};

// Enhanced initialization
function init() {
    loadSavedData();
    setupEventListeners();
    setupIntersectionObserver();
    renderSports();
    updateCategoryButtons();
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        toggleTheme();
    }
    
    // Initialize effectiveness slider
    updateEffectivenessDisplay();
    
    console.log('Professional Sports Betting Library initialized successfully');
}

// Enhanced data persistence
function loadSavedData() {
    const saved = localStorage.getItem('sportsData');
    if (saved) {
        try {
            const parsedData = JSON.parse(saved);
            Object.assign(sportsData, parsedData);
        } catch (error) {
            console.error('Error loading saved data:', error);
        }
    }
}

function saveData() {
    try {
        localStorage.setItem('sportsData', JSON.stringify(sportsData));
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

// Enhanced event listeners
function setupEventListeners() {
    // Search functionality
    elements.searchInput.addEventListener('input', handleSearch);
    
    // Category filters
    elements.categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => handleCategoryFilter(filter.dataset.category));
    });
    
    // Prompt interactions
    elements.closePromptButton.addEventListener('click', hidePrompt);
    elements.copyButton.addEventListener('click', copyPrompt);
    elements.editButton.addEventListener('click', openEditModal);
    elements.favoriteButton.addEventListener('click', toggleFavorite);
    
    // Modal interactions
    elements.cancelEditBtn.addEventListener('click', closeEditModal);
    elements.editForm.addEventListener('submit', handleEditSubmit);
    elements.addNewPromptBtn.addEventListener('click', openAddModal);
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Effectiveness slider
    elements.effectivenessSlider.addEventListener('input', updateEffectivenessDisplay);
    elements.effectivenessSlider.addEventListener('change', updateEffectiveness);
    
    // Tools
    elements.exportBtn.addEventListener('click', exportData);
    elements.importInput.addEventListener('change', importData);
    elements.resetBtn.addEventListener('click', () => showAlert(
        'Reset Library',
        'Are you sure you want to reset the library to default prompts? This will permanently delete all custom prompts and modifications.',
        [
            { text: 'Cancel', class: 'bg-slate-600 hover:bg-slate-500' },
            { text: 'Reset Library', class: 'bg-red-600 hover:bg-red-700', action: resetData }
        ]
    ));
    
    // Specific match options
    elements.specificMatchCheckbox.addEventListener('change', toggleMatchInput);
    elements.specificDateCheckbox.addEventListener('change', toggleDateInput);
    elements.specificLeagueCheckbox.addEventListener('change', toggleLeagueInput);
    elements.specificSeasonCheckbox.addEventListener('change', toggleSeasonInput);
    
    // Close modals on outside click
    elements.editModal.addEventListener('click', (e) => {
        if (e.target === elements.editModal) closeEditModal();
    });
    
    elements.alertModal.addEventListener('click', (e) => {
        if (e.target === elements.alertModal) hideAlert();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Inline tools (duplicate functionality for prompt window)
    const inlineExportBtn = document.getElementById('export-btn-inline');
    const inlineImportInput = document.getElementById('import-input-inline');
    const inlineResetBtn = document.getElementById('reset-btn-inline');
    
    if (inlineExportBtn) inlineExportBtn.addEventListener('click', exportData);
    if (inlineImportInput) inlineImportInput.addEventListener('change', importData);
    if (inlineResetBtn) inlineResetBtn.addEventListener('click', () => showAlert(
        'Reset Library',
        'Are you sure you want to reset the library to default prompts?',
        [
            { text: 'Cancel', class: 'bg-slate-600 hover:bg-slate-500' },
            { text: 'Reset Library', class: 'bg-red-600 hover:bg-red-700', action: resetData }
        ]
    ));
}

// Enhanced intersection observer for infinite scroll
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && displayedSports.length < filteredSports.length) {
                loadMoreSports();
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(elements.loadMoreSentinel);
}

// Enhanced search functionality
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    currentPage = 0;
    displayedSports = [];
    filterAndRenderSports();
}

// Enhanced category filtering
function handleCategoryFilter(category) {
    currentCategory = category;
    currentPage = 0;
    displayedSports = [];
    updateCategoryButtons();
    filterAndRenderSports();
}

function updateCategoryButtons() {
    elements.categoryFilters.forEach(filter => {
        const isActive = filter.dataset.category === currentCategory;
        filter.classList.toggle('category-badge', isActive);
        filter.classList.toggle('bg-slate-700/80', !isActive);
        
        if (isActive) {
            filter.classList.remove('bg-slate-700/80', 'hover:bg-slate-600/80');
        } else {
            filter.classList.add('bg-slate-700/80', 'hover:bg-slate-600/80');
        }
    });
}

// Enhanced filtering and rendering
function filterAndRenderSports() {
    filteredSports = Object.keys(sportsData).filter(key => {
        const sport = sportsData[key];
        const matchesSearch = !searchQuery || 
            sport.name.toLowerCase().includes(searchQuery) ||
            sport.category.toLowerCase().includes(searchQuery) ||
            sport.promptTitle.toLowerCase().includes(searchQuery);
        
        const matchesCategory = currentCategory === 'all' || 
            sport.category === currentCategory ||
            (currentCategory === 'favorites' && sport.isFavorite);
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort by favorites first, then by effectiveness, then alphabetically
    filteredSports.sort((a, b) => {
        const sportA = sportsData[a];
        const sportB = sportsData[b];
        
        if (sportA.isFavorite && !sportB.isFavorite) return -1;
        if (!sportA.isFavorite && sportB.isFavorite) return 1;
        if (sportA.effectiveness !== sportB.effectiveness) return sportB.effectiveness - sportA.effectiveness;
        return sportA.name.localeCompare(sportB.name);
    });
    
    renderSports();
}

function renderSports() {
    if (currentPage === 0) {
        elements.sportsGrid.innerHTML = '';
        displayedSports = [];
    }
    
    loadMoreSports();
    
    // Show/hide no results message
    elements.noResults.style.display = filteredSports.length === 0 ? 'block' : 'none';
}

function loadMoreSports() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredSports.length);
    const sportsToAdd = filteredSports.slice(startIndex, endIndex);
    
    sportsToAdd.forEach((key, index) => {
        const sport = sportsData[key];
        const card = createSportCard(key, sport);
        
        // Add staggered animation
        setTimeout(() => {
            card.classList.add('animated');
            elements.sportsGrid.appendChild(card);
        }, index * 50);
    });
    
    displayedSports.push(...sportsToAdd);
    currentPage++;
}

// Enhanced sport card creation
function createSportCard(key, sport) {
    const card = document.createElement('div');
    card.className = 'sport-card rounded-2xl p-6 cursor-pointer text-center relative transition-all duration-500 shadow-lg hover:shadow-2xl';
    card.dataset.sport = key;
    
    // Effectiveness color coding
    const effectivenessColor = getEffectivenessColor(sport.effectiveness);
    
    card.innerHTML = `
        <div class="favorite-star ${sport.isFavorite ? 'is-favorite' : ''}" data-sport="${key}">
            ${sport.isFavorite ? '⭐' : '☆'}
        </div>
        <div class="text-4xl lg:text-5xl mb-4">${sport.icon}</div>
        <h3 class="text-lg lg:text-xl font-bold text-white mb-2">${sport.name}</h3>
        <p class="text-sm text-slate-400 mb-3">${categoryInfo[sport.category]?.name || sport.category}</p>
        <div class="flex items-center justify-center gap-2 text-xs">
            <div class="flex items-center gap-1">
                <div class="w-2 h-2 rounded-full ${effectivenessColor}"></div>
                <span class="text-slate-300">${sport.effectiveness}%</span>
            </div>
            <div class="flex items-center gap-1">
                <span class="text-blue-400">📋</span>
                <span class="text-slate-300">${sport.copyCount || 0}</span>
            </div>
        </div>
    `;
    
    // Add click handlers
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-star')) {
            showPrompt(key);
        }
    });
    
    // Add favorite star handler
    const favoriteStarElement = card.querySelector('.favorite-star');
    favoriteStarElement.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSportFavorite(key);
    });
    
    return card;
}

function getEffectivenessColor(effectiveness) {
    if (effectiveness >= 80) return 'bg-green-400';
    if (effectiveness >= 60) return 'bg-yellow-400';
    return 'bg-red-400';
}

// Enhanced prompt display
function showPrompt(sportKey) {
    currentSport = sportKey;
    const sport = sportsData[sportKey];
    
    // Update prompt content
    elements.promptTitle.textContent = sport.promptTitle;
    elements.promptCategory.textContent = `${categoryInfo[sport.category]?.icon || ''} ${categoryInfo[sport.category]?.name || sport.category}`;
    elements.promptText.value = sport.prompt;
    
    // Update stats
    elements.effectivenessDisplay.textContent = `${sport.effectiveness}%`;
    elements.copyCountDisplay.textContent = sport.copyCount || 0;
    elements.effectivenessSlider.value = sport.effectiveness;
    elements.effectivenessValue.textContent = `${sport.effectiveness}%`;
    
    // Update favorite button
    updateFavoriteButton(sport.isFavorite);
    
    // Update sport icon in specific match options
    if (elements.sportIcon) {
        elements.sportIcon.textContent = sport.icon;
    }
    
    // Show specific match options for supported sports
    const supportedSports = ['football', 'tennis', 'basketball', 'icehockey', 'baseball', 'americanfootball'];
    if (supportedSports.includes(sportKey)) {
        elements.specificMatchOptions.classList.remove('hidden');
    } else {
        elements.specificMatchOptions.classList.add('hidden');
    }
    
    // Show prompt with animation
    elements.promptContainer.classList.remove('prompt-hidden');
    elements.promptContainer.classList.add('prompt-visible');
    
    // Scroll to prompt
    elements.promptContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update selected card
    updateSelectedCard(sportKey);
}

function hidePrompt() {
    elements.promptContainer.classList.remove('prompt-visible');
    elements.promptContainer.classList.add('prompt-hidden');
    currentSport = null;
    
    // Clear selected card
    document.querySelectorAll('.sport-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Reset specific match options
    resetSpecificMatchOptions();
}

function updateSelectedCard(sportKey) {
    document.querySelectorAll('.sport-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`[data-sport="${sportKey}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
}

// Enhanced copy functionality
async function copyPrompt() {
    if (!currentSport) return;
    
    let promptText = sportsData[currentSport].prompt;
    
    // Apply specific match customizations
    if (elements.specificMatchCheckbox.checked && elements.specificMatchInput.value) {
        promptText = promptText.replace('[SPECIFIC_MATCH]', elements.specificMatchInput.value);
    } else {
        promptText = promptText.replace('[SPECIFIC_MATCH]', 'To be specified');
    }
    
    if (elements.specificDateCheckbox.checked && elements.specificDateInput.value) {
        const date = new Date(elements.specificDateInput.value);
        const formattedDate = date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        promptText = promptText.replace('[SPECIFIC_DATE]', formattedDate);
    } else {
        promptText = promptText.replace('[SPECIFIC_DATE]', 'To be specified');
    }
    
    if (elements.specificLeagueCheckbox.checked && elements.specificLeagueInput.value) {
        promptText = promptText.replace('[SPECIFIC_LEAGUE]', elements.specificLeagueInput.value);
    } else {
        promptText = promptText.replace('[SPECIFIC_LEAGUE]', 'To be specified');
    }
    
    if (elements.specificSeasonCheckbox.checked && elements.specificSeasonInput.value) {
        promptText = promptText.replace('[SPECIFIC_SEASON]', elements.specificSeasonInput.value);
    } else {
        promptText = promptText.replace('[SPECIFIC_SEASON]', 'Current season');
    }
    
    try {
        await navigator.clipboard.writeText(promptText);
        
        // Update copy count
        sportsData[currentSport].copyCount = (sportsData[currentSport].copyCount || 0) + 1;
        elements.copyCountDisplay.textContent = sportsData[currentSport].copyCount;
        saveData();
        
        // Show feedback
        showCopyFeedback();
        
        // Update card display
        const card = document.querySelector(`[data-sport="${currentSport}"]`);
        if (card) {
            const copyCountElement = card.querySelector('.text-slate-300:last-child');
            if (copyCountElement) {
                copyCountElement.textContent = sportsData[currentSport].copyCount;
            }
        }
        
    } catch (error) {
        console.error('Failed to copy prompt:', error);
        showCopyFeedback('Failed to copy prompt. Please try again.');
    }
}

function showCopyFeedback(message = '✓ Prompt successfully copied to clipboard!') {
    elements.copyFeedback.textContent = message;
    elements.copyFeedback.style.opacity = '1';
    
    setTimeout(() => {
        elements.copyFeedback.style.opacity = '0';
    }, 3000);
}

// Enhanced favorite functionality
function toggleFavorite() {
    if (!currentSport) return;
    
    sportsData[currentSport].isFavorite = !sportsData[currentSport].isFavorite;
    updateFavoriteButton(sportsData[currentSport].isFavorite);
    saveData();
    
    // Update card display
    const card = document.querySelector(`[data-sport="${currentSport}"]`);
    if (card) {
        const star = card.querySelector('.favorite-star');
        star.classList.toggle('is-favorite', sportsData[currentSport].isFavorite);
        star.textContent = sportsData[currentSport].isFavorite ? '⭐' : '☆';
    }
    
    // Re-render if favorites filter is active
    if (currentCategory === 'favorites') {
        filterAndRenderSports();
    }
}

function toggleSportFavorite(sportKey) {
    sportsData[sportKey].isFavorite = !sportsData[sportKey].isFavorite;
    saveData();
    
    // Update card display
    const card = document.querySelector(`[data-sport="${sportKey}"]`);
    if (card) {
        const star = card.querySelector('.favorite-star');
        star.classList.toggle('is-favorite', sportsData[sportKey].isFavorite);
        star.textContent = sportsData[sportKey].isFavorite ? '⭐' : '☆';
    }
    
    // Update favorite button if this sport is currently shown
    if (currentSport === sportKey) {
        updateFavoriteButton(sportsData[sportKey].isFavorite);
    }
    
    // Re-render if favorites filter is active
    if (currentCategory === 'favorites') {
        filterAndRenderSports();
    }
}

function updateFavoriteButton(isFavorite) {
    elements.favoriteIcon.textContent = isFavorite ? '⭐' : '☆';
    elements.favoriteText.textContent = isFavorite ? 'Favorited' : 'Add to Favorites';
    elements.favoriteButton.classList.toggle('bg-yellow-600/30', isFavorite);
    elements.favoriteButton.classList.toggle('border-yellow-400/70', isFavorite);
    elements.favoriteButton.classList.toggle('bg-yellow-600/20', !isFavorite);
    elements.favoriteButton.classList.toggle('border-yellow-500/50', !isFavorite);
}

// Enhanced effectiveness functionality
function updateEffectivenessDisplay() {
    const value = elements.effectivenessSlider.value;
    elements.effectivenessValue.textContent = `${value}%`;
    
    // Update color based on value
    const color = value >= 80 ? '#10b981' : value >= 60 ? '#f59e0b' : '#ef4444';
    elements.effectivenessValue.style.color = color;
}

function updateEffectiveness() {
    if (!currentSport) return;
    
    const newValue = parseInt(elements.effectivenessSlider.value);
    sportsData[currentSport].effectiveness = newValue;
    elements.effectivenessDisplay.textContent = `${newValue}%`;
    saveData();
    
    // Update card display
    const card = document.querySelector(`[data-sport="${currentSport}"]`);
    if (card) {
        const effectivenessElement = card.querySelector('.text-slate-300');
        if (effectivenessElement) {
            effectivenessElement.textContent = `${newValue}%`;
        }
        
        const dot = card.querySelector('.w-2.h-2.rounded-full');
        if (dot) {
            dot.className = `w-2 h-2 rounded-full ${getEffectivenessColor(newValue)}`;
        }
    }
}

// Enhanced modal functionality
function openEditModal() {
    if (!currentSport) return;
    
    const sport = sportsData[currentSport];
    elements.modalTitle.innerHTML = `<span class="text-4xl">✏️</span><span>Edit Prompt</span>`;
    
    document.getElementById('edit-key').value = currentSport;
    document.getElementById('edit-name').value = sport.name;
    document.getElementById('edit-icon').value = sport.icon;
    document.getElementById('edit-category').value = sport.category;
    document.getElementById('edit-prompt-title').value = sport.promptTitle;
    document.getElementById('edit-prompt').value = sport.prompt;
    
    elements.editModal.classList.add('visible');
}

function openAddModal() {
    elements.modalTitle.innerHTML = `<span class="text-4xl">➕</span><span>Add New Prompt</span>`;
    
    document.getElementById('edit-key').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-icon').value = '';
    document.getElementById('edit-category').value = 'traditional';
    document.getElementById('edit-prompt-title').value = '';
    document.getElementById('edit-prompt').value = '';
    
    elements.editModal.classList.add('visible');
}

function closeEditModal() {
    elements.editModal.classList.remove('visible');
}

function handleEditSubmit(e) {
    e.preventDefault();
    
    const key = document.getElementById('edit-key').value || generateKey();
    const name = document.getElementById('edit-name').value;
    const icon = document.getElementById('edit-icon').value;
    const category = document.getElementById('edit-category').value;
    const promptTitle = document.getElementById('edit-prompt-title').value;
    const prompt = document.getElementById('edit-prompt').value;
    
    const isNew = !sportsData[key];
    
    sportsData[key] = {
        name,
        icon,
        category,
        promptTitle,
        prompt,
        effectiveness: sportsData[key]?.effectiveness || 75,
        copyCount: sportsData[key]?.copyCount || 0,
        isFavorite: sportsData[key]?.isFavorite || false
    };
    
    saveData();
    closeEditModal();
    
    if (isNew) {
        filterAndRenderSports();
    } else {
        // Update current display if editing current sport
        if (currentSport === key) {
            showPrompt(key);
        }
        // Update card
        const card = document.querySelector(`[data-sport="${key}"]`);
        if (card) {
            card.querySelector('h3').textContent = name;
            card.querySelector('.text-4xl').textContent = icon;
        }
    }
}

function generateKey() {
    return 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Enhanced theme functionality
function toggleTheme() {
    isLightTheme = !isLightTheme;
    document.body.classList.toggle('light-theme', isLightTheme);
    elements.themeIcon.textContent = isLightTheme ? '☀️' : '🌙';
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Enhanced specific match options
function toggleMatchInput() {
    elements.matchInputContainer.classList.toggle('hidden', !elements.specificMatchCheckbox.checked);
}

function toggleDateInput() {
    elements.dateInputContainer.classList.toggle('hidden', !elements.specificDateCheckbox.checked);
}

function toggleLeagueInput() {
    elements.leagueInputContainer.classList.toggle('hidden', !elements.specificLeagueCheckbox.checked);
}

function toggleSeasonInput() {
    elements.seasonInputContainer.classList.toggle('hidden', !elements.specificSeasonCheckbox.checked);
}

function resetSpecificMatchOptions() {
    elements.specificMatchCheckbox.checked = false;
    elements.specificDateCheckbox.checked = false;
    elements.specificLeagueCheckbox.checked = false;
    elements.specificSeasonCheckbox.checked = false;
    
    elements.matchInputContainer.classList.add('hidden');
    elements.dateInputContainer.classList.add('hidden');
    elements.leagueInputContainer.classList.add('hidden');
    elements.seasonInputContainer.classList.add('hidden');
    
    elements.specificMatchInput.value = '';
    elements.specificDateInput.value = '';
    elements.specificLeagueInput.value = '';
    elements.specificSeasonInput.value = '';
}

// Enhanced data management
function exportData() {
    const dataToExport = {
        version: '2.0',
        exportDate: new Date().toISOString(),
        sportsData: sportsData
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sports-betting-prompts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            
            if (importedData.sportsData) {
                Object.assign(sportsData, importedData.sportsData);
                saveData();
                filterAndRenderSports();
                
                showAlert(
                    'Import Successful',
                    `Successfully imported ${Object.keys(importedData.sportsData).length} prompts.`,
                    [{ text: 'OK', class: 'bg-blue-600 hover:bg-blue-700' }]
                );
            } else {
                throw new Error('Invalid file format');
            }
        } catch (error) {
            showAlert(
                'Import Failed',
                'Failed to import data. Please check the file format and try again.',
                [{ text: 'OK', class: 'bg-red-600 hover:bg-red-700' }]
            );
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    e.target.value = '';
}

function resetData() {
    // This would reset to original data - for now just reload
    location.reload();
}

// Enhanced alert system
function showAlert(title, message, buttons) {
    elements.alertModalTitle.textContent = title;
    elements.alertModalMessage.textContent = message;
    
    elements.alertModalButtons.innerHTML = '';
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button.text;
        btn.className = `px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${button.class}`;
        btn.addEventListener('click', () => {
            if (button.action) button.action();
            hideAlert();
        });
        elements.alertModalButtons.appendChild(btn);
    });
    
    elements.alertModal.classList.add('visible');
}

function hideAlert() {
    elements.alertModal.classList.remove('visible');
}

// Enhanced keyboard shortcuts
function handleKeyboardShortcuts(e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'c':
                if (currentSport && elements.promptContainer.classList.contains('prompt-visible')) {
                    e.preventDefault();
                    copyPrompt();
                }
                break;
            case 'e':
                if (currentSport && elements.promptContainer.classList.contains('prompt-visible')) {
                    e.preventDefault();
                    openEditModal();
                }
                break;
            case 'f':
                e.preventDefault();
                elements.searchInput.focus();
                break;
        }
    }
    
    if (e.key === 'Escape') {
        if (elements.editModal.classList.contains('visible')) {
            closeEditModal();
        } else if (elements.alertModal.classList.contains('visible')) {
            hideAlert();
        } else if (elements.promptContainer.classList.contains('prompt-visible')) {
            hidePrompt();
        }
    }
}

// Enhanced mobile optimizations
function handleMobileOptimizations() {
    if (window.innerWidth <= 640) {
        elements.addNewPromptBtn.classList.add('fab');
        elements.addNewPromptBtn.innerHTML = '➕';
    } else {
        elements.addNewPromptBtn.classList.remove('fab');
        elements.addNewPromptBtn.innerHTML = '➕ Add New Prompt';
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', handleMobileOptimizations);

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Enhanced performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

console.log('Professional Sports Betting & Analysis Prompt Library v2.0 - Loaded successfully');