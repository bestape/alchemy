( new function commit( $0, $1 ) {
	if ( this instanceof commit ) {
		module.exports = commit
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function encodeLna33x( $0, $1, $2 ) {
		const _2 = _0.tie( _1, _1.encodeLna33x, new _EncodeLna33x, new EncodeLna33x( $0, $1, $2 ) )
		; _2.buf.writeUIntBE( _2.link, 0, 3 )
		; _2.buf.writeUIntBE( _2.nonce, 3, 3 )
		; _2.buf.write( _2.ascii.slice( 0, 26 ), 6, 'utf8' )
		; return BigInt( '0x' + _2.buf.toString( 'hex' ) ).toString( 10 )
		;
		function _EncodeLna33x() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function EncodeLna33x( $0, $1, $2 ) {
			this.link = $0
			; this.nonce = $1
			; this.ascii = $2
			; this.buf = Buffer.alloc( 32, 0 )
		}
	}
	function runCommit() {
		const _2 = _0.tie( _1, _1.runCommit, new _RunCommit, new RunCommit )
		; if ( ! _1.msg ) {
			_0.log( 'warn', '❌ Commit message required.', _1 )
			; process.exit( 1 )
		}
		_0.lint( [ _0 ] )
		; _2.staged.forEach( ( $0 ) => {
			if ( ! $0 ) {
				return
			}
			if ( $0.indexOf( 'trash' ) !== -1 ) {
				_0.log( 'warn', '❌ Commit Aborted: Trash path staged (' + $0 + ').', _1 )
				; process.exit( 1 )
			}
			if ( _1.fs.existsSync( $0 ) && _1.fs.statSync( $0 ).size > _1.maxBytes ) {
				_0.log( 'warn', '❌ Commit Aborted: Blob > 5MB (' + $0 + '). Offload to blob_repsl.', _1 )
				; process.exit( 1 )
			}
		} )
		; if ( _2.diff.match( /BEGIN [A-Z ]*PRIVATE KEY|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|dh_[A-Za-z0-9]{20,}/ ) ) {
			_0.log( 'warn', '❌ Commit Aborted: Secret pattern detected in staged diff.', _1 )
			; process.exit( 1 )
		}
		_1.cp.execFileSync( 'git', [ 'config', 'user.name', _1.cellId ] )
		; _1.cp.execFileSync( 'git', [ 'config', 'user.email', _2.explorerUrl ] )
		; _1.cp.execFileSync( 'git', [ 'commit', '-m', _2.fullMsg ], { stdio: 'inherit' } )
		; _0.log( 'log', '✔ Sovereign Commit Secured by ' + _1.cellId + ' (tree: ' + _2.treeHash.slice( 0, 12 ) + ').', _1 )
		; return _2
		;
		function _RunCommit() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function RunCommit() {
			this.nl = String.fromCharCode( 10 )
			; this.tokenId = _1.encodeLna33x( _1.link, _1.nonce, _1.cellId )
			; this.explorerUrl = 'https://explorer.qgov.io/token/' + _1.contract + '/instance/' + this.tokenId
			; this.stagedRaw = String( _1.cp.execFileSync( 'git', [ 'diff', '--cached', '--name-only', '--diff-filter=ACMR' ] ) ).trim()
			; this.staged = this.stagedRaw ? this.stagedRaw.split( this.nl ) : []
			; this.diff = String( _1.cp.execFileSync( 'git', [ 'diff', '--cached' ] ) )
			; this.treeHash = String( _1.cp.execFileSync( 'git', [ 'write-tree' ] ) ).trim()
			; this.fullMsg = _1.msg + this.nl + this.nl
				+ 'Agent-Identity: ' + _1.cellId + this.nl
				+ 'Agent-Session: ' + _1.sessionUuid + this.nl
				+ 'Agent-Registry-URI: eip155:35441:' + _1.contract + this.nl
				+ 'Validation-Hash: ' + this.treeHash + this.nl
				+ '[AGENT: ' + _1.cellId + '] [SESSION: ' + _1.shortSession + ']'
		}
	}
	const _1 = _0.tie( _0, commit, new _Commit, new Commit( $0 ) )
	; _1.runCommit()
	; if ( 'function' === typeof _1.callback ) {
		_1.callback( _1 )
	}
	return _1
	;
	function _Commit() {
		this.$auth = 'besta.pe'
	}
	function Commit( $0 ) {
		this.callback = $0[ 1 ]
		; this.msg = $0[ 2 ] || process.argv[ 3 ] || ''
		; this.fs = require( 'fs' )
		; this.cp = require( 'child_process' )
		; this.contract = '0x69568Cc6bd574C9729F9e73CB2Ce7b4b9977710A'
		; this.shortSession = '3f18f63f'
		; this.sessionUuid = '3f18f63f-c9bd-4d91-a401-3294c3b7c3c4'
		; this.cellId = '3f18f63f.agent'
		; this.link = 0
		; this.nonce = 3
		; this.maxBytes = 5 * 1024 * 1024
		; this.encodeLna33x = encodeLna33x
		; this.runCommit = runCommit
	}
} )
;
