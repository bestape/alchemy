( new function animateMotion( $0, $1 ) {
	if ( this instanceof animateMotion ) {
		module.exports = animateMotion
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function printCurve() {
		const _2 = _0.tie( _1, _1.printCurve, new _PrintCurve, new PrintCurve )
		; return '  <animateMotion\n'
			+ '	  href="#' + _1.href + '"\n'
			+ '	  id="' + _1.id + 'path1"\n'
			+ '	  path="'
			+ 'M ' + _1.point.A.x + ' ' + _1.point.A.y + '\n'
			+ '			A ' + _1.radius + ' ' + _1.radius + '\n'
			+ '			0, 0, 0 '
			+ _1.point.B.x + ' ' + _1.point.B.y + '"\n'
			+ '	  rotate="auto-reverse"\n'
			+ '	  dur="' + _1.speed + '"\n'
			+ '	  begin="' + _1.begin0 + '"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintCurve() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintCurve() {
			this.ok = true
		}
	}
	function printLine() {
		const _2 = _0.tie( _1, _1.printLine, new _PrintLine, new PrintLine )
		; return '  <animateMotion\n'
			+ '	  href="#' + _1.href + '"\n'
			+ '	  path="'
			+ 'M ' + _1.point.B.x + ' ' + _1.point.B.y + '\n'
			+ '			L ' + _1.point.C.x + ' ' + _1.point.C.y + '"\n'
			+ '	  dur="' + _1.speed + '"\n'
			+ '	  begin="' + _1.id + 'path1.end"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintLine() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintLine() {
			this.ok = true
		}
	}
	function printRotate( $0 ) {
		const _2 = _0.tie( _1, _1.printRotate, new _PrintRotate, new PrintRotate( $0 ) )
		; return '  <animateTransform\n'
			+ '	  xlink:href="#' + _1.href + '"\n'
			+ '	  attributeName="transform"\n'
			+ '	  type="rotate"\n'
			+ '	  from="' + _2.from + '"\n'
			+ '	  to="' + _2.to + '"\n'
			+ '	  begin="' + _2.begin + '"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintRotate() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintRotate( $0 ) {
			this.from = $0.from
			; this.to = $0.to
			; this.begin = $0.begin
		}
	}
	function printScale( $0 ) {
		const _2 = _0.tie( _1, _1.printScale, new _PrintScale, new PrintScale( $0 ) )
		; return '  <animateTransform\n'
			+ '	  xlink:href="#' + _1.href + '"\n'
			+ '	  attributeName="transform"\n'
			+ '	  type="scale"\n'
			+ '	  values="' + _2.x + ' ' + _2.y + '"\n'
			+ '	  begin="' + _2.begin + '"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintScale() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintScale( $0 ) {
			this.x = $0.x
			; this.y = $0.y
			; this.begin = $0.begin
		}
	}
	const _1 = _0.tie( _0, animateMotion, new _AnimateMotion, new AnimateMotion( $0 ) )
	; if ( _1.cork ) {
		_0.syn( _1, {
			href: _1.state.id + 'Infinity'
			, id: _1.id + 'Infinity'
			, part2Loop: _1.state.localCount % 4 === 1
			, part3Loop: _1.state.localCount % 4 === 2
			, part4Loop: _1.state.localCount % 4 === 3
			, part1Loop: _1.state.localCount % 4 === 0
		}, 'n' )
		;
	}
	if ( _1.state.vertical ) {
		if ( _1.cork ) {
			_0.syn( _1, {
				part3Loop: _1.state.localCount % 4 === 1
				, part4Loop: _1.state.localCount % 4 === 2
				, part1Loop: _1.state.localCount % 4 === 3
				, part2Loop: _1.state.localCount % 4 === 0
			}, 'n' )
			;
		} else {
			_0.syn( _1, {
				part2Loop: _1.state.localCount % 4 === 1
				, part3Loop: _1.state.localCount % 4 === 2
				, part4Loop: _1.state.localCount % 4 === 3
				, part1Loop: _1.state.localCount % 4 === 0
			}, 'n' )
			;
		}
	}
	if ( _1.part1Loop || _1.part3Loop ) {
		_1.string += _1.printRotate( {
			from: 90
			, to: 0
			, begin: _1.begin0
		} )
		;
	}
	if ( _1.part2Loop || _1.part4Loop ) {
		_1.string += _1.printScale( {
			x: -1
			, y: 1
			, begin: _1.begin0
		} )
		;
	}
	_1.string += _1.printCurve()
	; _1.string += _1.printLine()
	; if ( _1.part1Loop ) {
		_1.string += _1.printRotate( {
			from: 0
			, to: -90
			, begin: _1.begin1
		} )
		;
	}
	if ( _1.part2Loop ) {
		_1.string += _1.printScale( {
			x: 1
			, y: -1
			, begin: _1.begin1
		} )
		;
	}
	if ( _1.part3Loop ) {
		_1.string += _1.printScale( {
			x: -1
			, y: -1
			, begin: _1.begin1
		} )
		;
	}
	return _1.string
	;
	function _AnimateMotion() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function AnimateMotion( $0 ) {
		this.state = $0[ 1 ]
		; this.part = $0[ 2 ]
		; this.cork = Boolean( $0[ 3 ] )
		; this.begin0 = this.part.begin
		; this.begin1 = this.state.id + this.state.globalCount
			+ 'animate' + this.state.localCount
			+ ( this.cork ? 'Infinity' : '' )
			+ 'path1.end'
		; this.href = this.state.id + this.state.globalCount
		; this.id = this.state.id + this.state.globalCount
			+ 'animate' + this.state.localCount
		; this.part1Loop = this.state.localCount % 4 === 1
		; this.part2Loop = this.state.localCount % 4 === 2
		; this.part3Loop = this.state.localCount % 4 === 3
		; this.part4Loop = this.state.localCount % 4 === 0
		; this.point = this.cork
			? this.part.thisCorkRecord
			: this.part.thisRecord
		; this.printCurve = printCurve
		; this.printLine = printLine
		; this.printRotate = printRotate
		; this.printScale = printScale
		; this.radius = this.cork
			? this.part.corkRadius
			: this.part.radius
		; this.speed = this.state.speed.substr( 0, this.state.speed.length - 1 ) / 2
			+ this.state.speed.substr( this.state.speed.length - 1 )
		; this.string = ''
	}
} )
;
