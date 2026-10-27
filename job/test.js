( new function test( $0, $1 ) {
	if ( this instanceof test ) {
		module.exports = test
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function runBrowserCheck() {
		const _2 = _0.tie( _1, _1.runBrowserCheck, new _RunBrowserCheck, new RunBrowserCheck )
		; _1.vm.createContext( _2.sandbox )
		; _1.vm.runInContext( _1.fs.readFileSync( _1.path.join( _1.rootDir, 'public/seed.js' ), 'utf8' ), _2.sandbox )
		; _1.vm.runInContext( _1.fs.readFileSync( _1.path.join( _1.rootDir, 'public/alchemy.js' ), 'utf8' ), _2.sandbox )
		; _1.vm.runInContext( _1.fs.readFileSync( _1.path.join( _1.rootDir, 'public/html.js' ), 'utf8' ), _2.sandbox )
		; _2.els.make.listeners.click()
		; if ( ! _2.els.svg.innerHTML || _2.els.svg.innerHTML.indexOf( '<svg' ) !== 0 || _2.els.svg.innerHTML.indexOf( 'rectangleInfinity' ) === -1 ) {
			_0.log( 'warn', '❌ Browser Alchemy SVG Verification FAILED.', _2 )
			; process.exit( 1 )
		}
		_0.log( 'log', '✔ Browser SeedTree (public/seed.js + public/alchemy.js + public/html.js) Verified (' + _2.els.svg.innerHTML.split( _2.nl ).length + ' SVG lines).', _2 )
		; return _2
		;
		function _RunBrowserCheck() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function RunBrowserCheck() {
			this.nl = String.fromCharCode( 10 )
			; this.els = {
				json: {
					innerHTML: _1.fs.readFileSync( _1.path.join( _1.rootDir, 'app.json' ), 'utf8' )
				}
				, alchemy: {
					listeners: {}
					, addEventListener: ( $0, $1 ) => {
						this.els.alchemy.listeners[ $0 ] = $1
					}
					, click: () => {
						if ( this.els.alchemy.listeners.click ) {
							this.els.alchemy.listeners.click()
						}
					}
				}
				, svg: { innerHTML: '' }
				, download: {
					innerHTML: ''
					, listeners: {}
					, prepend: () => {}
					, addEventListener: ( $0, $1 ) => {
						this.els.download.listeners[ $0 ] = $1
					}
				}
				, basin: { append: () => {} }
				, interface: {
					listeners: {}
					, addEventListener: ( $0, $1 ) => {
						this.els.interface.listeners[ $0 ] = $1
					}
				}
				, interfaceButton: { after: () => {} }
				, make: {
					listeners: {}
					, addEventListener: ( $0, $1 ) => {
						this.els.make.listeners[ $0 ] = $1
					}
				}
				, file: null
				, store: null
			}
			; this.doc = {
				body: { append: () => {} }
				, getElementById: ( $0 ) => {
					return this.els[ $0 ] || null
				}
				, getElementsByClassName: ( $0 ) => {
					return []
				}
				, createElement: ( $0 ) => {
					return {
						style: {}
						, setAttribute: () => {}
						, addEventListener: () => {}
						, append: () => {}
						, click: () => {}
					}
				}
			}
			; this.sandbox = {
				console: console
				, encodeURIComponent: encodeURIComponent
				, Math: Math
				, JSON: JSON
				, Object: Object
				, Array: Array
				, String: String
				, Number: Number
				, Boolean: Boolean
				, RegExp: RegExp
				, setTimeout: setTimeout
				, document: this.doc
			}
			; this.sandbox.window = this.sandbox
		}
	}
	function runSuite() {
		if ( ! _1.fs.existsSync( _1.svgPath ) || 1558 !== _1.fs.readFileSync( _1.svgPath, 'utf8' ).split( _1.nl ).length ) {
			_0.log( 'warn', '❌ Node CLI ./app.svg Verification FAILED.', _1 )
			; process.exit( 1 )
		}
		_0.log( 'log', '✔ Node CLI ./app.svg Verified (1,557 lines, x=0.7807764064044151).', _1 )
		; _1.runBrowserCheck()
		; if ( typeof _1.callback === 'function' ) {
			_1.callback( _1 )
		}
	}
	const _1 = _0.tie( _0, test, new _Test, new Test( $0 ) )
	; _1.runSuite()
	; return _1
	;
	function _Test() {
		this.$auth = 'besta.pe'
	}
	function Test( $0 ) {
		this.callback = $0[ 1 ]
		; this.fs = require( 'fs' )
		; this.path = require( 'path' )
		; this.vm = require( 'vm' )
		; this.nl = String.fromCharCode( 10 )
		; this.rootDir = require( 'path' ).resolve( __dirname, '..' )
		; this.svgPath = require( 'path' ).resolve( __dirname, '../app.svg' )
		; this.runBrowserCheck = runBrowserCheck
		; this.runSuite = runSuite
	}
} )
;
