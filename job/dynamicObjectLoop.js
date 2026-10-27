( new function dynamicObjectLoop( $0, $1 ) {
	if ( this instanceof dynamicObjectLoop ) {
		module.exports = dynamicObjectLoop
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function next() {
		const _2 = _0.tie( _1, _1.next, new _Next, new Next )
		; if ( _1.count > -1 ) {
			_1.state.writeFile(
				_1.state.file, _1.string, _1.state.writeOptions, _1.writeNext
			)
			; return _2
			;
		}
		if ( _1.count > -2 && _1.state.cork ) {
			_0.syn( _1.state, {
				corkThread: [
					_1.state.corkThread[ 0 ]
					, _1.state.corkThread[ 1 ]
					, _1.state.corkThread[ 2 ]
					, { C: { x: _1.corkX, y: _1.corkY } }
				]
			}, 'n' )
			; _1.string += _1.printCork()
			; _1.state.writeFile(
				_1.state.file, _1.string, _1.state.writeOptions, _1.writeNext
			)
			; return _2
			;
		}
		_1.state.part1Loop()
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
	function printCork() {
		const _2 = _0.tie( _1, _1.printCork, new _PrintCork, new PrintCork )
		; return '  <rect\n'
			+ '	  id="' + _1.state.id + 'Infinity"\n'
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
	function printObjectEnd() {
		const _2 = _0.tie( _1, _1.printObjectEnd, new _PrintObjectEnd, new PrintObjectEnd )
		; return '	  stroke="' + _1.state.cellBorderColour + '"\n'
			+ '	  stroke-width="' + _1.state.cellBorderSize + '"\n'
			+ '	  opacity="' + _1.state.opacity + '"\n'
			+ '	  fill="' + _1.state.colours[
				( _1.index - 1 ) % _1.state.colours.length
			] + '" />\n'
		;
		function _PrintObjectEnd() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PrintObjectEnd() {
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
		; _1.string += _1.printObjectEnd()
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
		_0.dynamicObjectLoop( [ _0, _1.state, _1.count ] )
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
	const _1 = _0.tie( _0, dynamicObjectLoop, new _DynamicObjectLoop, new DynamicObjectLoop( $0 ) )
	; _1.count --
	; if ( _1.state.images ) {
		_1.string += '	  width="0"\n'
			+ '	  href="data:image/' + _1.state.imageType + ';base64,'
		; _1.readFile(
			_1.state.images[ ( _1.index - 1 ) % _1.state.images.length ]
			, 'base64'
			, _1.readNext
		)
		; return _1
		;
	}
	_1.string += _1.printObjectEnd()
	; _1.next()
	; return _1
	;
	function _DynamicObjectLoop() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function DynamicObjectLoop( $0 ) {
		this.state = $0[ 1 ]
		; this.count = $0[ 2 ]
		; this.corkX = undefined
		; this.corkY = undefined
		; this.index = this.state.repeat - this.count + 1
		; this.next = next
		; this.printCork = printCork
		; this.printObjectEnd = printObjectEnd
		; this.readFile = require( 'fs' ).readFile
		; this.readNext = readNext
		; this.string = ( this.state.images ? '  <image\n' : '  <rect\n' )
			+ '	  id="' + this.state.id + this.index + '"\n'
		; this.writeNext = writeNext
	}
} )
;
