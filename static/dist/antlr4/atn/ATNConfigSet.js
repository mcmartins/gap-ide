/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function hashATNConfig(c){return c.shortHashString()}function equalATNConfigs(a,b){return a===b||null!==a&&null!==b&&(a.state.stateNumber===b.state.stateNumber&&a.alt===b.alt&&a.semanticContext.equals(b.semanticContext))}function ATNConfigSet(fullCtx){return this.configLookup=new Set(hashATNConfig,equalATNConfigs),this.fullCtx=void 0===fullCtx||fullCtx,this.readOnly=!1,this.configs=[],this.uniqueAlt=0,this.conflictingAlts=null,this.hasSemanticContext=!1,this.dipsIntoOuterContext=!1,this.cachedHashString="-1",this}function OrderedATNConfigSet(){return ATNConfigSet.call(this),this.configLookup=new Set,this}var ATN=require("./ATN").ATN,Utils=require("./../Utils"),Set=Utils.Set,SemanticContext=require("./SemanticContext").SemanticContext,merge=require("./../PredictionContext").merge;ATNConfigSet.prototype.add=function(config, mergeCache){if(void 0===mergeCache&&(mergeCache=null),this.readOnly)throw"This set is readonly";config.semanticContext!==SemanticContext.NONE&&(this.hasSemanticContext=!0),config.reachesIntoOuterContext>0&&(this.dipsIntoOuterContext=!0);var existing=this.configLookup.add(config);if(existing===config)return this.cachedHashString="-1",this.configs.push(config),!0;var rootIsWildcard=!this.fullCtx,merged=merge(existing.context,config.context,rootIsWildcard,mergeCache);return existing.reachesIntoOuterContext=Math.max(existing.reachesIntoOuterContext,config.reachesIntoOuterContext),config.precedenceFilterSuppressed&&(existing.precedenceFilterSuppressed=!0),existing.context=merged,!0},ATNConfigSet.prototype.getStates=function(){for(var states=new Set,i=0;i<this.configs.length;i++)states.add(this.configs[i].state);return states},ATNConfigSet.prototype.getPredicates=function(){for(var preds=[],i=0;i<this.configs.length;i++){var c=this.configs[i].semanticContext;c!==SemanticContext.NONE&&preds.push(c.semanticContext)}return preds},Object.defineProperty(ATNConfigSet.prototype,"items",{get:function(){return this.configs}}),ATNConfigSet.prototype.optimizeConfigs=function(interpreter){if(this.readOnly)throw"This set is readonly";if(0!==this.configLookup.length)for(var i=0;i<this.configs.length;i++){var config=this.configs[i];config.context=interpreter.getCachedContext(config.context)}},ATNConfigSet.prototype.addAll=function(coll){for(var i=0;i<coll.length;i++)this.add(coll[i]);return!1},ATNConfigSet.prototype.equals=function(other){return this===other||other instanceof ATNConfigSet&&(null!==this.configs&&this.configs.equals(other.configs)&&this.fullCtx===other.fullCtx&&this.uniqueAlt===other.uniqueAlt&&this.conflictingAlts===other.conflictingAlts&&this.hasSemanticContext===other.hasSemanticContext&&this.dipsIntoOuterContext===other.dipsIntoOuterContext)},ATNConfigSet.prototype.hashString=function(){return this.readOnly?("-1"===this.cachedHashString&&(this.cachedHashString=this.hashConfigs()),this.cachedHashString):this.hashConfigs()},ATNConfigSet.prototype.hashConfigs=function(){var s="";return this.configs.map(function(c){s+=c.toString()}),s},Object.defineProperty(ATNConfigSet.prototype,"length",{get:function(){return this.configs.length}}),ATNConfigSet.prototype.isEmpty=function(){return 0===this.configs.length},ATNConfigSet.prototype.contains=function(item){if(null===this.configLookup)throw"This method is not implemented for readonly sets.";return this.configLookup.contains(item)},ATNConfigSet.prototype.containsFast=function(item){if(null===this.configLookup)throw"This method is not implemented for readonly sets.";return this.configLookup.containsFast(item)},ATNConfigSet.prototype.clear=function(){if(this.readOnly)throw"This set is readonly";this.configs=[],this.cachedHashString="-1",this.configLookup=new Set},ATNConfigSet.prototype.setReadonly=function(readOnly){this.readOnly=readOnly,readOnly&&(this.configLookup=null)},ATNConfigSet.prototype.toString=function(){return Utils.arrayToString(this.configs)+(this.hasSemanticContext?",hasSemanticContext="+this.hasSemanticContext:"")+(this.uniqueAlt!==ATN.INVALID_ALT_NUMBER?",uniqueAlt="+this.uniqueAlt:"")+(null!==this.conflictingAlts?",conflictingAlts="+this.conflictingAlts:"")+(this.dipsIntoOuterContext?",dipsIntoOuterContext":"")},OrderedATNConfigSet.prototype=Object.create(ATNConfigSet.prototype),OrderedATNConfigSet.prototype.constructor=OrderedATNConfigSet,exports.ATNConfigSet=ATNConfigSet,exports.OrderedATNConfigSet=OrderedATNConfigSet;