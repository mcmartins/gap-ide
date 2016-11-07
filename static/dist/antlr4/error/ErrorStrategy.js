/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function ErrorStrategy(){}function DefaultErrorStrategy(){return ErrorStrategy.call(this),this.errorRecoveryMode=!1,this.lastErrorIndex=-1,this.lastErrorStates=null,this}function BailErrorStrategy(){return DefaultErrorStrategy.call(this),this}var Token=require("./../Token").Token,Errors=require("./Errors"),NoViableAltException=Errors.NoViableAltException,InputMismatchException=Errors.InputMismatchException,FailedPredicateException=Errors.FailedPredicateException,ParseCancellationException=Errors.ParseCancellationException,ATNState=require("./../atn/ATNState").ATNState,Interval=require("./../IntervalSet").Interval,IntervalSet=require("./../IntervalSet").IntervalSet;ErrorStrategy.prototype.reset=function(recognizer){},ErrorStrategy.prototype.recoverInline=function(recognizer){},ErrorStrategy.prototype.recover=function(recognizer, e){},ErrorStrategy.prototype.sync=function(recognizer){},ErrorStrategy.prototype.inErrorRecoveryMode=function(recognizer){},ErrorStrategy.prototype.reportError=function(recognizer){},DefaultErrorStrategy.prototype=Object.create(ErrorStrategy.prototype),DefaultErrorStrategy.prototype.constructor=DefaultErrorStrategy,DefaultErrorStrategy.prototype.reset=function(recognizer){this.endErrorCondition(recognizer)},DefaultErrorStrategy.prototype.beginErrorCondition=function(recognizer){this.errorRecoveryMode=!0},DefaultErrorStrategy.prototype.inErrorRecoveryMode=function(recognizer){return this.errorRecoveryMode},DefaultErrorStrategy.prototype.endErrorCondition=function(recognizer){this.errorRecoveryMode=!1,this.lastErrorStates=null,this.lastErrorIndex=-1},DefaultErrorStrategy.prototype.reportMatch=function(recognizer){this.endErrorCondition(recognizer)},DefaultErrorStrategy.prototype.reportError=function(recognizer,e){this.inErrorRecoveryMode(recognizer)||(this.beginErrorCondition(recognizer),e instanceof NoViableAltException?this.reportNoViableAlternative(recognizer,e):e instanceof InputMismatchException?this.reportInputMismatch(recognizer,e):e instanceof FailedPredicateException?this.reportFailedPredicate(recognizer,e):(console.log("unknown recognition error type: "+e.constructor.name),console.log(e.stack),recognizer.notifyErrorListeners(e.getOffendingToken(),e.getMessage(),e)))},DefaultErrorStrategy.prototype.recover=function(recognizer,e){this.lastErrorIndex===recognizer.getInputStream().index&&null!==this.lastErrorStates&&this.lastErrorStates.indexOf(recognizer.state)>=0&&recognizer.consume(),this.lastErrorIndex=recognizer._input.index,null===this.lastErrorStates&&(this.lastErrorStates=[]),this.lastErrorStates.push(recognizer.state);var followSet=this.getErrorRecoverySet(recognizer);this.consumeUntil(recognizer,followSet)},DefaultErrorStrategy.prototype.sync=function(recognizer){if(!this.inErrorRecoveryMode(recognizer)){var s=recognizer._interp.atn.states[recognizer.state],la=recognizer.getTokenStream().LA(1);if(la!==Token.EOF&&!recognizer.atn.nextTokens(s).contains(la)&&!recognizer.isExpectedToken(la))switch(s.stateType){case ATNState.BLOCK_START:case ATNState.STAR_BLOCK_START:case ATNState.PLUS_BLOCK_START:case ATNState.STAR_LOOP_ENTRY:if(null!==this.singleTokenDeletion(recognizer))return;throw new InputMismatchException(recognizer);case ATNState.PLUS_LOOP_BACK:case ATNState.STAR_LOOP_BACK:this.reportUnwantedToken(recognizer);var expecting=new IntervalSet;expecting.addSet(recognizer.getExpectedTokens());var whatFollowsLoopIterationOrRule=expecting.addSet(this.getErrorRecoverySet(recognizer));this.consumeUntil(recognizer,whatFollowsLoopIterationOrRule)}}},DefaultErrorStrategy.prototype.reportNoViableAlternative=function(recognizer,e){var input,tokens=recognizer.getTokenStream();input=null!==tokens?e.startToken.type===Token.EOF?"<EOF>":tokens.getText(new Interval(e.startToken,e.offendingToken)):"<unknown input>";var msg="no viable alternative at input "+this.escapeWSAndQuote(input);recognizer.notifyErrorListeners(msg,e.offendingToken,e)},DefaultErrorStrategy.prototype.reportInputMismatch=function(recognizer,e){var msg="mismatched input "+this.getTokenErrorDisplay(e.offendingToken)+" expecting "+e.getExpectedTokens().toString(recognizer.literalNames,recognizer.symbolicNames);recognizer.notifyErrorListeners(msg,e.offendingToken,e)},DefaultErrorStrategy.prototype.reportFailedPredicate=function(recognizer,e){var ruleName=recognizer.ruleNames[recognizer._ctx.ruleIndex],msg="rule "+ruleName+" "+e.message;recognizer.notifyErrorListeners(msg,e.offendingToken,e)},DefaultErrorStrategy.prototype.reportUnwantedToken=function(recognizer){if(!this.inErrorRecoveryMode(recognizer)){this.beginErrorCondition(recognizer);var t=recognizer.getCurrentToken(),tokenName=this.getTokenErrorDisplay(t),expecting=this.getExpectedTokens(recognizer),msg="extraneous input "+tokenName+" expecting "+expecting.toString(recognizer.literalNames,recognizer.symbolicNames);recognizer.notifyErrorListeners(msg,t,null)}},DefaultErrorStrategy.prototype.reportMissingToken=function(recognizer){if(!this.inErrorRecoveryMode(recognizer)){this.beginErrorCondition(recognizer);var t=recognizer.getCurrentToken(),expecting=this.getExpectedTokens(recognizer),msg="missing "+expecting.toString(recognizer.literalNames,recognizer.symbolicNames)+" at "+this.getTokenErrorDisplay(t);recognizer.notifyErrorListeners(msg,t,null)}},DefaultErrorStrategy.prototype.recoverInline=function(recognizer){var matchedSymbol=this.singleTokenDeletion(recognizer);if(null!==matchedSymbol)return recognizer.consume(),matchedSymbol;if(this.singleTokenInsertion(recognizer))return this.getMissingSymbol(recognizer);throw new InputMismatchException(recognizer)},DefaultErrorStrategy.prototype.singleTokenInsertion=function(recognizer){var currentSymbolType=recognizer.getTokenStream().LA(1),atn=recognizer._interp.atn,currentState=atn.states[recognizer.state],next=currentState.transitions[0].target,expectingAtLL2=atn.nextTokens(next,recognizer._ctx);return!!expectingAtLL2.contains(currentSymbolType)&&(this.reportMissingToken(recognizer),!0)},DefaultErrorStrategy.prototype.singleTokenDeletion=function(recognizer){var nextTokenType=recognizer.getTokenStream().LA(2),expecting=this.getExpectedTokens(recognizer);if(expecting.contains(nextTokenType)){this.reportUnwantedToken(recognizer),recognizer.consume();var matchedSymbol=recognizer.getCurrentToken();return this.reportMatch(recognizer),matchedSymbol}return null},DefaultErrorStrategy.prototype.getMissingSymbol=function(recognizer){var tokenText,currentSymbol=recognizer.getCurrentToken(),expecting=this.getExpectedTokens(recognizer),expectedTokenType=expecting.first();tokenText=expectedTokenType===Token.EOF?"<missing EOF>":"<missing "+recognizer.literalNames[expectedTokenType]+">";var current=currentSymbol,lookback=recognizer.getTokenStream().LT(-1);return current.type===Token.EOF&&null!==lookback&&(current=lookback),recognizer.getTokenFactory().create(current.source,expectedTokenType,tokenText,Token.DEFAULT_CHANNEL,-1,-1,current.line,current.column)},DefaultErrorStrategy.prototype.getExpectedTokens=function(recognizer){return recognizer.getExpectedTokens()},DefaultErrorStrategy.prototype.getTokenErrorDisplay=function(t){if(null===t)return"<no token>";var s=t.text;return null===s&&(s=t.type===Token.EOF?"<EOF>":"<"+t.type+">"),this.escapeWSAndQuote(s)},DefaultErrorStrategy.prototype.escapeWSAndQuote=function(s){return s=s.replace(/\n/g,"\\n"),s=s.replace(/\r/g,"\\r"),s=s.replace(/\t/g,"\\t"),"'"+s+"'"},DefaultErrorStrategy.prototype.getErrorRecoverySet=function(recognizer){for(var atn=recognizer._interp.atn,ctx=recognizer._ctx,recoverSet=new IntervalSet;null!==ctx&&ctx.invokingState>=0;){var invokingState=atn.states[ctx.invokingState],rt=invokingState.transitions[0],follow=atn.nextTokens(rt.followState);recoverSet.addSet(follow),ctx=ctx.parentCtx}return recoverSet.removeOne(Token.EPSILON),recoverSet},DefaultErrorStrategy.prototype.consumeUntil=function(recognizer,set){for(var ttype=recognizer.getTokenStream().LA(1);ttype!==Token.EOF&&!set.contains(ttype);)recognizer.consume(),ttype=recognizer.getTokenStream().LA(1)},BailErrorStrategy.prototype=Object.create(DefaultErrorStrategy.prototype),BailErrorStrategy.prototype.constructor=BailErrorStrategy,BailErrorStrategy.prototype.recover=function(recognizer,e){for(var context=recognizer._ctx;null!==context;)context.exception=e,context=context.parentCtx;throw new ParseCancellationException(e)},BailErrorStrategy.prototype.recoverInline=function(recognizer){this.recover(recognizer,new InputMismatchException(recognizer))},BailErrorStrategy.prototype.sync=function(recognizer){},exports.BailErrorStrategy=BailErrorStrategy,exports.DefaultErrorStrategy=DefaultErrorStrategy;