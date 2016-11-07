/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function checkParams(params,isCfg){if(null===params){var result={state:null,alt:null,context:null,semanticContext:null};return isCfg&&(result.reachesIntoOuterContext=0),result}var props={};return props.state=params.state||null,props.alt=void 0===params.alt?null:params.alt,props.context=params.context||null,props.semanticContext=params.semanticContext||null,isCfg&&(props.reachesIntoOuterContext=params.reachesIntoOuterContext||0,props.precedenceFilterSuppressed=params.precedenceFilterSuppressed||!1),props}function ATNConfig(params,config){return this.checkContext(params,config),params=checkParams(params),config=checkParams(config,!0),this.state=null!==params.state?params.state:config.state,this.alt=null!==params.alt?params.alt:config.alt,this.context=null!==params.context?params.context:config.context,this.semanticContext=null!==params.semanticContext?params.semanticContext:null!==config.semanticContext?config.semanticContext:SemanticContext.NONE,this.reachesIntoOuterContext=config.reachesIntoOuterContext,this.precedenceFilterSuppressed=config.precedenceFilterSuppressed,this}function LexerATNConfig(params,config){ATNConfig.call(this,params,config);var lexerActionExecutor=params.lexerActionExecutor||null;return this.lexerActionExecutor=lexerActionExecutor||(null!==config?config.lexerActionExecutor:null),this.passedThroughNonGreedyDecision=null!==config&&this.checkNonGreedyDecision(config,this.state),this}var DecisionState=require("./ATNState").DecisionState,SemanticContext=require("./SemanticContext").SemanticContext;ATNConfig.prototype.checkContext=function(params, config){null!==params.context&&void 0!==params.context||null!==config&&null!==config.context&&void 0!==config.context||(this.context=null)},ATNConfig.prototype.equals=function(other){return this===other||other instanceof ATNConfig&&(this.state.stateNumber===other.state.stateNumber&&this.alt===other.alt&&(null===this.context?null===other.context:this.context.equals(other.context))&&this.semanticContext.equals(other.semanticContext)&&this.precedenceFilterSuppressed===other.precedenceFilterSuppressed)},ATNConfig.prototype.shortHashString=function(){return""+this.state.stateNumber+"/"+this.alt+"/"+this.semanticContext},ATNConfig.prototype.hashString=function(){return""+this.state.stateNumber+"/"+this.alt+"/"+(null===this.context?"":this.context.hashString())+"/"+this.semanticContext.hashString()},ATNConfig.prototype.toString=function(){return"("+this.state+","+this.alt+(null!==this.context?",["+this.context.toString()+"]":"")+(this.semanticContext!==SemanticContext.NONE?","+this.semanticContext.toString():"")+(this.reachesIntoOuterContext>0?",up="+this.reachesIntoOuterContext:"")+")"},LexerATNConfig.prototype=Object.create(ATNConfig.prototype),LexerATNConfig.prototype.constructor=LexerATNConfig,LexerATNConfig.prototype.hashString=function(){return""+this.state.stateNumber+this.alt+this.context+this.semanticContext+(this.passedThroughNonGreedyDecision?1:0)+this.lexerActionExecutor},LexerATNConfig.prototype.equals=function(other){return this===other||other instanceof LexerATNConfig&&(this.passedThroughNonGreedyDecision===other.passedThroughNonGreedyDecision&&(!(this.lexerActionExecutor?!this.lexerActionExecutor.equals(other.lexerActionExecutor):!other.lexerActionExecutor)&&ATNConfig.prototype.equals.call(this,other)))},LexerATNConfig.prototype.checkNonGreedyDecision=function(source,target){return source.passedThroughNonGreedyDecision||target instanceof DecisionState&&target.nonGreedy},exports.ATNConfig=ATNConfig,exports.LexerATNConfig=LexerATNConfig;