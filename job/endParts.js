( new function endParts( $0, $1 ) {
	if ( this instanceof endParts ) {
		module.exports = endParts
		; return
		;
	}
	const _0 = $0[ 0 ]
	; const _1 = _0.tie( _0, endParts, new _EndParts, new EndParts( $0 ) )
	; _1.state.globalCount ++
	; if ( _1.state.repeat - _1.state.globalCount + 1 ) {
		_0.syn( _1.state, {
			localCount: 1
			, corkThread: [ null, null, null, null ]
			, thread: [ null, null, null, null ]
		}, 'n' )
		; _1.state.part1Loop()
		; return _1
		;
	}
	_0.footer( [ _0, _1.state ] )
	; return _1
	;
	function _EndParts() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function EndParts( $0 ) {
		this.state = $0[ 1 ]
	}
} )
;
