/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function ATNSimulator(atn,sharedContextCache){return this.atn=atn,this.sharedContextCache=sharedContextCache,this}var DFAState=require("./../dfa/DFAState").DFAState,ATNConfigSet=require("./ATNConfigSet").ATNConfigSet,getCachedPredictionContext=require("./../PredictionContext").getCachedPredictionContext;ATNSimulator.ERROR=new DFAState(2147483647,new ATNConfigSet),ATNSimulator.prototype.getCachedContext=function(context){if(null===this.sharedContextCache)return context;var visited={};return getCachedPredictionContext(context,this.sharedContextCache,visited)},exports.ATNSimulator=ATNSimulator;