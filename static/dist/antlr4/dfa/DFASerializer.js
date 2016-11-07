/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function DFASerializer(dfa,literalNames,symbolicNames){return this.dfa=dfa,this.literalNames=literalNames||[],this.symbolicNames=symbolicNames||[],this}function LexerDFASerializer(dfa){return DFASerializer.call(this,dfa,null),this}DFASerializer.prototype.toString=function(){if(null===this.dfa.s0)return null;for(var buf="",states=this.dfa.sortedStates(),i=0;i<states.length;i++){var s=states[i];if(null!==s.edges)for(var n=s.edges.length,j=0;j<n;j++){var t=s.edges[j]||null;null!==t&&2147483647!==t.stateNumber&&(buf=buf.concat(this.getStateString(s)),buf=buf.concat("-"),buf=buf.concat(this.getEdgeLabel(j)),buf=buf.concat("->"),buf=buf.concat(this.getStateString(t)),buf=buf.concat("\n"))}}return 0===buf.length?null:buf},DFASerializer.prototype.getEdgeLabel=function(i){return 0===i?"EOF":null!==this.literalNames||null!==this.symbolicNames?this.literalNames[i-1]||this.symbolicNames[i-1]:String.fromCharCode(i-1)},DFASerializer.prototype.getStateString=function(s){var baseStateStr=(s.isAcceptState?":":"")+"s"+s.stateNumber+(s.requiresFullContext?"^":"");return s.isAcceptState?null!==s.predicates?baseStateStr+"=>"+s.predicates.toString():baseStateStr+"=>"+s.prediction.toString():baseStateStr},LexerDFASerializer.prototype=Object.create(DFASerializer.prototype),LexerDFASerializer.prototype.constructor=LexerDFASerializer,LexerDFASerializer.prototype.getEdgeLabel=function(i){return"'"+String.fromCharCode(i)+"'"},exports.DFASerializer=DFASerializer,exports.LexerDFASerializer=LexerDFASerializer;