#! /usr/bin/env node
process.chdir( __dirname )

; ( new function alchemy( $0 ) {
	const _0 = require( $0 )( alchemy, new _Alchemy, new Alchemy )
	; if ( 'commit' === process.argv[ 2 ] ) {
		_0.commit( [ _0, null, process.argv[ 3 ] ] )
		; return
		;
	}
	_0.init( [ _0, ( $0 ) => {
		_0.log( 'log', '✔ Alchemy PythagoreanMetal Strike Complete.', _0 )
	} ] )
	;
	function _Alchemy() {
		this.$auth = 'besta.pe'
	}
	function Alchemy() {
		this.log = null
		; this.syn = null
		; this.tie = null
		; this.lint = require( './job/lint.js' )
		; this.commit = require( './job/commit.js' )
		; this.init = require( './job/init.js' )
		; this.pythagMetal = require( './job/pythagMetal.js' )
		; this.animateMotion = require( './job/animateMotion.js' )
		; this.animateShrink = require( './job/animateShrink.js' )
		; this.animateSize = require( './job/animateSize.js' )
		; this.drawPath = require( './job/drawPath.js' )
		; this.dynamicObjectLoop = require( './job/dynamicObjectLoop.js' )
		; this.endParts = require( './job/endParts.js' )
		; this.footer = require( './job/footer.js' )
		; this.header = require( './job/header.js' )
		; this.runPart = require( './job/runPart.js' )
		; this.spiral = require( './job/spiral.js' )
		; this.test = require( './job/test.js' )
	}
}( './seed.js' ) )
;
