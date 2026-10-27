( new function clArg( $0, $1 ) {
	function help() {
		_0.syn( _1, {
			helpStr: '\n<cyan>./' + _1.env[
				_1.env.length - 1
			] + '</cyan>'
		} )
		; _0.log( 'log', '\t\t\t<magenta>---</magenta>'
			+ ' <yellow>options</yellow>'
			+ ' <magenta>---</magenta>'
			+ _1.helpStr
			+ '</cyan>'
			+ _1.sep
			+ 'no initial options'
			+ _1.helpStr
			+ ' <yellow>a</yellow>'
			+ _1.sep
			+ 'agree to yes when asked'
			+ _1.helpStr
			+ ' <yellow>e</yellow>'
			+ _1.sep
			+ 'exit when done'
			+ _1.helpStr
			+ ' <yellow>g</yellow>'
			+ ' <red>NAME,EMAIL</red>'
			+ '\t\t\t\t\t<green>|</green> '
			+ 'give git options'
			+ _1.helpStr
			+ ' <yellow>h</yellow>'
			+ _1.sep
			+ 'print this help printout'
			+ _1.helpStr
			+ ' <yellow>c</yellow>'
			+ ' <red>COLLECTION</red>'
			+ '\t\t\t\t\t<green>|</green> '
			+ 'give app collection option'
			+ _1.helpStr
			+ ' <yellow>t</yellow>'
			+ ' <red>TIMEZONE</red>'
			+ '\t\t\t\t\t<green>|</green> '
			+ 'give timezone option'
			+ '\n\t\t\t<magenta>---</magenta>'
			+ ' <yellow>example</yellow>'
			+ ' <magenta>---</magenta>'
			+ _1.helpStr
			+ ' <yellow>acegt</yellow>'
			+ ' <red>basic,ubuntu</red>'
			+ ' <red>user,user@user.net'
			+ ' Canada,Pacific</red>'
		, _1 )
		; process.exit()
		;
	}
	function indx( $0 ) {
		if ( _1.arg.indexOf( $0 ) > -1 ) {
			_0.syn( _1.pck, {
				[ $0 ]: true
			}, 'ov' )
			;
		}
		if (
			$0 === 'c'
				|| $0 === 'g'
				|| $0 === 't'
		) {
			_0.syn( _1.pckSub, {
				[ $0 ]: Object.keys( _1.pckSub )
					.length + 1
			}, 'ov' )
			;
		}
	}
	if ( this instanceof clArg ) {
		module.exports = clArg
		; return
		;
	}
	const _0 = $0[ 0 ]
	const _1 = _0.tie( _0, clArg, new _ClArg, new ClArg( $1 ) )
	; _0.syn( _1, {
		arg: process.argv[ 2 ] ? process.argv[ 2 ].split( '' ) : []
		, env: process.env._ ? process.env._.split( '/' ) : [ 'osFig' ]
	} )
	; _1.arg.forEach( _1.indx )
	; if ( _1.pck.a ) {
		_0.syn( _1, { all: true } )
		;
	}
	; if ( _1.pck.e ) {
		_0.syn( _1, { exit: true } )
		;
	}
	; if ( _1.pck.g ) {
		_0.syn( _1, {
			git: process.argv[
				_1.pckSub.g + 2
			] ? process.argv[
				_1.pckSub.g + 2
			].split( ',' ) : false
		} )
		; if ( ! _1.git ) {
			_1.help()
			;
		}
	}
	; if ( _1.pck.h ) {
		_1.help()
		;
	}
	; if ( _1.pck.c ) {
		_0.syn( _1, {
			app: process.argv[
				_1.pckSub.c + 2
			] ? process.argv[
				_1.pckSub.c + 2
			].split( ',' ) : false
		} )
		; if ( ! _1.app ) {
			_1.help()
			;
		}
	}
	; if ( _1.pck.t ) {
		_0.syn( _1, {
			tz: process.argv[
				_1.pckSub.t + 2
			] ? process.argv[
				_1.pckSub.t + 2
			].split( ',' ) : false
		} )
		; if ( ! _1.tz ) {
			_1.help()
			;
		}
	}
	; return _1
	;
	function _ClArg() {
		this.$auth = 'besta.pe'
	}
	function ClArg( $0 ) {
		this.callback = $0
		; this.help = help
		; this.indx = indx
		; this.sep = '\t\t\t\t\t\t<green>|</green> '
		; this.opt = [
			'a'
			, 'c'
			, 'e'
			, 'g'
			, 'h'
			, 't'
		]
		; this.pck = { a: null, c: null, e: null, g: null, h: null, t: null }
		; this.pckSub = {}
		; this.arg = null
		; this.env = null
		; this.helpStr = null
		; this.all = null
		; this.exit = null
		; this.app = null
		; this.git = null
		; this.tz = null
	}
} )
;
