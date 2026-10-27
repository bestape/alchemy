( new function runPart( $0, $1 ) {
	if ( this instanceof runPart ) {
		module.exports = runPart
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function RecordCorkPoints( $0 ) {
		this.A = {
			x: $0.lastCorkRecord.C.x
			, y: $0.lastCorkRecord.C.y
		}
		; this.B = {
			x: this.A.x + $0.corkRadiusX
			, y: this.A.y + $0.corkRadiusY
		}
		; if ( $0.thisCorkRecord ) {
			this.C = {
				x: $0.thisCorkRecord.C.x + $0.corkPointC.addToX
				, y: $0.thisCorkRecord.C.y + $0.corkPointC.addToY
			}
			; return
			;
		}
		this.C = $0.corkPointC
	}
	function _RecordCorkPoints() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function RecordPoints( $0 ) {
		this.A = {
			x: $0.lastRecord.C.x
			, y: $0.lastRecord.C.y
		}
		; this.B = {
			x: this.A.x + $0.radiusX
			, y: this.A.y + $0.radiusY
		}
		; if ( $0.thisRecord ) {
			this.C = {
				x: $0.thisRecord.C.x + $0.pointC.addToX
				, y: $0.thisRecord.C.y + $0.pointC.addToY
			}
			; return
			;
		}
		this.C = $0.pointC
	}
	function _RecordPoints() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	const _1 = _0.tie( _0, runPart, new _RunPart, new RunPart( $0 ) )
	; if ( _1.state.cork ) {
		if ( _1.state.vertical ) {
			_0.syn( _1.part, {
				corkPointC: new _1.part.VerticalCorkPointC
			}, 'n' )
			;
		} else {
			_0.syn( _1.part, {
				corkPointC: new _1.part.CorkPointC
			}, 'n' )
			;
		}
		_1.state.corkThread.splice( _1.part.threadCount, 1, new _1.RecordCorkPoints( _1.part ) )
		; _0.syn( _1.part, {
			thisCorkRecord: _1.state.corkThread[ _1.part.threadCount ]
		}, 'n' )
		;
	}
	if ( _1.state.vertical ) {
		_0.syn( _1.part, {
			pointC: new _1.part.VerticalPointC
		}, 'n' )
		;
	} else {
		_0.syn( _1.part, {
			pointC: new _1.part.PointC
		}, 'n' )
		;
	}
	_1.state.thread.splice( _1.part.threadCount, 1, new _1.RecordPoints( _1.part ) )
	; _0.syn( _1.part, {
		thisRecord: _1.state.thread[ _1.part.threadCount ]
	}, 'n' )
	; if ( _1.state.lead && _1.state.globalCount > _1.state.localCount ) {
		_1.state.localCount ++
		; _1.part.nextPart( _1.part )
		; return _1
		;
	}
	if ( _1.part.drawPath && _1.state.globalCount === _1.state.localCount ) {
		if ( _1.state.cork ) {
			_1.part.string += _0.drawPath( [ _0, _1.state, _1.part, true ] )
			;
		}
		_1.part.string += _0.drawPath( [ _0, _1.state, _1.part, false ] )
		;
	}
	if ( ! _1.state.lead || _1.state.globalCount === _1.state.localCount ) {
		_1.part.string += _0.animateSize( [ _0, _1.state, _1.part, false ] )
		; _1.part.string += _0.animateMotion( [ _0, _1.state, _1.part, false ] )
		; _1.part.string += _0.animateShrink( [ _0, _1.state, _1.part, false ] )
		; if ( _1.state.cork ) {
			_1.part.string += _0.animateSize( [ _0, _1.state, _1.part, true ] )
			; _1.part.string += _0.animateMotion( [ _0, _1.state, _1.part, true ] )
			; _1.part.string += _0.animateShrink( [ _0, _1.state, _1.part, true ] )
			;
		}
	}
	_1.state.writeFile(
		_1.state.file, _1.part.string, _1.state.writeOptions, _1.part.writeNext
	)
	; return _1
	;
	function _RunPart() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function RunPart( $0 ) {
		this.state = $0[ 1 ]
		; this.part = $0[ 2 ]
		; this.RecordCorkPoints = RecordCorkPoints
		; this._RecordCorkPoints = _RecordCorkPoints
		; this.RecordPoints = RecordPoints
		; this._RecordPoints = _RecordPoints
	}
} )
;
