( new function header( $0, $1 ) {
	if ( this instanceof header ) {
		module.exports = header
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function CorkMeasure() {
		this.height = - _1.state.borderSize
			+ (
				_1.state.vertical
					? _1.state.totalHeight
					: _1.state.totalHeight - _1.state.b2
			)
		; this.width = - _1.state.borderSize
			+ (
				_1.state.vertical
					? _1.state.totalWidth - _1.state.b2
					: _1.state.totalWidth
			)
		; this.x = _1.state.offset.x
			+ _1.state.borderSize / 2
			+ ( _1.state.vertical ? _1.state.b2 : 0 )
		; this.y = _1.state.offset.y
			+ _1.state.borderSize / 2
			+ ( _1.state.vertical ? 0 : _1.state.b2 )
	}
	function _CorkMeasure() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function next() {
		const _2 = _0.tie( _1, _1.next, new _Next, new Next )
		; _1.string += _1.printTailEnd()
		; if ( _1.state.cork ) {
			_0.syn( _1, {
				corkMeasure: new _1.CorkMeasure
			}, 'n' )
			; _1.string += _1.printCork()
			;
		}
		_1.string += '  <!-- static ' + _1.state.id + ' objects end -->\n'
		; _1.string += '  <!-- dynamic ' + _1.state.id + ' objects start -->\n'
		; _1.state.writeFile(
			_1.state.file, _1.string, _1.state.writeOptions, _1.writeNext
		)
		; return _2
		;
		function _Next() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Next() {
			this.ok = true
		}
	}
	function printCanvas() {
		const _2 = _0.tie( _1, _1.printCanvas, new _PrintCanvas, new PrintCanvas )
		; return '  <rect\n'
			+ '	  id="' + _1.state.id + '0"\n'
			+ '	  width="' + _1.state.totalWidth + '"\n'
			+ '	  height="' + _1.state.totalHeight + '"\n'
			+ '	  x="' + _1.state.offset.x + '"\n'
			+ '	  y="' + _1.state.offset.y + '"\n'
			+ (
				_1.state.background
					? '	  fill="' + _1.state.background + '"\n'
					: ''
			)
			+ '	  stroke="' + _1.state.borderColour + '"\n'
			+ '	  stroke-width="' + _1.state.borderSize + '" />\n'
		;
		function _PrintCanvas() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintCanvas() {
			this.ok = true
		}
	}
	function printCork() {
		const _2 = _0.tie( _1, _1.printCork, new _PrintCork, new PrintCork )
		; return '  <rect\n'
			+ '	  id="' + _1.state.id + 'Cork"\n'
			+ '	  width="' + _1.corkMeasure.width + '"\n'
			+ '	  height="' + _1.corkMeasure.height + '"\n'
			+ '	  x="' + _1.corkMeasure.x + '"\n'
			+ '	  y="' + _1.corkMeasure.y + '"\n'
			+ '	  stroke="' + _1.state.cellBorderColour + '"\n'
			+ '	  stroke-width="' + _1.state.cellBorderSize + '"\n'
			+ '	  opacity="' + _1.state.opacity + '"\n'
			+ '	  fill="' + _1.state.cork + '" />\n'
		;
		function _PrintCork() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintCork() {
			this.ok = true
		}
	}
	function printParentStart() {
		const _2 = _0.tie( _1, _1.printParentStart, new _PrintParentStart, new PrintParentStart )
		; return '<svg \n'
			+ '	xmlns="http://www.w3.org/2000/svg"\n'
			+ ' 	xmlns:xlink="http://www.w3.org/1999/xlink"\n'
			+ '	version="1.1"\n'
			+ '	viewBox="' + ( - _1.state.viewBoxAdd.width )
			+ ' ' + ( - _1.state.viewBoxAdd.height )
			+ ' ' + _1.viewBoxWidth
			+ ' ' + _1.viewBoxHeight
			+ '"\n'
			+ '	fill="none" >\n'
		;
		function _PrintParentStart() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintParentStart() {
			this.ok = true
		}
	}
	function printTailEnd() {
		const _2 = _0.tie( _1, _1.printTailEnd, new _PrintTailEnd, new PrintTailEnd )
		; return '	  width="' + _1.width + '"\n'
			+ '	  height="' + _1.height + '"\n'
			+ '	  x="' + ( _1.state.offset.x + _1.state.borderSize / 2 ) + '"\n'
			+ '	  y="' + ( _1.state.offset.y + _1.state.borderSize / 2 ) + '"\n'
			+ '	  opacity="' + _1.state.opacity + '"\n'
			+ '	  fill="' + _1.state.startColour + '"\n'
			+ '	  stroke="' + _1.state.cellBorderColour + '"\n'
			+ '	  stroke-width="' + _1.state.cellBorderSize + '" />\n'
		;
		function _PrintTailEnd() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintTailEnd() {
			this.ok = true
		}
	}
	function printTailStart() {
		const _2 = _0.tie( _1, _1.printTailStart, new _PrintTailStart, new PrintTailStart )
		; return ( _1.state.images ? '  <image\n' : '  <rect\n' )
			+ '	  id="' + _1.state.id + ( _1.state.repeat + 1 ) + '"\n'
			+ ( _1.state.images ? '	  href="data:image/jpeg;base64,' : '' )
		;
		function _PrintTailStart() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintTailStart() {
			this.ok = true
		}
	}
	function readNext( $0, $1 ) {
		const _2 = _0.tie( _1, _1.readNext, new _ReadNext, new ReadNext( $0, $1 ) )
		; if ( _2.error ) {
			_0.log( 'warn', String( _2.error ), _1 )
			;
		}
		_1.string += _2.data + '"\n'
		; _1.string += _1.printTailEnd()
		; _1.next()
		; return _2
		;
		function _ReadNext() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function ReadNext( $0, $1 ) {
			this.error = $0
			; this.data = $1
		}
	}
	function writeNext( $0 ) {
		const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
		; if ( _2.error ) {
			_0.log( 'warn', String( _2.error ), _1 )
			;
		}
		_0.dynamicObjectLoop( [ _0, _1.state, _1.state.repeat ] )
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
	const _1 = _0.tie( _0, header, new _Header, new Header( $0 ) )
	; _1.string += _1.printParentStart()
	; if ( _1.state.embed ) {
		_0.syn( _1, { string: '' }, 'n' )
		;
	}
	_1.string += '  <!-- static ' + _1.state.id + ' objects start -->\n'
	; _1.string += _1.printCanvas()
	; _1.string += _1.printTailStart()
	; if ( _1.state.images ) {
		_1.readFile( _1.state.images.shift(), 'base64', _1.readNext )
		; return _1
		;
	}
	_1.next()
	; return _1
	;
	function _Header() {
		this.$auth = 'besta.pe'
	}
	function Header( $0 ) {
		this.state = $0[ 1 ]
		; this.corkMeasure = null
		; this.CorkMeasure = CorkMeasure
		; this._CorkMeasure = _CorkMeasure
		; this.height = this.state.vertical ? this.state.a : this.state.b2
		; this.next = next
		; this.printCanvas = printCanvas
		; this.printCork = printCork
		; this.printParentStart = printParentStart
		; this.printTailStart = printTailStart
		; this.printTailEnd = printTailEnd
		; this.readFile = require( 'fs' ).readFile
		; this.readNext = readNext
		; this.string = ''
		; this.viewBoxWidth = this.state.totalWidth + ( this.state.viewBoxAdd.width * 2 )
		; this.viewBoxHeight = this.state.totalHeight + ( this.state.viewBoxAdd.height * 2 )
		; this.width = this.state.vertical ? this.state.b2 : this.state.a
		; this.writeNext = writeNext
	}
} )
;
