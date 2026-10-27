( new function pythagMetal( $0, $1 ) {
	if ( this instanceof pythagMetal ) {
		module.exports = pythagMetal
		; return
		;
	}
	const _0 = $0[ 0 ]
	; const _1 = _0.tie( _0, pythagMetal, new _PythagMetal, new PythagMetal( $0 ) )
	; _0.syn( _1.state, {
		x: ( _1.c - _1.state.b2 / 2 ) / _1.state.a
	}, 'n' )
	; _0.syn( _1.state, {
		totalWidth: _1.state.vertical
			? _1.state.b2 + ( _1.state.a * _1.state.x ) + _1.state.borderSize
			: _1.state.totalWidth
		, totalHeight: _1.state.vertical
			? _1.state.totalHeight
			: _1.state.b2 + ( _1.state.a * _1.state.x ) + _1.state.borderSize
	}, 'n' )
	; if ( _1.state.cork ) {
		if ( _1.state.vertical ) {
			_0.syn( _1.state, {
				corkA: ( _1.state.totalHeight - _1.state.borderSize ) * _1.state.x
				, corkB2: ( _1.state.totalWidth - _1.state.borderSize ) * _1.state.x
			}, 'n' )
			; return _1
			;
		}
		_0.syn( _1.state, {
			corkA: ( _1.state.totalWidth - _1.state.borderSize ) * _1.state.x
			, corkB2: ( _1.state.totalHeight - _1.state.borderSize ) * _1.state.x
		}, 'n' )
		;
	}
	return _1
	;
	function _PythagMetal() {
		this.$auth = 'besta.pe'
	}
	function PythagMetal( $0 ) {
		this.state = $0[ 1 ]
		; this.axa = Math.pow( this.state.a, 2 )
		; this.bxb = Math.pow( this.state.b2 / 2, 2 )
		; this.cxc = this.axa + this.bxb
		; this.c = Math.pow( this.cxc, 1 / 2 )
	}
} )
;
