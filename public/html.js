( new function html() {
	if ( typeof window === 'undefined' || typeof document === 'undefined' ) {
		if ( typeof module !== 'undefined' && module.exports ) {
			module.exports = html
		}
		return
		;
	}
	const _0 = window.seed(
		html
		, new _Html
		, new Html
	)
	; window.html = html
	; function change( $0 ) {
		const _1 = _0.tie( _0, change, new _Change, new Change( $0 ) )
		; if ( _1.mod.picture ) {
			if ( _1.mod.vertical ) {
				if ( _1.mod.click % 4 === 0 ) {
					_1.mod.context.scale( -1, -1 )
					;
				}
				if ( _1.mod.click % 4 === 1 ) {
					_1.mod.context.rotate( Math.PI / -2 )
					; _1.mod.context.scale( -1, -1 )
					;
				}
				if ( _1.mod.click % 4 === 2 ) {
					_1.mod.context.rotate( Math.PI / -1 )
					; _1.mod.context.scale( -1, -1 )
					;
				}
				if ( _1.mod.click % 4 === 3 ) {
					_1.mod.context.rotate( Math.PI / 2 )
					; _1.mod.context.scale( -1, -1 )
					;
				}
				return _1
				;
			}
			if ( _1.mod.click % 4 === 1 ) {
				_1.mod.context.rotate( Math.PI / -2 )
				;
			}
			if ( _1.mod.click % 4 === 2 ) {
				_1.mod.context.rotate( Math.PI / -1 )
				;
			}
			if ( _1.mod.click % 4 === 3 ) {
				_1.mod.context.rotate( Math.PI / 2 )
				;
			}
			return _1
			;
		}
		if ( _1.mod.vertical ) {
			if ( _1.mod.click % 4 === 1 ) {
				_1.mod.context.rotate( Math.PI / -2 )
				; _1.mod.context.scale( -1, 1 )
				;
			}
			if ( _1.mod.click % 4 === 2 ) {
				_1.mod.context.rotate( Math.PI / -1 )
				; _1.mod.context.scale( -1, -1 )
				;
			}
			if ( _1.mod.click % 4 === 3 ) {
				_1.mod.context.rotate( Math.PI / 2 )
				; _1.mod.context.scale( 1, -1 )
				;
			}
			return _1
			;
		}
		if ( _1.mod.click % 4 === 0 ) {
			_1.mod.context.scale( -1, 1 )
			;
		}
		if ( _1.mod.click % 4 === 1 ) {
			_1.mod.context.rotate( Math.PI / -2 )
			;
		}
		if ( _1.mod.click % 4 === 2 ) {
			_1.mod.context.rotate( Math.PI / -1 )
			; _1.mod.context.scale( 1, -1 )
			;
		}
		if ( _1.mod.click % 4 === 3 ) {
			_1.mod.context.rotate( Math.PI / 2 )
			; _1.mod.context.scale( -1, -1 )
			;
		}
		return _1
		;
		function _Change() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Change( $0 ) {
			this.mod = $0
		}
	}
	function drop() {
		function dropNext( $0 ) {
			const _2 = _0.tie( _1, _1.dropNext, new _DropNext, new DropNext( $0 ) )
			; _0.handle( _2.evt.dataTransfer.files )
			; return _2
			;
			function _DropNext() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function DropNext( $0 ) {
				this.evt = $0
			}
		}
		function noDefault( $0 ) {
			const _2 = _0.tie( _1, _1.noDefault, new _NoDefault, new NoDefault( $0 ) )
			; _2.evt.preventDefault()
			; _2.evt.stopPropagation()
			; return _2
			;
			function _NoDefault() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function NoDefault( $0 ) {
				this.evt = $0
			}
		}
		const _1 = _0.tie( _0, drop, new _Drop, new Drop )
		; _0.interfaceButton.addEventListener(
			'dragenter', _1.noDefault, false
		)
		; _0.interfaceButton.addEventListener(
			'dragleave', _1.noDefault, false
		)
		; _0.interfaceButton.addEventListener(
			'dragover', _1.noDefault, false
		)
		; _0.interfaceButton.addEventListener(
			'drop', _1.noDefault, false
		)
		; _0.interfaceButton.addEventListener(
			'drop', _1.dropNext, false
		)
		; return _1
		;
		function _Drop() {
			this.$auth = 'besta.pe'
		}
		function Drop() {
			this.dropNext = dropNext
			; this.noDefault = noDefault
		}
	}
	function handle( $0 ) {
		const _1 = _0.tie( _0, handle, new _Handle, new Handle( $0 ) )
		; while ( _1.length > _1.clickAll ) {
			if ( _0.validate( _1.image[ _1.clickAll ] ) ) {
				_1.clickSet ++
				; _0.input( {
					clickSet: _1.clickSet
					, image: _1.image[ _1.clickAll ]
				} )
				;
			}
			_1.clickAll ++
			;
		}
		return _1
		;
		function _Handle() {
			this.$auth = 'besta.pe'
		}
		function Handle( $0 ) {
			this.clickAll = 0
			; this.clickSet = _0.doc.getElementsByClassName( 'image' ).length
			; this.image = $0
			; this.length = $0.length
		}
	}
	function input( $0 ) {
		function readerNext( $0 ) {
			const _2 = _0.tie( _1, _1.readerNext, new _ReaderNext, new ReaderNext( $0 ) )
			; _0.syn( _1.inputImg, {
				src: _2.evt.target.result
			}, 'n' )
			; return _2
			;
			function _ReaderNext() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function ReaderNext( $0 ) {
				this.evt = $0
			}
		}
		const _1 = _0.tie( _0, input, new _Input, new Input( $0 ) )
		; _1.basinDiv.append( _1.inputDiv )
		; _1.inputDiv.append( _1.inputImg )
		; _1.reader.readAsDataURL( _1.image )
		; _1.inputDiv.addEventListener( 'click', () => {
			_1.inputDiv.remove()
			;
		} )
		; return _1
		;
		function _Input() {
			this.$auth = 'besta.pe'
		}
		function Input( $0 ) {
			this.basinDiv = _0.doc.getElementById( 'basin' )
			; this.click = 0
			; this.clickSet = $0.clickSet
			; this.image = $0.image
			; this.inputImg = _0.doc.createElement( 'img' )
			; this.inputImg.className = 'input'
			; this.inputImg.id = 'input' + this.clickSet
			; this.inputDiv = _0.doc.createElement( 'div' )
			; this.inputDiv.className = 'feedback'
			; this.readerNext = readerNext
			; this.reader = new FileReader()
			; this.reader.onload = readerNext
			; this.storeDiv = _0.doc.getElementById( 'store' )
		}
	}
	function listen() {
		function downloadNext() {
			const _2 = _0.tie( _1, _1.downloadNext, new _DownloadNext, new DownloadNext )
			; if ( _2.file ) {
				_2.file.click()
				;
			}
			return _2
			;
			function _DownloadNext() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function DownloadNext() {
				this.file = _0.doc.getElementById( 'file' )
			}
		}
		function makeNext() {
			const _2 = _0.tie( _1, _1.makeNext, new _MakeNext, new MakeNext )
			; if ( _2.input.length > 0 ) {
				_0.refresh()
				; return _2
				;
			}
			if ( _2.store ) {
				_2.store.remove()
				;
			}
			_0.alchemy.click()
			; return _2
			;
			function _MakeNext() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function MakeNext() {
				this.input = _0.doc.getElementsByClassName( 'input' )
				; this.store = _0.doc.getElementById( 'store' )
			}
		}
		const _1 = _0.tie( _0, listen, new _Listen, new Listen )
		; _0.download.addEventListener( 'click', _1.downloadNext )
		; _0.make.addEventListener( 'click', _1.makeNext )
		; return _1
		;
		function _Listen() {
			this.$auth = 'besta.pe'
		}
		function Listen() {
			this.downloadNext = downloadNext
			; this.makeNext = makeNext
		}
	}
	function modify( $0 ) {
		const _1 = _0.tie( _0, modify, new _Modify, new Modify( $0 ) )
		; if ( _1.canvas.width === 0 ) {
			if ( ! _1.attempt ) {
				_0.syn( _1, { attempt: 0 }, 'n' )
				;
			}
			_1.attempt ++
			; if ( _1.attempt > 20 ) {
				_0.log( 'warn', 'no width', _1 )
				; return _1
				;
			}
			_0.log( 'warn', 'relied on setTimeout x' + _1.attempt, _1 )
			; setTimeout( () => {
				modify( _1 )
				;
			}, 1 )
			; return _1
			;
		}
		_1.context.translate(
			_1.canvas.width / 2, _1.canvas.height / 2
		)
		; if ( _1.picture || _1.clickSet > 0 ) {
			_0.change( _1 )
			;
		}
		_1.context.translate(
			_1.canvas.width / -2, _1.canvas.height / -2
		)
		; _1.context.drawImage(
			_1.inputImg
			, ( _1.canvas.width - _1.inputImg.naturalWidth ) / 2
			, ( _1.canvas.height - _1.inputImg.naturalHeight ) / 2
		)
		; _0.syn( _1.imageA, {
			href: _1.canvas.toDataURL( 'image/png' )
		}, 'n' )
		; _1.imageDiv.append( _1.imageA )
		; if ( ( _1.length - 0 === _1.clickSet ) && _1.click > 2 ) {
			_0.alchemy.click()
			;
		}
		return _1
		;
		function _Modify() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Modify( $0 ) {
			this.attempt = $0.attempt
			; this.canvas = _0.doc.createElement( 'canvas' )
			; this.canvas.height = $0.click % 2 === 1
				? $0.inputImg.naturalWidth
				: $0.inputImg.naturalHeight
			; this.canvas.width = $0.click % 2 === 1
				? $0.inputImg.naturalHeight
				: $0.inputImg.naturalWidth
			; this.click = $0.click
			; this.clickSet = $0.clickSet
			; this.context = this.canvas.getContext( '2d' )
			; this.data = JSON.parse(
				_0.doc.getElementById( 'json' ).innerHTML
			)
			; this.imageA = _0.doc.createElement( 'a' )
			; this.imageA.id = 'image' + this.click
			; this.imageDiv = $0.imageDiv
			; this.inputImg = $0.inputImg
			; this.length = $0.length
			; this.picture = this.data.picture
			; this.vertical = this.data.vertical
		}
	}
	function refresh() {
		function next() {
			const _2 = _0.tie( _1, _1.next, new _Next, new Next )
			; _1.newStoreDiv.append( _2.imageDiv )
			; if ( 0 === _2.clickSet ) {
				_0.modify( _2 )
				; return _2
				;
			}
			while ( _2.click < 4 ) {
				_0.modify( _2 )
				; _2.click ++
				;
			}
			return _2
			;
			function _Next() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function Next() {
				this.click = 0
				; this.clickSet = _1.click
				; this.imageDiv = _0.doc.createElement( 'div' )
				; this.imageDiv.className = 'image'
				; this.imageDiv.id = 'image' + this.clickSet
				; this.inputCount = 1 > this.clickSet
					? this.clickSet
					: this.clickSet - 1
				; this.inputImg = _1.input[ this.inputCount ]
				; this.length = _1.length - 1
			}
		}
		const _1 = _0.tie( _0, refresh, new _Refresh, new Refresh )
		; if ( _1.oldStoreDiv ) {
			_1.oldStoreDiv.remove()
			;
		}
		_1.interfaceButton.after( _1.newStoreDiv )
		; while ( _1.length > _1.click ) {
			if ( 0 === _1.click ) {
				_1.next()
				; _1.click ++
				;
			}
			_1.next()
			; _1.click ++
			;
		}
		return _1
		;
		function _Refresh() {
			this.$auth = 'besta.pe'
		}
		function Refresh() {
			this.click = 0
			; this.input = [
				..._0.doc.getElementsByClassName( 'input' )
			]
			; this.interfaceButton = _0.doc.getElementById( 'interfaceButton' )
			; this.length = this.input.length + 1
			; this.next = next
			; this.oldStoreDiv = _0.doc.getElementById( 'store' )
			; this.newStoreDiv = _0.doc.createElement( 'store' )
			; this.newStoreDiv.id = 'store'
		}
	}
	function select() {
		const _1 = _0.tie( _0, select, new _Select, new Select )
		; _0.interfaceButton.addEventListener( 'click', () => {
			_1.selectInput.click()
			;
		} )
		; _1.selectInput.addEventListener( 'change', () => {
			_0.handle( _1.selectInput.files )
			;
		} )
		; return _1
		;
		function _Select() {
			this.$auth = 'besta.pe'
		}
		function Select() {
			this.selectInput = _0.doc.createElement( 'input' )
			; this.selectInput.accept = 'image/*'
			; this.selectInput.multiple = true
			; this.selectInput.type = 'file'
		}
	}
	function validate( $0 ) {
		const _1 = _0.tie( _0, validate, new _Validate, new Validate( $0 ) )
		; if ( _1.types.indexOf( _1.image.type ) === -1 ) {
			alert( 'wrong file type' )
			; return false
			;
		}
		if ( _1.image.size > _1.maxSize ) {
			alert( 'file size over ' + _1.maxSize )
			; return false
			;
		}
		return true
		;
		function _Validate() {
			this.$auth = 'besta.pe'
		}
		function Validate( $0 ) {
			this.image = $0
			; this.maxSize = 10e6
			; this.types = [ 'image/jpeg', 'image/png' ]
		}
	}
	_0.drop()
	; _0.select()
	; _0.listen()
	; if ( _0.doc.monetization ) {
		_0.doc.monetization.addEventListener( 'monetizationprogress', () => {
			_0.syn( _0.doc.getElementById( 'thankYou' ).style, {
				display: 'block'
			}, 'n' )
			;
		} )
		;
	}
	return _0
	;
	function _Html() {
		this.$auth = 'besta.pe'
	}
	function Html() {
		this.log = null
		; this.syn = null
		; this.tie = null
		; this.doc = document
		; this.alchemy = this.doc.getElementById( 'alchemy' )
		; this.change = change
		; this.download = this.doc.getElementById( 'download' )
		; this.drop = drop
		; this.handle = handle
		; this.input = input
		; this.interfaceButton = this.doc.getElementById( 'interface' )
		; this.listen = listen
		; this.make = this.doc.getElementById( 'make' )
		; this.modify = modify
		; this.refresh = refresh
		; this.select = select
		; this.validate = validate
	}
} )
;
