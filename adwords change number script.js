<script type="text/javascript" id="adwords_google_forwarding_num">

function replaceTextOnPage( from, to ){
	getAllTextNodes().forEach(
		function( node ){
			node.nodeValue = node.nodeValue.replace( new RegExp( quote( from ), 'g' ), to );
		}
	);

	function getAllTextNodes(){
		var result = [];

		(function scanSubTree( node ){
			if( node.childNodes.length ){
				for( var i = 0; i < node.childNodes.length; i++){
					scanSubTree( node.childNodes[i] );
				}
			} else if(node.nodeType == Node.TEXT_NODE){
				result.push( node );
			}
		})( document );

		return result;
	}

	function quote(str){
		return ( str + '' ).replace( /([.?*+^$[\]\\(){}|-])/g, "\\$1" );
	}
}
  
  
(function() {
	var all_to_replace = [ 'xxx-xxxxxxx', 'xxx - xxxxxxxx', 'xxx – xxxxxxxxxx' ];

	function callback( formattedNumber ){
		// console.log( 'replace( ' + all_to_replace[0] + ' with ' + formattedNumber );
		for( var i = 0; i < all_to_replace.length; i++ ){
          	console.log('replace \"' + all_to_replace[i] + '\" by \"' + formattedNumber + '\"');
			replaceTextOnPage( all_to_replace[i], formattedNumber );
		}
	};
	
	//callback( '[TEST]' );
	_googWcmGet( callback, 'xxx-xxxxxxxxx' );
})();

</script>