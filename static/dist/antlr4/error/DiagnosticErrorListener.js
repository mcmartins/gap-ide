/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function DiagnosticErrorListener(exactOnly){return ErrorListener.call(this),exactOnly=exactOnly||!0,this.exactOnly=exactOnly,this}var BitSet=require("./../Utils").BitSet,ErrorListener=require("./ErrorListener").ErrorListener,Interval=require("./../IntervalSet").Interval;DiagnosticErrorListener.prototype=Object.create(ErrorListener.prototype),DiagnosticErrorListener.prototype.constructor=DiagnosticErrorListener,DiagnosticErrorListener.prototype.reportAmbiguity=function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs){if(!this.exactOnly||exact){var msg="reportAmbiguity d="+this.getDecisionDescription(recognizer,dfa)+": ambigAlts="+this.getConflictingAlts(ambigAlts,configs)+", input='"+recognizer.getTokenStream().getText(new Interval(startIndex,stopIndex))+"'";recognizer.notifyErrorListeners(msg)}},DiagnosticErrorListener.prototype.reportAttemptingFullContext=function(recognizer,dfa,startIndex,stopIndex,conflictingAlts,configs){var msg="reportAttemptingFullContext d="+this.getDecisionDescription(recognizer,dfa)+", input='"+recognizer.getTokenStream().getText(new Interval(startIndex,stopIndex))+"'";recognizer.notifyErrorListeners(msg)},DiagnosticErrorListener.prototype.reportContextSensitivity=function(recognizer,dfa,startIndex,stopIndex,prediction,configs){var msg="reportContextSensitivity d="+this.getDecisionDescription(recognizer,dfa)+", input='"+recognizer.getTokenStream().getText(new Interval(startIndex,stopIndex))+"'";recognizer.notifyErrorListeners(msg)},DiagnosticErrorListener.prototype.getDecisionDescription=function(recognizer,dfa){var decision=dfa.decision,ruleIndex=dfa.atnStartState.ruleIndex,ruleNames=recognizer.ruleNames;if(ruleIndex<0||ruleIndex>=ruleNames.length)return""+decision;var ruleName=ruleNames[ruleIndex]||null;return null===ruleName||0===ruleName.length?""+decision:""+decision+" ("+ruleName+")"},DiagnosticErrorListener.prototype.getConflictingAlts=function(reportedAlts,configs){if(null!==reportedAlts)return reportedAlts;for(var result=new BitSet,i=0;i<configs.items.length;i++)result.add(configs.items[i].alt);return"{"+result.values().join(", ")+"}"},exports.DiagnosticErrorListener=DiagnosticErrorListener;