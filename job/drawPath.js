( new function drawPath( $0, $1 ) {
	if ( this instanceof drawPath ) {
		module.exports = drawPath
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function printCurve( $0 ) {
		const _2 = _0.tie( _1, _1.printCurve, new _PrintCurve, new PrintCurve( $0 ) )
		; return '  <path\n'
			+ '	  id="' + _2.id + '"\n'
			+ '	  d="M ' + _1.point.A.x + ' ' + _1.point.A.y + '\n'
			+ '		 A ' + _1.radius + ' ' + _1.radius + '\n'
			+ '		 0, 0, 0 '
			+ _1.point.B.x + ' ' + _1.point.B.y + '"\n'
			+ '	  opacity="' + _1.opacity + '"\n'
			+ '	  stroke-width="' + _2.size + '"\n'
			+ '	  stroke="' + _2.colour + '" />\n'
		;
		function _PrintCurve() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintCurve( $0 ) {
			this.id = $0.id
			; this.size = $0.size
			; this.colour = $0.colour
		}
	}
	function printLine( $0 ) {
		const _2 = _0.tie( _1, _1.printLine, new _PrintLine, new PrintLine( $0 ) )
		; return '  <path\n'
			+ '	  id="' + _2.id + '"\n'
			+ '	  d="M ' + _1.point.B.x + ' ' + _1.point.B.y + '\n'
			+ '		 L ' + _1.point.C.x + ' ' + _1.point.C.y + '"\n'
			+ '	  opacity="' + _1.opacity + '"\n'
			+ '	  stroke-width="' + _2.size + '"\n'
			+ '	  stroke="' + _2.colour + '" />\n'
		;
		function _PrintLine() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintLine( $0 ) {
			this.id = $0.id
			; this.size = $0.size
			; this.colour = $0.colour
		}
	}
	const _1 = _0.tie( _0, drawPath, new _DrawPath, new DrawPath( $0 ) )
	; _1.string += '  <!-- ' + _1.id
		+ ' animate' + _1.state.localCount + ' path start -->\n'
	; _1.string += _1.printCurve( {
		id: _1.id + 'curve1in1'
		, size: _1.innerSize
		, colour: _1.innerColour
	} )
	; _1.string += _1.printCurve( {
		id: _1.id + 'curve1'
		, size: _1.outerSize
		, colour: _1.outerColour
	} )
	; _1.string += _1.printLine( {
		id: _1.id + 'line1in1'
		, size: _1.innerSize
		, colour: _1.innerColour
	} )
	; _1.string += _1.printLine( {
		id: _1.id + 'line1'
		, size: _1.outerSize
		, colour: _1.outerColour
	} )
	; _1.string += '  <!-- ' + _1.id
		+ ' animate' + _1.state.localCount + ' path end -->\n'
	; return _1.string
	;
	function _DrawPath() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function DrawPath( $0 ) {
		this.state = $0[ 1 ]
		; this.part = $0[ 2 ]
		; this.cork = Boolean( $0[ 3 ] )
		; this.id = this.state.id
			+ ( this.cork ? 'Infinity' : '' )
			+ this.state.globalCount
		; this.innerColour = 'black'
		; this.innerSize = 0.5
		; this.opacity = 0.5
		; this.outerColour = this.cork
			? this.state.colours[ ( this.state.globalCount ) % this.state.colours.length ]
			: this.state.colours[ ( this.state.globalCount - 1 ) % this.state.colours.length ]
		; this.outerSize = 2
		; this.point = this.cork
			? this.part.thisCorkRecord
			: this.part.thisRecord
		; this.printCurve = printCurve
		; this.printLine = printLine
		; this.radius = this.cork ? this.part.corkRadius : this.part.radius
		; this.string = ''
	}
} )
;
