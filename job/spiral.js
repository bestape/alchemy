( new function spiral( $0, $1 ) {
	if ( this instanceof spiral ) {
		module.exports = spiral
		; return
		;
	}
	const _0 = $0[ 0 ]
	; function part1Loop() {
		function CorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPower
			; this.addToX = _1.b2 * _2.xPower
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
				+ _1.a * _2.xPower
			; this.addToY = - _1.b2 * _2.xPowerMinus3
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function firstLastCorkRecord() {
			if ( _1.vertical ) {
				_0.syn( _2, {
					lastCorkRecord: {
						C: {
							x: _1.offset.x + _1.borderSize / 2 + _1.b2 * _2.xPowerMinus1
							, y: _1.offset.y + _1.borderSize / 2 + _1.a * _2.xPowerMinus1
						}
					}
				}, 'n' )
				; return
				;
			}
			_0.syn( _2, {
				lastCorkRecord: {
					C: {
						x: _1.offset.x + _1.borderSize / 2
						, y: _1.offset.y + _1.borderSize / 2 + _1.b2 * _2.xPowerMinus1
					}
				}
			}, 'n' )
			;
		}
		function firstLastRecord() {
			if ( _1.vertical ) {
				_0.syn( _2, {
					lastRecord: {
						C: {
							x: _1.offset.x + _1.borderSize / 2
							, y: _1.offset.y + _1.borderSize / 2
						}
					}
				}, 'n' )
				; return
				;
			}
			_0.syn( _2, {
				lastRecord: {
					C: {
						x: _1.offset.x + _1.borderSize / 2 + _1.a * _2.xPowerMinus1
						, y: _1.offset.y + _1.borderSize / 2
					}
				}
			}, 'n' )
			;
		}
		function PointC() {
			this.x = _1.offset.x + _1.borderSize / 2
			; this.addToX = _1.b2 * _2.xPowerMinus4
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
			; this.addToY = _1.b2 * _2.xPowerMinus1
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function printValue() {
			return '  <animate' + _1.nl
				+ '	  href="#' + _1.id + ( _1.repeat + 1 ) + '"' + _1.nl
				+ '	  attributeName="fill"' + _1.nl
				+ '	  values="' + _2.colour + '"' + _1.nl
				+ '	  dur="' + ( _2.firstObject ? '0s' : _1.speed ) + '"' + _1.nl
				+ '	  begin="' + _2.begin + '"' + _1.nl
				+ '	  fill="freeze" />' + _1.nl
			;
		}
		function VerticalCorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
				+ _1.a * _2.xPower
			; this.addToX = - _1.b2 * _2.xPowerMinus3
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus1
				- _1.b2 * _2.xPower
			; this.addToY = - _1.b2 * _2.xPower
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
			; this.addToX = _1.b2 * _2.xPowerMinus1
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus1
			; this.addToY = - _1.b2 * _2.xPowerMinus4
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			if ( $0 ) {
				_0.log( 'warn', String( $0 ), _2 )
				;
			}
			if ( _1.globalCount - _1.localCount ) {
				_1.localCount ++
				; _2.nextPart( _2 )
				; return
				;
			}
			_0.endParts( [ _0, _1 ] )
			;
		}
		const _2 = _0.tie( _1, _1.part1Loop, new _Part1Loop, new Part1Loop )
		; if ( ! _2.lastRecord ) {
			_2.firstLastRecord()
			; if ( _1.cork ) {
				_2.firstLastCorkRecord()
				;
			}
		}
		if ( _2.firstLoop ) {
			if ( _2.firstObject ) {
				_0.syn( _2, {
					begin: _2.start + ( _1.loop ? '; ' + _2.loopStart : '' )
				}, 'n' )
				;
			} else {
				_0.syn( _2, {
					begin: _1.id + ( _1.globalCount - 1 )
						+ 'animate' + ( _1.globalCount - 1 )
						+ '.end'
				}, 'n' )
				;
			}
			if ( ! _1.lead ) {
				_2.string += _2.printValue()
				;
			}
		}
		if ( _1.vertical ) {
			_0.syn( _2, {
				radiusX: _2.radius
				, corkRadiusY: - _2.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( [ _0, _1, _2 ] )
		; return _2
		;
		function _Part1Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part1Loop() {
			this.begin = _1.id + (
				_1.lead
					? ( _1.globalCount - 1 ) + 'animate' + ( _1.localCount - 1 )
					: _1.globalCount + 'animate' + ( _1.localCount - 1 )
			) + '.end'
			; this.colour = ( _1.globalCount - 0 === _1.repeat ) && _1.lead
				? _1.colours[ _1.colours.length - 1 ]
				: _1.colours[ _1.globalCount % _1.colours.length ]
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _1.corkB2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.corkRadiusX = this.corkRadius
			; this.corkRadiusY = this.corkRadius
			; this.drawPath = _1.drawPath1
			; this.firstLastCorkRecord = firstLastCorkRecord
			; this.firstLastRecord = firstLastRecord
			; this.firstLoop = _1.localCount < 5
			; this.firstObject = _1.globalCount < 2
			; this.lastCorkRecord = _1.corkThread[ 3 ] ? _1.corkThread[ 3 ] : null
			; this.lastRecord = _1.thread[ 3 ] ? _1.thread[ 3 ] : null
			; this.loopStart = (
				'0s' === _1.pause
					? _1.id + _1.repeat + 'animate' + _1.repeat
					: _1.id + 'EndAnimate'
			) + '.end'
			; this.nextPart = _1.part2Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.printValue = printValue
			; this.radius = _1.b2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.radiusX = - this.radius
			; this.radiusY = this.radius
			; this.start = _1.clickStart
				? _1.id + ( _1.repeat + 1 ) + '.click'
				: _1.pause
			; this.string = (
				this.firstLoop
					? '  <!-- dynamic object automation -->' + _1.nl
					: ''
			)
				+ '  <!-- ' + _1.id + _1.globalCount
				+ ' animate' + _1.localCount + ' -->' + _1.nl
			; this.thisCorkRecord = _1.corkThread[ 0 ] ? _1.corkThread[ 0 ] : null
			; this.thisRecord = _1.thread[ 0 ] ? _1.thread[ 0 ] : null
			; this.threadCount = ( _1.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _1.x, _1.localCount )
			; this.xPowerMinus1 = Math.pow( _1.x, _1.localCount - 1 )
			; this.xPowerMinus3 = Math.pow( _1.x, _1.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _1.x, _1.localCount - 4 )
		}
	}
	function part2Loop() {
		function CorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus2
			; this.addToX = - _1.b2 * _2.xPowerMinus3
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus3
				- _1.b2 * _2.xPower
			; this.addToY = - _1.b2 * _2.xPower
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
			; this.addToX = _1.b2 * _2.xPowerMinus1
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus3
			; this.addToY = - _1.b2 * _2.xPowerMinus4
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalCorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus3
				- _1.b2 * _2.xPower
			; this.addToX = - _1.b2 * _2.xPower
			; this.y = _1.offset.y + _1.borderSize / 2
			; this.addToY = _1.b2 * _2.xPowerMinus3
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus3
			; this.addToX = - _1.b2 * _2.xPowerMinus4
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.a * _2.xPower
			; this.addToY = - _1.b2 * _2.xPowerMinus1
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			if ( $0 ) {
				_0.log( 'warn', String( $0 ), _2 )
				;
			}
			if ( _1.globalCount - _1.localCount ) {
				_1.localCount ++
				; _2.nextPart( _2 )
				; return
				;
			}
			_0.endParts( [ _0, _1 ] )
			;
		}
		const _2 = _0.tie( _1, _1.part2Loop, new _Part2Loop, new Part2Loop )
		; if ( _1.vertical ) {
			_0.syn( _2, {
				radiusY: - _2.radius
				, corkRadiusX: - _2.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( [ _0, _1, _2 ] )
		; return _2
		;
		function _Part2Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part2Loop() {
			this.begin = _1.id + (
				_1.lead
					? ( _1.globalCount - 1 ) + 'animate' + ( _1.globalCount - 1 )
					: _1.globalCount + 'animate' + ( _1.localCount - 1 )
			) + '.end'
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _1.corkB2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.corkRadiusX = this.corkRadius
			; this.corkRadiusY = - this.corkRadius
			; this.drawPath = _1.drawPath2
			; this.lastCorkRecord = _1.corkThread[ 0 ] ? _1.corkThread[ 0 ] : null
			; this.lastRecord = _1.thread[ 0 ]
			; this.nextPart = _1.part3Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.radius = _1.b2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.radiusX = this.radius
			; this.radiusY = this.radius
			; this.string = '  <!-- ' + _1.id + _1.globalCount
				+ ' animate' + _1.localCount + ' -->' + _1.nl
			; this.thisCorkRecord = _1.corkThread[ 1 ] ? _1.corkThread[ 1 ] : null
			; this.thisRecord = _1.thread[ 1 ] ? _1.thread[ 1 ] : null
			; this.threadCount = ( _1.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _1.x, _1.localCount )
			; this.xPowerMinus1 = Math.pow( _1.x, _1.localCount - 1 )
			; this.xPowerMinus2 = Math.pow( _1.x, _1.localCount - 2 )
			; this.xPowerMinus3 = Math.pow( _1.x, _1.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _1.x, _1.localCount - 4 )
		}
	}
	function part3Loop() {
		function CorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus3
				- _1.b2 * _2.xPower
			; this.addToX = - _1.b2 * _2.xPower
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus3
			; this.addToY = _1.b2 * _2.xPowerMinus3
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus3
			; this.addToX = - _1.b2 * _2.xPowerMinus4
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus4
				- _1.b2 * _2.xPowerMinus1
			; this.addToY = - _1.b2 * _2.xPowerMinus1
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalCorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus3
			; this.addToX = _1.b2 * _2.xPowerMinus3
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPower
			; this.addToY = _1.b2 * _2.xPower
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus4
				- _1.b2 * _2.xPowerMinus1
			; this.addToX = - _1.b2 * _2.xPowerMinus1
			; this.y = _1.offset.y + _1.borderSize / 2
			; this.addToY = _1.b2 * _2.xPowerMinus4
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			if ( $0 ) {
				_0.log( 'warn', String( $0 ), _2 )
				;
			}
			if ( _1.globalCount - _1.localCount ) {
				_1.localCount ++
				; _2.nextPart( _2 )
				; return
				;
			}
			_0.endParts( [ _0, _1 ] )
			;
		}
		const _2 = _0.tie( _1, _1.part3Loop, new _Part3Loop, new Part3Loop )
		; if ( _1.vertical ) {
			_0.syn( _2, {
				radiusX: - _2.radius
				, corkRadiusY: _2.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( [ _0, _1, _2 ] )
		; return _2
		;
		function _Part3Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part3Loop() {
			this.begin = _1.id + (
				_1.lead
					? ( _1.globalCount - 1 ) + 'animate' + ( _1.globalCount - 1 )
					: _1.globalCount + 'animate' + ( _1.localCount - 1 )
			) + '.end'
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _1.corkB2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.corkRadiusX = - this.corkRadius
			; this.corkRadiusY = - this.corkRadius
			; this.drawPath = _1.drawPath3
			; this.lastCorkRecord = _1.corkThread[ 1 ] ? _1.corkThread[ 1 ] : null
			; this.lastRecord = _1.thread[ 1 ]
			; this.nextPart = _1.part4Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.radius = _1.b2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.radiusX = this.radius
			; this.radiusY = - this.radius
			; this.string = '  <!-- ' + _1.id + _1.globalCount
				+ ' animate' + _1.localCount + ' -->' + _1.nl
			; this.thisCorkRecord = _1.corkThread[ 2 ] ? _1.corkThread[ 2 ] : null
			; this.thisRecord = _1.thread[ 2 ] ? _1.thread[ 2 ] : null
			; this.threadCount = ( _1.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _1.x, _1.localCount )
			; this.xPowerMinus1 = Math.pow( _1.x, _1.localCount - 1 )
			; this.xPowerMinus3 = Math.pow( _1.x, _1.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _1.x, _1.localCount - 4 )
		}
	}
	function part4Loop() {
		function CorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus3
			; this.addToX = _1.b2 * _2.xPowerMinus3
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus4
				+ _1.b2 * _2.xPower
			; this.addToY = _1.b2 * _2.xPower
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.a * _2.xPowerMinus4
				- _1.b2 * _2.xPowerMinus1
			; this.addToX = - _1.b2 * _2.xPowerMinus1
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus4
			; this.addToY = _1.b2 * _2.xPowerMinus4
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalCorkPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus4
				+ _1.b2 * _2.xPower
			; this.addToX = _1.b2 * _2.xPower
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
				+ _1.a * _2.xPower
			; this.addToY = - _1.b2 * _2.xPowerMinus3
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _1.offset.x
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus4
			; this.addToX = + _1.b2 * _2.xPowerMinus4
			; this.y = _1.offset.y
				+ _1.borderSize / 2
				+ _1.b2 * _2.xPowerMinus1
			; this.addToY = _1.b2 * _2.xPowerMinus1
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			if ( $0 ) {
				_0.log( 'warn', String( $0 ), _2 )
				;
			}
			if ( _1.globalCount - _1.localCount ) {
				_1.localCount ++
				; _2.nextPart( _2 )
				; return
				;
			}
			_0.endParts( [ _0, _1 ] )
			;
		}
		const _2 = _0.tie( _1, _1.part4Loop, new _Part4Loop, new Part4Loop )
		; if ( _1.vertical ) {
			_0.syn( _2, {
				radiusY: _2.radius
				, corkRadiusX: _2.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( [ _0, _1, _2 ] )
		; return _2
		;
		function _Part4Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part4Loop() {
			this.begin = _1.id + (
				_1.lead
					? ( _1.globalCount - 1 ) + 'animate' + ( _1.globalCount - 1 )
					: _1.globalCount + 'animate' + ( _1.localCount - 1 )
			) + '.end'
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _1.corkB2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.corkRadiusX = - this.corkRadius
			; this.corkRadiusY = this.corkRadius
			; this.drawPath = _1.drawPath4
			; this.lastCorkRecord = _1.corkThread[ 2 ] ? _1.corkThread[ 2 ] : null
			; this.lastRecord = _1.thread[ 2 ]
			; this.nextPart = _1.part1Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.radius = _1.b2 * Math.pow( _1.x, _1.localCount - 1 )
			; this.radiusX = - this.radius
			; this.radiusY = - this.radius
			; this.string = '  <!-- ' + _1.id + _1.globalCount
				+ ' animate' + _1.localCount + ' -->' + _1.nl
			; this.thisCorkRecord = _1.corkThread[ 3 ] ? _1.corkThread[ 3 ] : null
			; this.thisRecord = _1.thread[ 3 ] ? _1.thread[ 3 ] : null
			; this.threadCount = ( _1.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _1.x, _1.localCount )
			; this.xPowerMinus1 = Math.pow( _1.x, _1.localCount - 1 )
			; this.xPowerMinus3 = Math.pow( _1.x, _1.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _1.x, _1.localCount - 4 )
		}
	}
	const _1 = _0.tie( _0, spiral, new _Spiral, new Spiral( $0 ) )
	; _1.fs.writeFileSync( _1.file, '', 'utf8' )
	; _0.pythagMetal( [ _0, _1 ] )
	; _0.header( [ _0, _1 ] )
	; return _1
	;
	function _Spiral() {
		this.$auth = 'besta.pe'
	}
	function Spiral( $0 ) {
		this.callback = $0[ 1 ]
		; this.fs = require( 'fs' )
		; this.nl = String.fromCharCode( 10 )
		; this.data = JSON.parse( this.fs.readFileSync( './app.json', 'utf8' ) )
		; this.a = this.data.a
		; this.b2 = this.data.b2
		; this.background = this.data.background
		; this.borderColour = this.data.borderColour
		; this.borderSize = this.data.borderSize
		; this.cellBorderColour = this.data.cellBorderColour
		; this.cellBorderSize = this.data.cellBorderSize
		; this.clickStart = this.data.clickStart
		; this.cork = this.data.cork
		; this.corkA = null
		; this.corkB2 = null
		; this.corkThread = [ null, null, null, null ]
		; this.colours = this.data.colours
		; this.drawPath1 = this.data.drawPath1
		; this.drawPath2 = this.data.drawPath2
		; this.drawPath3 = this.data.drawPath3
		; this.drawPath4 = this.data.drawPath4
		; this.embed = this.data.embed
		; this.file = this.data.file
		; this.globalCount = 1
		; this.id = this.data.id
		; this.images = this.data.images.length > 0
			? this.data.images
			: false
		; this.imageType = this.data.png ? 'png' : 'jpeg'
		; this.lead = this.data.lead
		; this.localCount = 1
		; this.loop = this.data.loop
		; this.offset = {
			x: this.data.offset.x
			, y: this.data.offset.y
		}
		; this.opacity = this.data.opacity
		; this.part1Loop = part1Loop
		; this.part2Loop = part2Loop
		; this.part3Loop = part3Loop
		; this.part4Loop = part4Loop
		; this.pause = this.data.pause
		; this.repeat = this.data.repeat
		; this.rotateCenter = this.data.rotateCenter
		; this.speed = this.data.speed
		; this.startColour = this.colours.shift()
		; this.thread = [ null, null, null, null ]
		; this.totalHeight = this.data.vertical
			? this.a + this.borderSize
			: null
		; this.totalWidth = this.data.vertical
			? null
			: this.a + this.borderSize
		; this.vertical = this.data.vertical
		; this.viewBoxAdd = this.data.viewBoxAdd
		; this.writeFile = this.fs.writeFile
		; this.writeOptions = {
			encoding: 'utf8'
			, flag: 'a'
		}
		; this.x = null
	}
} )
;
