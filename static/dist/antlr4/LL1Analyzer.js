/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function LL1Analyzer(atn){this.atn=atn}var Set=require("./Utils").Set,BitSet=require("./Utils").BitSet,Token=require("./Token").Token,ATNConfig=require("./atn/ATNConfig").ATNConfig,Interval=require("./IntervalSet").Interval,IntervalSet=require("./IntervalSet").IntervalSet,RuleStopState=require("./atn/ATNState").RuleStopState,RuleTransition=require("./atn/Transition").RuleTransition,NotSetTransition=require("./atn/Transition").NotSetTransition,WildcardTransition=require("./atn/Transition").WildcardTransition,AbstractPredicateTransition=require("./atn/Transition").AbstractPredicateTransition,pc=require("./PredictionContext"),predictionContextFromRuleContext=pc.predictionContextFromRuleContext,PredictionContext=pc.PredictionContext,SingletonPredictionContext=pc.SingletonPredictionContext;LL1Analyzer.HIT_PRED=Token.INVALID_TYPE,LL1Analyzer.prototype.getDecisionLookahead=function(s){if(null===s)return null;for(var count=s.transitions.length,look=[],alt=0; alt<count; alt++){look[alt]=new IntervalSet;var lookBusy=new Set,seeThruPreds=!1;this._LOOK(s.transition(alt).target,null,PredictionContext.EMPTY,look[alt],lookBusy,new BitSet,seeThruPreds,!1),(0===look[alt].length||look[alt].contains(LL1Analyzer.HIT_PRED))&&(look[alt]=null)}return look},LL1Analyzer.prototype.LOOK=function(s,stopState,ctx){var r=new IntervalSet,seeThruPreds=!0;ctx=ctx||null;var lookContext=null!==ctx?predictionContextFromRuleContext(s.atn,ctx):null;return this._LOOK(s,stopState,lookContext,r,new Set,new BitSet,seeThruPreds,!0),r},LL1Analyzer.prototype._LOOK=function(s,stopState,ctx,look,lookBusy,calledRuleStack,seeThruPreds,addEOF){var c=new ATNConfig({state:s,alt:0,context:ctx},null);if(!lookBusy.contains(c)){if(lookBusy.add(c),s===stopState){if(null===ctx)return void look.addOne(Token.EPSILON);if(ctx.isEmpty()&&addEOF)return void look.addOne(Token.EOF)}if(s instanceof RuleStopState){if(null===ctx)return void look.addOne(Token.EPSILON);if(ctx.isEmpty()&&addEOF)return void look.addOne(Token.EOF);if(ctx!==PredictionContext.EMPTY){for(var i=0;i<ctx.length;i++){var returnState=this.atn.states[ctx.getReturnState(i)],removed=calledRuleStack.contains(returnState.ruleIndex);try{calledRuleStack.remove(returnState.ruleIndex),this._LOOK(returnState,stopState,ctx.getParent(i),look,lookBusy,calledRuleStack,seeThruPreds,addEOF)}finally{removed&&calledRuleStack.add(returnState.ruleIndex)}}return}}for(var j=0;j<s.transitions.length;j++){var t=s.transitions[j];if(t.constructor===RuleTransition){if(calledRuleStack.contains(t.target.ruleIndex))continue;var newContext=SingletonPredictionContext.create(ctx,t.followState.stateNumber);try{calledRuleStack.add(t.target.ruleIndex),this._LOOK(t.target,stopState,newContext,look,lookBusy,calledRuleStack,seeThruPreds,addEOF)}finally{calledRuleStack.remove(t.target.ruleIndex)}}else if(t instanceof AbstractPredicateTransition)seeThruPreds?this._LOOK(t.target,stopState,ctx,look,lookBusy,calledRuleStack,seeThruPreds,addEOF):look.addOne(LL1Analyzer.HIT_PRED);else if(t.isEpsilon)this._LOOK(t.target,stopState,ctx,look,lookBusy,calledRuleStack,seeThruPreds,addEOF);else if(t.constructor===WildcardTransition)look.addRange(Token.MIN_USER_TOKEN_TYPE,this.atn.maxTokenType);else{var set=t.label;null!==set&&(t instanceof NotSetTransition&&(set=set.complement(Token.MIN_USER_TOKEN_TYPE,this.atn.maxTokenType)),look.addSet(set))}}}},exports.LL1Analyzer=LL1Analyzer;