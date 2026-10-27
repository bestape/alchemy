( new function animateSize( $0, $1 ) {
	if ( this instanceof animateSize ) {
		module.exports = animateSize
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function printValue( $0 ) {
		const _2 = _0.tie( _1, _1.printValue, new _PrintValue, new PrintValue( $0 ) )
		; return '  <animate\n'
			+ '	  href="#' + _1.href + '"\n'
			+ '	  attributeName="' + _2.type + '"\n'
			+ '	  values="' + _2.value + '"\n'
			+ '	  begin="' + _1.begin + '"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintValue() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintValue( $0 ) {
			this.type = $0.type
			; this.value = $0.value
		}
	}
	const _1 = _0.tie( _0, animateSize, new _AnimateSize, new AnimateSize( $0 ) )
	; if ( ( _1.state.vertical && ! _1.cork ) || _1.cork ) {
		_0.syn( _1, {
			flip: _1.state.localCount % 2 > 0
		}, 'n' )
		;
	}
	if ( _1.cork ) {
		_1.string += '  <!-- ' + _1.state.id + _1.state.globalCount
			+ ' animate' + _1.state.localCount + ' cork start -->\n'
		; _0.syn( _1, {
			href: _1.state.id + 'Infinity'
			, height: _1.state.corkA
			, width: _1.state.corkB2
		}, 'n' )
		; if (
			( ! _1.state.vertical && _1.flip )
			|| ( _1.state.vertical && ! _1.flip )
		) {
			_0.syn( _1, {
				height: _1.state.corkB2
				, width: _1.state.corkA
			}, 'n' )
			;
		}
		if ( _1.state.localCount === 1 ) {
			_0.syn( _1, {
				href: _1.state.id + 'Cork'
			}, 'n' )
			; _1.string += _1.printValue( {
				type: 'width'
				, value: 0
			} )
			; _0.syn( _1, {
				href: _1.state.id + 'Infinity'
			}, 'n' )
			;
		}
	} else if ( _1.flip ) {
		_0.syn( _1, {
			height: _1.state.b2
			, width: _1.state.a
		}, 'n' )
		;
	}
	_1.string += _1.printValue( {
		type: 'width'
		, value: _1.width * _1.thisPower
	} )
	; _1.string += _1.printValue( {
		type: 'height'
		, value: _1.height * _1.thisPower
	} )
	; return _1.string
	;
	function _AnimateSize() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function AnimateSize( $0 ) {
		this.state = $0[ 1 ]
		; this.part = $0[ 2 ]
		; this.cork = Boolean( $0[ 3 ] )
		; this.begin = this.part.begin
		; this.flip = this.state.localCount % 2 > 0 ? false : true
		; this.height = this.state.a
		; this.href = this.state.id + this.state.globalCount
		; this.printValue = printValue
		; this.string = ''
		; this.thisPower = this.part.xPowerMinus1
		; this.width = this.state.b2
	}
} )
;
