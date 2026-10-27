( new function footer( $0, $1 ) {
	if ( this instanceof footer ) {
		module.exports = footer
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function printPause() {
		const _2 = _0.tie( _1, _1.printPause, new _PrintPause, new PrintPause )
		; return '  <animate\n'
			+ '	  href="#' + _1.href + '"\n'
			+ '	  id="' + _1.state.id + 'ResetAnimate"\n'
			+ '	  attributeName="fill"\n'
			+ '	  values="' + _1.endColour + '"\n'
			+ '	  dur="' + _1.state.pause + '"\n'
			+ '	  begin="' + _1.begin0 + '.end"\n'
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
	function printReset( $0 ) {
		const _2 = _0.tie( _1, _1.printReset, new _PrintReset, new PrintReset( $0 ) )
		; return '  <animate\n'
			+ '	  href="#' + _2.href + '"\n'
			+ ( _2.id ? '	  id="' + _1.state.id + 'EndAnimate"\n' : '' )
			+ '	  attributeName="' + _2.attributeName + '"\n'
			+ '	  values="' + _2.value + '"\n'
			+ '	  dur="' + _1.state.pause + '"\n'
			+ '	  begin="' + _2.begin + '.end"\n'
			+ '	  fill="freeze" />\n'
		;
		function _PrintReset() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintReset( $0 ) {
			this.href = $0.href
			; this.id = $0.id || false
			; this.attributeName = $0.attributeName
			; this.value = $0.value
			; this.begin = $0.begin
		}
	}
	function writeNext( $0 ) {
		const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
		; if ( _2.error ) {
			_0.log( 'warn', String( _2.error ), _1 )
			;
		}
		_0.log(
			'log'
			, 'Finished making ' + _1.state.file
				+ ' with a ' + _1.state.x + ' scale invariant.\n'
				+ ' :0) :O) :o)'
			, _1
		)
		; if ( typeof _1.state.callback === 'function' ) {
			_1.state.callback( _1.state )
		}
		; return _2
		;
		function _WriteNext() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function WriteNext( $0 ) {
			this.error = $0
		}
	}
	const _1 = _0.tie( _0, footer, new _Footer, new Footer( $0 ) )
	; _1.string += '  <!-- dynamic ' + _1.state.id + ' objects end -->\n'
	; if ( _1.state.loop || _1.state.clickStart ) {
		if ( _1.pause ) {
			_1.string += _1.printPause()
			; _1.string += _1.printReset( {
				href: _1.href
				, id: true
				, attributeName: 'fill'
				, value: _1.state.startColour
				, begin: _1.begin1
			} )
			;
		} else {
			_1.string += _1.printReset( {
				href: _1.href
				, attributeName: 'fill'
				, value: _1.state.startColour
				, begin: _1.begin0
			} )
			;
		}
		while ( _1.count < _1.state.repeat + 1 ) {
			_1.string += _1.printReset( {
				href: _1.state.id + _1.count
				, attributeName: 'width'
				, value: 0
				, begin: _1.pause ? _1.begin1 : _1.begin0
			} )
			; _1.count ++
			;
		}
		if ( _1.state.cork && _1.pause ) {
			_1.string += _1.printReset( {
				href: _1.state.id + 'Infinity'
				, attributeName: 'width'
				, value: 0
				, begin: _1.begin1
			} )
			; _1.string += _1.printReset( {
				href: _1.state.id + 'Cork'
				, attributeName: 'width'
				, value: _1.state.vertical ? _1.state.corkA : _1.state.a
				, begin: _1.begin1
			} )
			;
		}
	}
	_1.string += (
		_1.state.embed ? '  <!-- ' + _1.state.id + ' end -->' : '</svg>\n'
	)
	; _1.state.writeFile(
		_1.state.file, _1.string, _1.state.writeOptions, _1.writeNext
	)
	; return _1
	;
	function _Footer() {
		this.$auth = 'besta.pe'
	}
	function Footer( $0 ) {
		this.state = $0[ 1 ]
		; this.begin0 = this.state.id + this.state.repeat
			+ 'animate' + this.state.repeat
		; this.begin1 = this.state.id + 'ResetAnimate'
		; this.count = this.state.pause === '0s' ? 2 : 1
		; this.endColour = this.state.colours[
			( this.state.globalCount + 1 ) % this.state.colours.length
		]
		; this.href = this.state.id + ( this.state.repeat + 1 )
		; this.pause = this.state.pause === '0s' ? false : true
		; this.printPause = printPause
		; this.printReset = printReset
		; this.string = '  <!-- ' + this.state.id + ' animation end -->\n'
		; this.writeNext = writeNext
	}
} )
;
