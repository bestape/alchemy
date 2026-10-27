( new function lint( $0, $1 ) {
	if ( this instanceof lint ) {
		module.exports = lint
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function auditFile( $0 ) {
		const _2 = _0.tie( _1, _1.auditFile, new _AuditFile, new AuditFile( $0 ) )
		; _0.syn( _2, {
			content: _1.fs.readFileSync( _2.target.path, 'utf8' )
			, file: _1.path.basename( _2.target.path )
			, nameNoExt: _1.path.basename( _2.target.path, '.js' )
			, chk: _2.target.type === 'edge'
				? _1.cp.spawnSync( process.execPath, [ '--input-type=module', '--check' ], { input: _1.fs.readFileSync( _2.target.path, 'utf8' ) } )
				: _1.cp.spawnSync( process.execPath, [ '--check', _2.target.path ] )
		} )
		; _0.syn( _2, {
			lines: _2.content.split( '\n' )
			, cap: _2.nameNoExt.split( '-' ).map( ( $0 ) => {
				return $0.charAt( 0 ).toUpperCase() + $0.slice( 1 )
			} ).join( '' )
		} )
		; _0.syn( _2, {
			pat1: new RegExp( '\\bfunction\\s+_' + _2.cap + '\\s*\\(' )
			, pat2: new RegExp( '\\bfunction\\s+' + _2.cap + '\\s*\\(' )
		} )

		// 🔱 Step 0a: JS Syntax Check (node --check)
		; if ( _2.chk.status !== 0 ) {
			_0.log( 'warn', '🚨 Syntax Breach in ' + _2.file + ':\n' + String( _2.chk.stderr ), _2 )
			; _0.syn( _1, { hasErrors: true }, 'n' )
		}

		// 🔱 Step 0b: Symmetrical Constructor Check (_DNA and DNA)
		; if ( ! _2.pat1.test( _2.content ) || ! _2.pat2.test( _2.content ) ) {
			_0.log( 'warn', '🚨 Constructor Symmetry Breach: ' + _2.file + ' must declare BOTH \'_' + _2.cap + '\' and \'' + _2.cap + '\'.', _2 )
			; _0.syn( _1, { hasErrors: true }, 'n' )
		}

		; _2.lines.forEach( ( $0, $1 ) => {
			if ( $0.trim().startsWith( '//' ) ) {
				return
			}
			// 🔱 Step 1: Detect Scope Change (U vs l) & Reset Post-Tie State
			; if ( $0.match( /\bfunction\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)/ ) ) {
				_0.syn( _2, {
					rawFnName: $0.match( /\bfunction\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)/ )[ 1 ]
					, fnName: $0.match( /\bfunction\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)/ )[ 1 ].replace( /^_/, '' )
					, tied: false
					, innerDepth: 0
				}, 'n' )
				; _0.syn( _2, {
					scope: _2.fnName[ 0 ] === _2.fnName[ 0 ].toUpperCase() ? 'U' : 'l'
				}, 'n' )
			}
			; if ( _2.scope === 'U' && _2.rawFnName && $0.match( /\bthis\.([a-zA-Z0-9_$]+)\s*=/ ) ) {
				_2.ctorProps.push( { fn: _2.rawFnName, prop: $0.match( /\bthis\.([a-zA-Z0-9_$]+)\s*=/ )[ 1 ] } )
			}

			// 🔱 Step 2: Ban var and let everywhere (No var or let EVER!)
			; if ( $0.match( /\b(let|var)\s+[a-zA-Z0-9_$]+/ ) ) {
				_0.log( 'warn', '🚨 Declaration Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': \'let\' and \'var\' are strictly forbidden.', _2 )
				; _0.syn( _1, { hasErrors: true }, 'n' )
			}

			// 🔱 Step 3: Strict const Register Purity (Only const _0, _1, _2; _1 and _2 MUST use _0.tie!)
			; if ( $0.match( /\bconst\s+([^=;]+)=/ ) ) {
				_0.syn( _2, {
					regName: $0.match( /\bconst\s+([^=;]+)=/ )[ 1 ].trim()
				}, 'n' )
				; if ( ! [ '_0', '_1', '_2' ].includes( _2.regName ) ) {
					_0.log( 'warn', '🚨 Register Purity Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Banned const name \'' + _2.regName + '\'.', _2 )
					; _0.syn( _1, { hasErrors: true }, 'n' )
				}
				; if ( ( _2.regName === '_1' || _2.regName === '_2' ) && ! $0.match( /\b_0\.tie\s*\(/ ) ) {
					_0.log( 'warn', '🚨 Tie Regiment Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Register \'' + _2.regName + '\' must be initialized via _0.tie().', _2 )
					; _0.syn( _1, { hasErrors: true }, 'n' )
				}
			}

			// 🔱 Step 4: Duality & Syn Regiment (No direct _n.prop = in 'l' scope; +=, -=, ++, -- are allowed!)
			; if ( _2.scope === 'U' && $0.match( /\b_[0-2]\.[a-zA-Z0-9_$]+\s*=/ ) ) {
				_0.log( 'warn', '🚨 Construction Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Use \'this.\' in Uppercase constructors.', _2 )
				; _0.syn( _1, { hasErrors: true }, 'n' )
			}
			; if ( _2.scope === 'l' ) {
				if ( $0.match( /\bthis\.[a-zA-Z0-9_$]+\s*=/ ) ) {
					_0.log( 'warn', '🚨 Execution Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Cannot assign to \'this.\' in lowercase scope.', _2 )
					; _0.syn( _1, { hasErrors: true }, 'n' )
				}
				if ( $0.match( /\b_[0-2](?:\.[a-zA-Z0-9_$]+|\[\s*[^\]]+\s*\])+\s*(?<![+*-])=(?!=)/ ) ) {
					_0.log( 'warn', '🚨 Syn Regiment Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Direct \'=\' assignment on _0/_1/_2 forbidden; use _0.syn().', _2 )
					; _0.syn( _1, { hasErrors: true }, 'n' )
				}
			}

			// 🔱 Step 5: Post-Tie Parameter Ban (Once _0.tie is called, parent $0, $1, $2 cannot be used in parent scope!)
			; if ( $0.match( /\bconst\s+_[12]\s*=\s*_0\.tie\b/ ) ) {
				_0.syn( _2, { tied: true, innerDepth: 0 }, 'n' )
			} else if ( _2.scope === 'l' && _2.tied && _2.innerDepth <= 0 ) {
				if ( ! $0.match( /=>/ ) && ! $0.match( /\bcatch\s*\(/ ) && ! $0.trim().startsWith( '+' ) && ! $0.trim().startsWith( '\'' ) ) {
					if ( $0.replace( /'[^']*'/g, '' ).replace( /\/(?![*/])(?:\\.|\[(?:\\.|[^\]])*\]|[^/])+\/[gimsuy]*/g, '' ).match( /(?:^|[^a-zA-Z0-9_.\$])\$[0-9]+\b/ ) ) {
						_0.log( 'warn', '🚨 Post-Tie Parameter Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Parent parameter ($n) used after _0.tie(); use _1/_2 register instead.', _2 )
						; _0.syn( _1, { hasErrors: true }, 'n' )
					}
				}
			}
			; if ( _2.scope === 'l' && _2.tied && ! $0.match( /\bconst\s+_[12]\s*=\s*_0\.tie\b/ ) ) {
				if ( _2.innerDepth > 0 ) {
					_2.innerDepth += ( $0.replace( /'[^']*'/g, '' ).replace( /\/(?![*/])(?:\\.|\[(?:\\.|[^\]])*\]|[^/])+\/[gimsuy]*/g, '' ).match( /\{/g ) || [] ).length
					; _2.innerDepth -= ( $0.replace( /'[^']*'/g, '' ).replace( /\/(?![*/])(?:\\.|\[(?:\\.|[^\]])*\]|[^/])+\/[gimsuy]*/g, '' ).match( /\}/g ) || [] ).length
				} else if ( $0.match( /=>\s*\{/ ) || $0.match( /\bcatch\s*\([^)]*\)\s*\{/ ) ) {
					_0.syn( _2, { innerDepth: 1 }, 'n' )
				}
			}

			// 🔱 Step 6: Parameter Sequence ($0, $1, $2 in function, arrow, and catch)
			; _0.syn( _2, {
				pMatch: $0.match( /\bfunction\s*[a-zA-Z0-9_$]*\s*\(([^)]*)\)/ )
					|| $0.match( /\bcatch\s*\(([^)]*)\)/ )
					|| $0.match( /(?:\(([^)]*)\)|(\$[0-9]+|[a-zA-Z_][a-zA-Z0-9_$]*))\s*=>/ )
			}, 'n' )
			; if ( _2.pMatch ) {
				_0.syn( _2, {
					pRaw: ( _2.pMatch[ 1 ] || _2.pMatch[ 2 ] || '' ).trim()
				}, 'n' )
				; if ( _2.pRaw && ! _2.pRaw.startsWith( '\'' ) && ! _2.pRaw.startsWith( '"' ) && ! _2.pRaw.startsWith( '[' ) ) {
					_2.pRaw.split( ',' ).map( ( $0 ) => $0.trim().split( /\s+/ )[ 0 ].replace( /[()]/g, '' ) ).filter( ( $0 ) => $0.length > 0 ).forEach( ( $0 ) => {
						if ( ! $0.match( /^\$[0-9]+$/ ) ) {
							_0.log( 'warn', '🚨 Parameter Purity Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Banned parameter \'' + $0 + '\'.', _2 )
							; _0.syn( _1, { hasErrors: true }, 'n' )
						}
					} )
				}
			}

			// 🔱 Step 7: Tab Indentation Purity (No leading spaces)
			; if ( $0.match( /^ +/ ) ) {
				_0.log( 'warn', '🚨 Formatting Breach in ' + _2.file + ':' + ( $1 + 1 ) + ': Leading spaces detected (use tabs only).', _2 )
				; _0.syn( _1, { hasErrors: true }, 'n' )
			}
		} )

		// 🔱 Step 8: Global (_Cap) vs Local (Cap) Constructor Property Separation
		; _2.ctorProps.forEach( ( $0 ) => {
			if ( $0.fn.indexOf( '_' ) === 0 ) {
				_2.ctorProps.forEach( ( $1 ) => {
					if ( $1.fn === $0.fn.slice( 1 ) && $1.prop === $0.prop ) {
						_0.log( 'warn', '🚨 Global/Local Separation Breach in ' + _2.file + ': \'' + $0.fn + '\' (Global) and \'' + $1.fn + '\' (Local) both declare \'this.' + $0.prop + '\'. Global is global and local is local.', _2 )
						; _0.syn( _1, { hasErrors: true }, 'n' )
					}
				} )
			}
		} )
	}
	; const _1 = _0.tie( _0, lint, new _Lint, new Lint( $0 ) )
	; _1.targets.push( { path: _1.path.join( _1.rootDir, 'alchemy.js' ), type: 'index' } )
	; _1.targets.push( { path: _1.path.join( _1.rootDir, 'app.js' ), type: 'index' } )
	; _1.targets.push( { path: _1.path.join( _1.rootDir, 'clArg.js' ), type: 'lib' } )
	; _1.targets.push( { path: _1.path.join( _1.rootDir, 'public/alchemy.js' ), type: 'index' } )
	; _1.targets.push( { path: _1.path.join( _1.rootDir, 'public/html.js' ), type: 'index' } )
	; _1.fs.readdirSync( _1.jobDir ).forEach( ( $0 ) => {
		if ( $0.endsWith( '.js' ) ) {
			_1.targets.push( { path: _1.path.join( _1.jobDir, $0 ), type: 'job' } )
		}
	} )
	; _1.targets.forEach( _1.auditFile )
	; if ( _1.hasErrors ) {
		_0.log( 'warn', '❌ Sovereign Audit FAILED. Restore DNA Symmetry.', _1 )
		; process.exit( 1 )
	}
	; _0.log( 'log', '✔ Sovereign Audit Secured (' + _1.targets.length + ' modules aligned).', _1 )
	; if ( typeof _1.callback === 'function' ) {
		_1.callback( _1 )
	}
	; return _1
	;
	function _Lint() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function _AuditFile() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function Lint( $0 ) {
		this.callback = $0[ 1 ]
		; this.fs = require( 'fs' )
		; this.path = require( 'path' )
		; this.cp = require( 'child_process' )
		; this.rootDir = require( 'path' ).resolve( __dirname, '..' )
		; this.jobDir = __dirname
		; this.auditFile = auditFile
		; this.hasErrors = false
		; this.targets = []
	}
	function AuditFile( $0 ) {
		this.target = $0
		; this.content = null
		; this.file = null
		; this.nameNoExt = null
		; this.chk = null
		; this.lines = null
		; this.cap = null
		; this.pat1 = null
		; this.pat2 = null
		; this.fnName = null
		; this.scope = null
		; this.tied = false
		; this.innerDepth = 0
		; this.regName = null
		; this.rawFnName = null
		; this.pMatch = null
		; this.pRaw = null
		; this.ctorProps = []
	}
} )
;
