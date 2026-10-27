( new function seed( $0, $1, $2 ) {
	function formatInspect( $0, $1, $2, $3 ) {
		if ( $0 === null ) {
			return '<span style="color:#ff5252;font-weight:bold;">null</span>'
		}
		if ( typeof $0 === 'undefined' ) {
			return '<span class="gry">undefined</span>'
		}
		if ( typeof $0 === 'boolean' || typeof $0 === 'number' ) {
			return '<span class="yel">' + String( $0 ) + '</span>'
		}
		if ( typeof $0 === 'string' ) {
			return '<span class="grn">\'' + String( $0 ).replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' ) + '\'</span>'
		}
		if ( $0 instanceof Date ) {
			return '<span class="purp">' + $0.toISOString() + '</span>'
		}
		if ( typeof $0 === 'function' ) {
			if ( Object.keys( $0 ).length === 0 || $1 > $2 ) {
				return '<span class="env">[Function: ' + ( $0.name || 'anonymous' ) + ']</span>'
			}
			if ( $3.has( $0 ) ) {
				return '<span class="env">[Circular Function: ' + ( $0.name || 'anonymous' ) + ']</span>'
			}
			$3.add( $0 )
			; return '<span class="env">[Function: ' + ( $0.name || 'anonymous' ) + ']</span> {\n'
				+ Object.keys( $0 ).map( ( $4 ) => {
					return '  '.repeat( $1 + 1 ) + $4 + ': ' + formatInspect( $0[ $4 ], $1 + 1, $2, $3 )
				} ).join( ',\n' )
				+ '\n' + '  '.repeat( $1 ) + '}'
		}
		if ( Array.isArray( $0 ) ) {
			if ( $0.length === 0 ) {
				return '[]'
			}
			if ( $1 > $2 ) {
				return '<span class="env">[Array(' + $0.length + ')]</span>'
			}
			if ( $3.has( $0 ) ) {
				return '<span class="env">[Circular]</span>'
			}
			$3.add( $0 )
			; return '[\n'
				+ $0.map( ( $4 ) => {
					return '  '.repeat( $1 + 1 ) + formatInspect( $4, $1 + 1, $2, $3 )
				} ).join( ',\n' )
				+ '\n' + '  '.repeat( $1 ) + ']'
		}
		if ( typeof $0 === 'object' ) {
			if ( $3.has( $0 ) ) {
				return '<span class="env">[Circular]</span>'
			}
			$3.add( $0 )
			; if ( Object.keys( $0 ).length === 0 ) {
				return ( $0.constructor && $0.constructor.name && $0.constructor.name !== 'Object' ? $0.constructor.name + ' ' : '' ) + '{}'
			}
			if ( $1 > $2 ) {
				return '<span class="env">[' + ( $0.constructor && $0.constructor.name ? $0.constructor.name : 'Object' ) + ']</span>'
			}
			return ( $0.constructor && $0.constructor.name && $0.constructor.name !== 'Object' ? $0.constructor.name + ' ' : '' )
				+ '{\n'
				+ Object.keys( $0 ).map( ( $4 ) => {
					return '  '.repeat( $1 + 1 ) + $4 + ': ' + formatInspect( $0[ $4 ], $1 + 1, $2, $3 )
				} ).join( ',\n' )
				+ '\n' + '  '.repeat( $1 ) + '}'
		}
		return String( $0 )
	}
	function log( $0, $1, $2 ) {
		const _1 = _0.tie( _0.local, log, new _Log, new Log( $0, $1, $2 ) )
		; if ( _1.arg0 === 'warn' || _1.arg0 === 'log' || _1.arg0 === 'in' ) {
			_0.syn( _1, {
				color: _1.arg0 === 'warn' ? 'red' : _1.arg0 === 'in' ? 'purp' : 'grn'
				, address: ( _1.arg2 && _1.arg2.$0 )
					? ( _1.arg2.$0.loci + ( _1.arg2.$0.loci === '' ? '' : '.' ) + _1.arg2.$0.id )
					: ( _0.local.$0.loci + '.' + _0.local.$0.id )
				, content: typeof _1.arg1 === 'string'
					? _1.arg1.replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' )
					: _1.print( _1.arg1 )
			} )
		} else {
			_0.syn( _1, {
				color: 'grn'
				, address: ( _1.arg0 && _1.arg0.$0 && typeof _1.arg0.$0.id === 'string' && _1.arg0.$0.id !== 'parent' )
					? ( _1.arg0.$0.loci + ( _1.arg0.$0.loci === '' ? '' : '.' ) + _1.arg0.$0.id )
					: ( _1.$0.loci + '.' + _1.$0.id )
				, content: _1.print( _1.arg0, _1.arg1, _1.arg2 )
			} )
		}
		_1.string += '<span class="env">&gt;</span> <span class="' + _1.color + '">' + _1.address + '</span> <span class="env">&lt;</span>\n'
			+ _1.content + '\n'
			+ '<span class="env">&lt;</span> <span class="' + _1.color + '">' + _1.address + '</span> <span class="env">&gt;</span>\n'
		; if ( typeof window !== 'undefined' && typeof window.__SEED_STDOUT_WRITE__ === 'function' ) {
			window.__SEED_STDOUT_WRITE__( _1.string )
		}
		if ( _1.record ) {
			if ( ! _0.log.history ) {
				Object.defineProperty( _0.log, 'history', { configurable: true, enumerable: false, value: [], writable: true } )
			}
			_0.log.history.unshift( _1.string )
		}
		function _Log() {
			this.$0 = { record: false, show: false }
		}
		function Log( $0, $1, $2 ) {
			this.arg0 = $0
			; this.arg1 = $1
			; this.arg2 = $2
			; this.address = null
			; this.color = null
			; this.content = null
			; this.print = function( $0, $1 ) {
				return formatInspect( $0, 0, typeof $1 === 'number' ? $1 : 0, new WeakSet() )
			}
			; this.record = true
			; this.string = ''
		}
	}
	function syn( $0, $1, $2 ) {
		function update( $0, $1 ) {
			if ( $1 === '$0' ) {
				return
			}
			if ( _1.parent[ $1 ] === null || ( _1.option && _1.option.indexOf( 'n' ) === 0 ) ) {
				_1.parent[ $1 ] = $0[ $1 ]
			}
		}
		const _1 = _0.tie( _0, _0.syn, new _Syn, new Syn( ...arguments ) )
		; _1.children.forEach( ( $0 ) => {
			if ( typeof $0 === 'object' && $0 !== null ) {
				Object.keys( $0 ).forEach( ( $1 ) => {
					_1.update( $0, $1 )
				} )
			}
		} )
		; return _1.parent
		;
		function _Syn() {
			this.$0 = { click: 0, id: _0.syn.name, loci: _0.id, record: false, show: false }
		}
		function Syn( $0 ) {
			this.last = { value: arguments[ arguments.length - 1 ] }
			; this.last.option = typeof this.last.value === 'string'
			; this.children = this.last.option
				? Array.apply( null, arguments ).splice( 1, arguments.length - 2 )
				: Array.apply( null, arguments ).splice( 1 )
			; this.option = this.last.option ? this.last.value : false
			; this.parent = $0
			; this.update = update
		}
	}
	function tie( $0, $1, $2, $3 ) {
		function put( $0, $1, $2 ) {
			Object.keys( $1 ).forEach( ( $3 ) => {
				if ( typeof $0[ $3 ] === 'undefined' ) {
					Object.defineProperty( $0, $3, { configurable: true, enumerable: $2, value: $1[ $3 ], writable: true } )
				}
			} )
			; return $1
		}
		if ( ! _0.tie.$0 ) {
			put( _0.tie, { $0: ( new _Tie ).$0 }, ( new _Tie ).$0.show )
			; put( _0.tie, new _Tie, true )
		}
		_0.tie.$0.click++
		; const _1 = new _0.tie.Tie( $0, $1, $2, $3 )
		; _1.put( _1, { $0: new _0.tie.Meta( _0.tie ) }, _0.tie.$0.show )
		; _1.put( _1.$0, new _0.tie.MetaLocal( _0.tie ), true )
		; if ( ! _1.child.$0 ) {
			_1.put( _1.child, { $0: new _0.tie.Meta( _1.parent ) }, _1.show )
			; if ( _1.global.$0 ) {
				_1.put( _1.child.$0, _1.global.$0, true )
			}
			_1.put( _1.child.$0, new _0.tie.MetaGlobal( _1.parent, _1.child ), true )
			; _1.put( _1.child, _1.global, true )
		}
		_1.child.$0.click++
		; _1.put( _1.local, { $0: new _0.tie.Meta( _1.child ) }, _1.show )
		; _1.put( _1.local.$0, new _0.tie.MetaLocal( _1.child, _1.parent ), true )
		; if ( _1.child.$0.record ) {
			_1.put( _1.child, { [ '$' + _1.child.$0.click ]: _1.local }, _1.show )
		}
		return _1.local
		;
		function Meta( $0 ) {
			this.date = new Date()
			; this.parent = $0
			; this.time = this.date.toLocaleString()
		}
		function MetaGlobal( $0, $1 ) {
			this.click = 0
			; this.record = true
			; this.show = false
			; if ( typeof $0 !== 'undefined' ) {
				this.id = $0 === $1 ? 'parent' : $1.name
				; this.loci = $0 === $1
					? $1.name + '.$0'
					: typeof $0 === 'string'
						? _0.id + '.$0'
						: $0.$0.loci + ( $0.$0.loci ? '.' : '' ) + $0.$0.id
			}
		}
		function MetaLocal( $0, $1 ) {
			if ( $0 === $1 ) {
				this.id = $0.$0 && typeof $0.$0.click !== 'undefined' && $0.$0.click !== '' ? '$' + $0.$0.click : ''
				; this.loci = _0.parent.name
				; this.seed = seed
			} else {
				this.id = '$' + $0.$0.click
				; this.loci = $0.$0.loci + '.' + $0.$0.id
			}
		}
		function _Tie() {
			this.$0 = new Meta( _0.local )
			; this.$0.id = _0.tie.name
			; this.$0.loci = _0.id
			; this.$0.record = false
			; this.$0.show = false
			; put( this.$0, new MetaGlobal, true )
			; this.Meta = Meta
			; this.MetaGlobal = MetaGlobal
			; this.MetaLocal = MetaLocal
			; this.seed = seed
			; this.Tie = Tie
		}
		function Tie( $0, $1, $2, $3 ) {
			this.child = $1
			; this.global = $2
			; this.local = $3
			; this.parent = $0 ? $0 : $1
			; this.put = put
			; this.show = $1.$0
				? $1.$0.show
				: $2.$0 && typeof $2.$0.show === 'boolean'
					? $2.$0.show
					: ( new _0.tie.MetaGlobal ).show
		}
	}
	if ( arguments.length < 3 ) {
		if ( typeof window !== 'undefined' ) {
			window.seed = seed
		}
		if ( typeof module !== 'undefined' && module.exports ) {
			module.exports = seed
		}
		return
	}
	const _0 = new Seed( $0, $1, $2 )
	; _0.tie( _0.id, seed, new _Seed, _0 )
	; return _0.syn(
		_0.tie( null, $0, $1, $2 )
		, { log: _0.log, syn: _0.syn, tie: _0.tie }
	)
	;
	function _Seed() {
		this.$0 = { click: 0, record: false, show: false }
	}
	function Seed( $0, $1, $2 ) {
		this.id = $0.name
		; this.local = $2
		; this.log = log
		; this.parent = $0
		; this.syn = syn
		; this.tie = tie
	}
} )
;
