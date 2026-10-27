( new function init( $0, $1 ) {
	if ( this instanceof init ) {
		module.exports = init
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function next() {
		const _2 = _0.tie( _1, _1.next, new _Next, new Next )
		; _0.syn( _1, { clk: _1.clk + 1 }, 'n' )
		; if ( _1.clk >= _1.seq.length ) {
			_0.log( 'log', '✔ Alchemy Orchestration Strike Complete.', _1 )
			; if ( typeof _1.callback === 'function' ) {
				_1.callback( _1 )
			}
			; return _2
			;
		}
		_0[ _1.seq[ _1.clk ] ]( [ _0, () => {
			_1.next()
		} ] )
		; return _2
		;
		function _Next() {
			this.$auth = 'besta.pe'
		}
		function Next() {
			this.step = _1.clk + 1
		}
	}
	const _1 = _0.tie( _0, init, new _Init, new Init( $0 ) )
	; _0.log( 'log', 'Initiating Alchemy PythagoreanMetal Orchestration Strike...', _1 )
	; _0[ _1.seq[ 0 ] ]( [ _0, () => {
		_1.next()
	} ] )
	; return _1
	;
	function _Init() {
		this.$auth = 'besta.pe'
	}
	function Init( $0 ) {
		this.callback = $0[ 1 ]
		; this.clk = 0
		; this.next = next
		; this.seq = [ 'lint', 'spiral', 'test' ]
	}
} )
;
