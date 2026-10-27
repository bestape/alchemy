( new function animateShrink( $0, $1 ) {
	if ( this instanceof animateShrink ) {
		module.exports = animateShrink
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function printFromTo( $0 ) {
		const _2 = _0.tie( _1, _1.printFromTo, new _PrintFromTo, new PrintFromTo( $0 ) )
		; return '  <animate\n'
			+ '	  href="#' + _1.href + '"\n'
			+ ( _2.id ? '	  id="' + _2.id + '"\n' : '' )
			+ '	  attributeName="' + _2.type + '"\n'
			+ '	  from="' + _2.from + '"\n'
			+ '	  to="' + _2.to + '"\n'
			+ '	  dur="' + _1.speed + '"\n'
			+ '	  begin="' + _1.begin + '"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintFromTo() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintFromTo( $0 ) {
			this.type = $0.type
			; this.id = $0.id || null
			; this.from = $0.from
			; this.to = $0.to
		}
	}
	function printPause() {
		const _2 = _0.tie( _1, _1.printPause, new _PrintPause, new PrintPause )
		; return '  <animate\n'
			+ '	  href="#' + _1.href + '"\n'
			+ '	  id="' + _1.id + '"\n'
			+ '	  dur="' + _1.state.pause + '"\n'
			+ '	  begin="' + _1.id + 'shrink.end"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintPause() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintPause() {
			this.ok = true
		}
	}
	const _1 = _0.tie( _0, animateShrink, new _AnimateShrink, new AnimateShrink( $0 ) )
	; if ( _1.state.vertical ) {
		_0.syn( _1, {
			flip: _1.state.localCount % 2 > 0
		}, 'n' )
		;
	}
	if ( _1.cork ) {
		_0.syn( _1, {
			href: _1.state.id + 'Infinity'
			, height: _1.state.corkA
			, width: _1.state.corkB2
		}, 'n' )
		; if ( _1.flip ) {
			_0.syn( _1, {
				height: _1.state.corkB2
				, width: _1.state.corkA
			}, 'n' )
			;
		}
	} else if ( _1.flip ) {
		_0.syn( _1, {
			height: _1.state.a
			, width: _1.state.b2
		}, 'n' )
		;
	}
	_1.string += _1.printFromTo( {
		type: 'width'
		, href: _1.href
		, from: _1.height * _1.thisPower
		, to: _1.height * _1.nextPower
	} )
	; _1.string += _1.printFromTo( {
		type: 'height'
		, href: _1.href
		, id: _1.id + ( _1.pause ? 'shrink' : '' )
		, from: _1.width * _1.thisPower
		, to: _1.width * _1.nextPower
	} )
	; if ( _1.pause ) {
		_1.string += _1.printPause()
		;
	}
	if ( _1.cork ) {
		_1.string += '  <!-- ' + _1.state.id + _1.state.globalCount
			+ ' animate' + _1.state.localCount + ' cork end -->\n'
		;
	}
	return _1.string
	;
	function _AnimateShrink() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function AnimateShrink( $0 ) {
		this.state = $0[ 1 ]
		; this.part = $0[ 2 ]
		; this.cork = Boolean( $0[ 3 ] )
		; this.begin = this.state.id + this.state.globalCount
			+ 'animate' + this.state.localCount
			+ ( this.cork ? 'Infinity' : '' )
			+ 'path1.end'
		; this.flip = this.state.localCount % 2 > 0 ? false : true
		; this.height = this.state.b2
		; this.href = this.state.id + this.state.globalCount
		; this.id = this.state.id + this.state.globalCount
			+ 'animate' + this.state.localCount
		; this.nextPower = this.part.xPower
		; this.pause = this.state.pause === '0s' ? false : true
		; this.printFromTo = printFromTo
		; this.printPause = printPause
		; this.speed = this.state.speed.substr( 0, this.state.speed.length - 1 ) / 2
			+ this.state.speed.substr( this.state.speed.length - 1 )
		; this.string = ''
		; this.thisPower = this.part.xPowerMinus1
		; this.width = this.state.a
	}
} )
;
