/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function arrayToString(a){return"["+a.join(", ")+"]"}function standardEqualsFunction(a,b){return a.equals(b)}function standardHashFunction(a){return a.hashString()}function Set(hashFunction,equalsFunction){return this.data={},this.hashFunction=hashFunction||standardHashFunction,this.equalsFunction=equalsFunction||standardEqualsFunction,this}function BitSet(){return this.data=[],this}function AltDict(){return this.data={},this}function DoubleDict(){return this}function escapeWhitespace(s,escapeSpaces){return s=s.replace("\t","\\t"),s=s.replace("\n","\\n"),s=s.replace("\r","\\r"),escapeSpaces&&(s=s.replace(" ","·")),s}String.prototype.hashCode=function(s){var hash=0;if(0===this.length)return hash;for(var i=0;i<this.length;i++){var character=this.charCodeAt(i);hash=(hash<<5)-hash+character,hash&=hash}return hash},Object.defineProperty(Set.prototype,"length",{get:function(){return this.values().length}}),Set.prototype.add=function(value){var hash=this.hashFunction(value),key="hash_"+hash.hashCode();if(key in this.data){var i,values=this.data[key];for(i=0;i<values.length;i++)if(this.equalsFunction(value,values[i]))return values[i];return values.push(value),value}return this.data[key]=[value],value},Set.prototype.contains=function(value){var hash=this.hashFunction(value),key=hash.hashCode();if(key in this.data){var i,values=this.data[key];for(i=0;i<values.length;i++)if(this.equalsFunction(value,values[i]))return!0}return!1},Set.prototype.values=function(){var l=[];for(var key in this.data)0===key.indexOf("hash_")&&(l=l.concat(this.data[key]));return l},Set.prototype.toString=function(){return arrayToString(this.values())},BitSet.prototype.add=function(value){this.data[value]=!0},BitSet.prototype.or=function(set){var bits=this;Object.keys(set.data).map(function(alt){bits.add(alt)})},BitSet.prototype.remove=function(value){delete this.data[value]},BitSet.prototype.contains=function(value){return this.data[value]===!0},BitSet.prototype.values=function(){return Object.keys(this.data)},BitSet.prototype.minValue=function(){return Math.min.apply(null,this.values())},BitSet.prototype.hashString=function(){return this.values().toString()},BitSet.prototype.equals=function(other){return other instanceof BitSet&&this.hashString()===other.hashString()},Object.defineProperty(BitSet.prototype,"length",{get:function(){return this.values().length}}),BitSet.prototype.toString=function(){return"{"+this.values().join(", ")+"}"},AltDict.prototype.get=function(key){return key="k-"+key,key in this.data?this.data[key]:null},AltDict.prototype.put=function(key,value){key="k-"+key,this.data[key]=value},AltDict.prototype.values=function(){var data=this.data,keys=Object.keys(this.data);return keys.map(function(key){return data[key]})},DoubleDict.prototype.get=function(a,b){var d=this[a]||null;return null===d?null:d[b]||null},DoubleDict.prototype.set=function(a,b,o){var d=this[a]||null;null===d&&(d={},this[a]=d),d[b]=o},exports.isArray=function(entity){return"[object Array]"===Object.prototype.toString.call(entity)},exports.titleCase=function(str){return str.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1)})},exports.Set=Set,exports.BitSet=BitSet,exports.AltDict=AltDict,exports.DoubleDict=DoubleDict,exports.escapeWhitespace=escapeWhitespace,exports.arrayToString=arrayToString;