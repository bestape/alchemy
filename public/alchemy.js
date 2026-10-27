( new function alchemy( $0 ) {
	if ( typeof window === 'undefined' || typeof document === 'undefined' ) {
		if ( typeof module !== 'undefined' && module.exports ) {
			module.exports = alchemy
		}
		return
		;
	}
	const _0 = window.seed(
		alchemy
		, new _Alchemy
		, new Alchemy( $0 )
	)
	; window.alchemy = alchemy
	; function animateMotion( $0, $1 ) {
		function printCurve() {
			const _2 = _0.tie( _1, _1.printCurve, new _PrintCurve, new PrintCurve )
			; return '  <animateMotion\n'
				+ '	  href="#' + _1.href + '"\n'
				+ '	  id="' + _1.id + 'path1"\n'
				+ '	  path="'
				+ 'M ' + _1.point.A.x + ' ' + _1.point.A.y + '\n'
				+ '			A ' + _1.radius + ' ' + _1.radius + '\n'
				+ '			0, 0, 0 '
				+ _1.point.B.x + ' ' + _1.point.B.y + '"\n'
				+ '	  rotate="auto-reverse"\n'
				+ '	  dur="' + _1.speed + '"\n'
				+ '	  begin="' + _1.begin0 + '"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintCurve() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintCurve() {
				this.ok = true
			}
		}
		function printLine() {
			const _2 = _0.tie( _1, _1.printLine, new _PrintLine, new PrintLine )
			; return '  <animateMotion\n'
				+ '	  href="#' + _1.href + '"\n'
				+ '	  path="'
				+ 'M ' + _1.point.B.x + ' ' + _1.point.B.y + '\n'
				+ '			L ' + _1.point.C.x + ' ' + _1.point.C.y + '"\n'
				+ '	  dur="' + _1.speed + '"\n'
				+ '	  begin="' + _1.id + 'path1.end"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintLine() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintLine() {
				this.ok = true
			}
		}
		function printRotate( $0 ) {
			const _2 = _0.tie( _1, _1.printRotate, new _PrintRotate, new PrintRotate( $0 ) )
			; return '  <animateTransform\n'
				+ '	  xlink:href="#' + _1.href + '"\n'
				+ '	  attributeName="transform"\n'
				+ '	  type="rotate"\n'
				+ '	  from="' + _2.from + '"\n'
				+ '	  to="' + _2.to + '"\n'
				+ '	  begin="' + _2.begin + '"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintRotate() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintRotate( $0 ) {
				this.from = $0.from
				; this.to = $0.to
				; this.begin = $0.begin
			}
		}
		function printScale( $0 ) {
			const _2 = _0.tie( _1, _1.printScale, new _PrintScale, new PrintScale( $0 ) )
			; return '  <animateTransform\n'
				+ '	  xlink:href="#' + _1.href + '"\n'
				+ '	  attributeName="transform"\n'
				+ '	  type="scale"\n'
				+ '	  values="' + _2.x + ' ' + _2.y + '"\n'
				+ '	  begin="' + _2.begin + '"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintScale() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintScale( $0 ) {
				this.x = $0.x
				; this.y = $0.y
				; this.begin = $0.begin
			}
		}
		const _1 = _0.tie( _0, animateMotion, new _AnimateMotion, new AnimateMotion( $0, $1 ) )
		; if ( _1.cork ) {
			_0.syn( _1, {
				href: _0.id + 'Infinity'
				, id: _1.id + 'Infinity'
				, part2Loop: _0.localCount % 4 === 1
				, part3Loop: _0.localCount % 4 === 2
				, part4Loop: _0.localCount % 4 === 3
				, part1Loop: _0.localCount % 4 === 0
			}, 'n' )
			;
		}
		if ( _0.vertical ) {
			if ( _1.cork ) {
				_0.syn( _1, {
					part3Loop: _0.localCount % 4 === 1
					, part4Loop: _0.localCount % 4 === 2
					, part1Loop: _0.localCount % 4 === 3
					, part2Loop: _0.localCount % 4 === 0
				}, 'n' )
				;
			} else {
				_0.syn( _1, {
					part2Loop: _0.localCount % 4 === 1
					, part3Loop: _0.localCount % 4 === 2
					, part4Loop: _0.localCount % 4 === 3
					, part1Loop: _0.localCount % 4 === 0
				}, 'n' )
				;
			}
		}
		if ( _1.part1Loop || _1.part3Loop ) {
			_1.string += _1.printRotate( {
				from: 90
				, to: 0
				, begin: _1.begin0
			} )
			;
		}
		if ( _1.part2Loop || _1.part4Loop ) {
			_1.string += _1.printScale( {
				x: -1
				, y: 1
				, begin: _1.begin0
			} )
			;
		}
		_1.string += _1.printCurve()
		; _1.string += _1.printLine()
		; if ( _1.part1Loop ) {
			_1.string += _1.printRotate( {
				from: 0
				, to: -90
				, begin: _1.begin1
			} )
			;
		}
		if ( _1.part2Loop ) {
			_1.string += _1.printScale( {
				x: 1
				, y: -1
				, begin: _1.begin1
			} )
			;
		}
		if ( _1.part3Loop ) {
			_1.string += _1.printScale( {
				x: -1
				, y: -1
				, begin: _1.begin1
			} )
			;
		}
		return _1.string
		;
		function _AnimateMotion() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function AnimateMotion( $0, $1 ) {
			this.begin0 = $0.begin
			; this.begin1 = _0.id + _0.globalCount
				+ 'animate' + _0.localCount
				+ ( $1 ? 'Infinity' : '' )
				+ 'path1.end'
			; this.cork = $1
			; this.href = _0.id + _0.globalCount
			; this.id = _0.id + _0.globalCount
				+ 'animate' + _0.localCount
			; this.part1Loop = _0.localCount % 4 === 1
			; this.part2Loop = _0.localCount % 4 === 2
			; this.part3Loop = _0.localCount % 4 === 3
			; this.part4Loop = _0.localCount % 4 === 0
			; this.point = $1
				? $0.thisCorkRecord
				: $0.thisRecord
			; this.printCurve = printCurve
			; this.printLine = printLine
			; this.printRotate = printRotate
			; this.printScale = printScale
			; this.radius = $1
				? $0.corkRadius
				: $0.radius
			; this.speed = _0.speed.substr( 0, _0.speed.length - 1 ) / 2
				+ _0.speed.substr( _0.speed.length - 1 )
			; this.string = ''
		}
	}
	function animateShrink( $0, $1 ) {
		function printFromTo( $0 ) {
			const _2 = _0.tie( _1, _1.printFromTo, new _PrintFromTo, new PrintFromTo( $0 ) )
			; return '  <animate\n'
				+ '	  href="#' + _1.href + '"\n'
				+ ( _2.id ? '	  id="' + _2.id + '"\n' : '' )
				+ '	  attributeName="' + _2.type + '"\n'
				+ '	  from="' + _2.from + '"\n'
				+ '	  to="' + _2.to + '"\n'
				+ '	  dur="' + _1.speed + '"\n'
				+ '	  begin="' + _1.begin + '"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintFromTo() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintFromTo( $0 ) {
				this.type = $0.type
				; this.id = $0.id || null
				; this.from = $0.from
				; this.to = $0.to
			}
		}
		function printPause() {
			const _2 = _0.tie( _1, _1.printPause, new _PrintPause, new PrintPause )
			; return '  <animate\n'
				+ '	  href="#' + _1.href + '"\n'
				+ '	  id="' + _1.id + '"\n'
				+ '	  dur="' + _0.pause + '"\n'
				+ '	  begin="' + _1.id + 'shrink.end"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintPause() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintPause() {
				this.ok = true
			}
		}
		const _1 = _0.tie( _0, animateShrink, new _AnimateShrink, new AnimateShrink( $0, $1 ) )
		; if ( _0.vertical ) {
			_0.syn( _1, {
				flip: _0.localCount % 2 > 0
			}, 'n' )
			;
		}
		if ( _1.cork ) {
			_0.syn( _1, {
				href: _0.id + 'Infinity'
				, height: _0.corkA
				, width: _0.corkB2
			}, 'n' )
			; if ( _1.flip ) {
				_0.syn( _1, {
					height: _0.corkB2
					, width: _0.corkA
				}, 'n' )
				;
			}
		} else if ( _1.flip ) {
			_0.syn( _1, {
				height: _0.a
				, width: _0.b2
			}, 'n' )
			;
		}
		_1.string += _1.printFromTo( {
			type: 'width'
			, href: _1.href
			, from: _1.height * _1.thisPower
			, to: _1.height * _1.nextPower
		} )
		; _1.string += _1.printFromTo( {
			type: 'height'
			, href: _1.href
			, id: _1.id + ( _1.pause ? 'shrink' : '' )
			, from: _1.width * _1.thisPower
			, to: _1.width * _1.nextPower
		} )
		; if ( _1.pause ) {
			_1.string += _1.printPause()
			;
		}
		if ( _1.cork ) {
			_1.string += '  <!-- ' + _0.id + _0.globalCount
				+ ' animate' + _0.localCount + ' cork end -->\n'
			;
		}
		return _1.string
		;
		function _AnimateShrink() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function AnimateShrink( $0, $1 ) {
			this.begin = _0.id + _0.globalCount
				+ 'animate' + _0.localCount
				+ ( $1 ? 'Infinity' : '' )
				+ 'path1.end'
			; this.cork = $1
			; this.flip = _0.localCount % 2 > 0 ? false : true
			; this.height = _0.b2
			; this.href = _0.id + _0.globalCount
			; this.id = _0.id + _0.globalCount
				+ 'animate' + _0.localCount
			; this.nextPower = $0.xPower
			; this.pause = '0s' === _0.pause ? false : true
			; this.printFromTo = printFromTo
			; this.printPause = printPause
			; this.speed = _0.speed.substr( 0, _0.speed.length - 1 ) / 2
				+ _0.speed.substr( _0.speed.length - 1 )
			; this.string = ''
			; this.thisPower = $0.xPowerMinus1
			; this.width = _0.a
		}
	}
	function animateSize( $0, $1 ) {
		function printValue( $0 ) {
			const _2 = _0.tie( _1, _1.printValue, new _PrintValue, new PrintValue( $0 ) )
			; return '  <animate\n'
				+ '	  href="#' + _1.href + '"\n'
				+ '	  attributeName="' + _2.type + '"\n'
				+ '	  values="' + _2.value + '"\n'
				+ '	  begin="' + _1.begin + '"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintValue() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintValue( $0 ) {
				this.type = $0.type
				; this.value = $0.value
			}
		}
		const _1 = _0.tie( _0, animateSize, new _AnimateSize, new AnimateSize( $0, $1 ) )
		; if ( ( _0.vertical && ! _1.cork ) || _1.cork ) {
			_0.syn( _1, {
				flip: _0.localCount % 2 > 0
			}, 'n' )
			;
		}
		if ( _1.cork ) {
			_1.string += '  <!-- ' + _0.id + _0.globalCount
				+ ' animate' + _0.localCount + ' cork start -->\n'
			; _0.syn( _1, {
				href: _0.id + 'Infinity'
				, height: _0.corkA
				, width: _0.corkB2
			}, 'n' )
			; if (
				( ! _0.vertical && _1.flip )
				|| ( _0.vertical && ! _1.flip )
			) {
				_0.syn( _1, {
					height: _0.corkB2
					, width: _0.corkA
				}, 'n' )
				;
			}
			if ( 1 === _0.localCount ) {
				_0.syn( _1, {
					href: _0.id + 'Cork'
				}, 'n' )
				; _1.string += _1.printValue( {
					type: 'width'
					, value: 0
				} )
				; _0.syn( _1, {
					href: _0.id + 'Infinity'
				}, 'n' )
				;
			}
		} else if ( _1.flip ) {
			_0.syn( _1, {
				height: _0.b2
				, width: _0.a
			}, 'n' )
			;
		}
		_1.string += _1.printValue( {
			type: 'width'
			, value: _1.width * _1.thisPower
		} )
		; _1.string += _1.printValue( {
			type: 'height'
			, value: _1.height * _1.thisPower
		} )
		; return _1.string
		;
		function _AnimateSize() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function AnimateSize( $0, $1 ) {
			this.begin = $0.begin
			; this.cork = $1
			; this.flip = _0.localCount % 2 > 0 ? false : true
			; this.height = _0.a
			; this.href = _0.id + _0.globalCount
			; this.printValue = printValue
			; this.string = ''
			; this.thisPower = $0.xPowerMinus1
			; this.width = _0.b2
		}
	}
	function download( $0 ) {
		const _1 = _0.tie( _0, download, new _Download, new Download( $0 ) )
		; if ( _1.file[ 0 ] ) {
			_0.syn( _1.lastFileA, {
				id: 'file' + _1.file.length
			}, 'n' )
			;
		}
		_0.syn( _1.fileA, {
			id: 'file'
		}, 'n' )
		; _1.fileA.setAttribute(
			'href'
			, 'data:text/plain;charset=utf-8,'
				+ encodeURIComponent( _1.text )
		)
		; _0.doc.body.append( _1.fileA )
		; _1.downloadDiv.prepend( _1.socialNoteP )
		; _1.downloadDiv.prepend( _1.breakerP )
		; return _1
		;
		function _Download() {
			this.$auth = 'besta.pe'
		}
		function Download( $0 ) {
			this.breakerP = _0.doc.createElement( 'p' )
			; this.breakerP.innerHTML = '//////////////////////'
				+ '//////////////////////'
			; this.downloadDiv = _0.doc.getElementById( 'download' )
			; this.downloadDiv.innerHTML = '<button id="save"'
				+ 'style="background-color: lightsalmon;">'
				+ 'click here to download the spiral</button>'
			; this.file = [
				..._0.doc.getElementsByClassName( 'file' )
			]
			; this.fileA = _0.doc.createElement( 'a' )
			; this.fileA.style.display = 'none'
			; this.fileA.download = _0.file
			; this.fileA.className = 'file'
			; this.lastFileA = _0.doc.getElementById( 'file' )
			; this.socialNoteP = _0.doc.createElement( 'p' )
			; this.socialNoteP.innerHTML = '<b>#pythagmetal</b>'
				+ ' is the social media hash'
				+ ' for images made by this program.'
			; this.svg = _0.doc.getElementById( 'svg' )
			; this.text = $0
		}
	}
	function drawPath( $0, $1 ) {
		function printCurve( $0 ) {
			const _2 = _0.tie( _1, _1.printCurve, new _PrintCurve, new PrintCurve( $0 ) )
			; return '  <path\n'
				+ '	  id="' + _2.id + '"\n'
				+ '	  d="M ' + _1.point.A.x + ' '
				+ _1.point.A.y + '\n'
				+ '		 A ' + _1.radius + ' ' + _1.radius + '\n'
				+ '		 0, 0, 0 '
				+ _1.point.B.x + ' ' + _1.point.B.y + '"\n'
				+ '	  opacity="' + _1.opacity + '"\n'
				+ '	  stroke-width="' + _2.size + '"\n'
				+ '	  stroke="' + _2.colour + '" />\n'
			;
			function _PrintCurve() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintCurve( $0 ) {
				this.id = $0.id
				; this.size = $0.size
				; this.colour = $0.colour
			}
		}
		function printLine( $0 ) {
			const _2 = _0.tie( _1, _1.printLine, new _PrintLine, new PrintLine( $0 ) )
			; return '  <path\n'
				+ '	  id="' + _2.id + '"\n'
				+ '	  d="M ' + _1.point.B.x + ' '
				+ _1.point.B.y + '\n'
				+ '		 L ' + _1.point.C.x + ' '
				+ _1.point.C.y + '"\n'
				+ '	  opacity="' + _1.opacity + '"\n'
				+ '	  stroke-width="' + _2.size + '"\n'
				+ '	  stroke="' + _2.colour + '" />\n'
			;
			function _PrintLine() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintLine( $0 ) {
				this.id = $0.id
				; this.size = $0.size
				; this.colour = $0.colour
			}
		}
		const _1 = _0.tie( _0, drawPath, new _DrawPath, new DrawPath( $0, $1 ) )
		; _1.string += '  <!-- ' + _1.id
			+ ' animate' + _0.localCount + ' path start -->\n'
		; _1.string += _1.printCurve( {
			id: _1.id + 'curve1in1'
			, size: _1.innerSize
			, colour: _1.innerColour
		} )
		; _1.string += _1.printCurve( {
			id: _1.id + 'curve1'
			, size: _1.outerSize
			, colour: _1.outerColour
		} )
		; _1.string += _1.printLine( {
			id: _1.id + 'line1in1'
			, size: _1.innerSize
			, colour: _1.innerColour
		} )
		; _1.string += _1.printLine( {
			id: _1.id + 'line1'
			, size: _1.outerSize
			, colour: _1.outerColour
		} )
		; _1.string += '  <!-- ' + _1.id
			+ ' animate' + _0.localCount + ' path end -->\n'
		; return _1.string
		;
		function _DrawPath() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function DrawPath( $0, $1 ) {
			this.id = _0.id
				+ ( $1 ? 'Infinity' : '' )
				+ _0.globalCount
			; this.innerColour = 'black'
			; this.innerSize = _0.drawPathSizeInner
			; this.opacity = _0.drawPathOpacity
			; this.outerColour = $1
				? _0.colours[ ( _0.globalCount ) % _0.colours.length ]
				: _0.colours[ ( _0.globalCount - 1 ) % _0.colours.length ]
			; this.outerSize = _0.drawPathSizeOuter
			; this.point = $1
				? $0.thisCorkRecord
				: $0.thisRecord
			; this.printCurve = printCurve
			; this.printLine = printLine
			; this.radius = $1 ? $0.corkRadius : $0.radius
			; this.string = ''
		}
	}
	function dynamicObjectLoop( $0 ) {
		function getPoints() {
			const _2 = _0.tie( _1, _1.getPoints, new _GetPoints, new GetPoints )
			; if ( _0.vertical ) {
				_0.syn( _1, {
					part2Loop: _1.count % 4 === 1
					, part3Loop: _1.count % 4 === 2
					, part4Loop: _1.count % 4 === 3
					, part1Loop: _1.count % 4 === 0
				}, 'n' )
				;
			}
			_0.syn( _1, {
				endPoint: _0.endPoints[ _1.index ]
				, endPointHorizontal: _1.part1Loop || _1.part3Loop
					? _0.a * _1.endPointX
					: _0.b2 * _1.endPointX
				, endPointVertical: _1.part1Loop || _1.part3Loop
					? _0.b2 * _1.endPointX
					: _0.a * _1.endPointX
			}, 'n' )
			; if ( _1.part1Loop ) {
				_1.string += _1.printObjectDimension( {
					x: _1.endPoint.x
					, y: _1.endPoint.y - _1.endPointVertical
				} )
				; return _2
				;
			}
			if ( _1.part3Loop ) {
				_1.string += _1.printObjectDimension( {
					x: _1.endPoint.x - _1.endPointHorizontal
					, y: _1.endPoint.y
				} )
				; return _2
				;
			}
			if ( _1.part4Loop ) {
				_1.string += _1.printObjectDimension( {
					x: _1.endPoint.x - _1.endPointHorizontal
					, y: _1.endPoint.y - _1.endPointVertical
				} )
				; return _2
				;
			}
			_1.string += _1.printObjectDimension( {
				x: _1.endPoint.x
				, y: _1.endPoint.y
			} )
			; return _2
			;
			function _GetPoints() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function GetPoints() {
				this.ok = true
			}
		}
		function next() {
			const _2 = _0.tie( _1, _1.next, new _Next, new Next )
			; if ( _1.count > -1 ) {
				if ( _0.picture && ! _1.end ) {
					_1.writeNext()
					; return _2
					;
				}
				_0.svg += _1.string
				; _1.writeNext()
				; return _2
				;
			}
			if ( _1.count > -2 && _0.cork ) {
				_0.corkThread.splice( 3, 1, {
					C: {
						x: _1.corkX
						, y: _1.corkY
					}
				} )
				; _1.string += _1.printCork()
				; if ( _0.picture && ! _1.end ) {
					_1.writeNext()
					; return _2
					;
				}
				_0.svg += _1.string
				; _1.writeNext()
				; return _2
				;
			}
			if ( _0.picture && _1.end ) {
				_0.footer( true )
				; return _2
				;
			}
			_0.part1Loop()
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
				+ '	  id="' + _0.id + 'Infinity"\n'
				+ '	  stroke="' + _0.cellBorderColour + '"\n'
				+ '	  stroke-width="' + _0.cellBorderSize + '"\n'
				+ '	  opacity="' + _0.opacity + '"\n'
				+ '	  fill="' + _0.cork + '" />\n'
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
			; return '	  stroke="' + _0.cellBorderColour + '"\n'
				+ '	  stroke-width="' + _0.cellBorderSize + '"\n'
				+ '	  opacity="' + _0.opacity + '"\n'
				+ '	  fill="' + _0.colours[
					( _1.index - 1 ) % _0.colours.length
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
		function printObjectDimension( $0 ) {
			const _2 = _0.tie( _1, _1.printObjectDimension, new _PrintObjectDimension, new PrintObjectDimension( $0 ) )
			; return '	  height="' + _1.endPointVertical + '"\n'
				+ '	  width="' + _1.endPointHorizontal + '"\n'
				+ '	  x="' + _2.x + '"\n'
				+ '	  y="' + _2.y + '"\n'
			;
			function _PrintObjectDimension() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintObjectDimension( $0 ) {
				this.x = $0.x
				; this.y = $0.y
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
			_0.dynamicObjectLoop( {
				count: _1.count
				, end: _1.end
			} )
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
		; if ( _0.picture && _1.end && _1.count > -1 ) {
			_1.getPoints()
			;
		}
		if ( _0.imageDiv[ 0 ] ) {
			_1.string += (
				_0.picture && _1.count > -1
					? ''
					: '	  width="0"\n'
			) + '	  xlink:href="' + _1.imageDiv.querySelector(
				'[id=image' + (
					_0.vertical
						? ( _1.index + 2 ) % 4
						: _1.index % 4
				) + ']'
			).href + '"\n'
			; _1.string += _1.printObjectEnd()
			; _1.next()
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
			this.count = $0.count
			; this.corkX = undefined
			; this.corkY = undefined
			; this.end = $0.end
			; this.endPoint = null
			; this.endPointHorizontal = null
			; this.endPointVertical = null
			; this.getPoints = getPoints
			; this.imageDiv = _0.imageDiv[
				( _0.repeat - this.count ) % _0.imageDiv.length
			]
			; this.index = _0.repeat - this.count
			; this.endPointX = Math.pow( _0.x, this.index )
			; this.next = next
			; this.part1Loop = this.count % 4 === 0
			; this.part2Loop = this.count % 4 === 1
			; this.part3Loop = this.count % 4 === 2
			; this.part4Loop = this.count % 4 === 3
			; this.printCork = printCork
			; this.printObjectEnd = printObjectEnd
			; this.printObjectDimension = printObjectDimension
			; this.readNext = readNext
			; this.string = (
				_0.imageDiv[ 0 ] ? '  <image\n' : '  <rect\n'
			) + '	  id="' + _0.id + this.index + '"\n'
			; this.writeNext = writeNext
		}
	}
	function endParts() {
		const _1 = _0.tie( _0, endParts, new _EndParts, new EndParts )
		; _0.globalCount ++
		; if ( _0.picture ) {
			if ( _0.cork ) {
				_0.corkEndPoints.push(
					_0.corkThread[ ( _0.localCount - 1 ) % 4 ].C
				)
				;
			}
			_0.endPoints.push(
				_0.thread[ ( _0.localCount - 1 ) % 4 ].C
			)
			;
		}
		if ( _0.repeat - _0.globalCount + 1 ) {
			_0.syn( _0, {
				localCount: 1
				, corkThread: [ null, null, null, null ]
				, thread: [ null, null, null, null ]
			}, 'n' )
			; _0.part1Loop()
			; return _1
			;
		}
		_0.footer()
		; return _1
		;
		function _EndParts() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function EndParts() {
			this.ok = true
		}
	}
	function footer( $0 ) {
		function printPause() {
			const _2 = _0.tie( _1, _1.printPause, new _PrintPause, new PrintPause )
			; return '  <animate\n'
				+ '	  href="#' + _1.href + '"\n'
				+ '	  id="' + _0.id + 'ResetAnimate"\n'
				+ '	  attributeName="fill"\n'
				+ '	  values="' + _1.endColour + '"\n'
				+ '	  dur="' + _0.pause + '"\n'
				+ '	  begin="' + _1.begin0 + '.end"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintPause() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintPause() {
				this.ok = true
			}
		}
		function printReset( $0 ) {
			const _2 = _0.tie( _1, _1.printReset, new _PrintReset, new PrintReset( $0 ) )
			; return '  <animate\n'
				+ '	  href="#' + _2.href + '"\n'
				+ (
					_2.id
						? '	  id="' + _0.id + 'EndAnimate"\n'
						: ''
				)
				+ '	  attributeName="' + _2.attributeName + '"\n'
				+ '	  values="' + _2.value + '"\n'
				+ '	  dur="' + _0.pause + '"\n'
				+ '	  begin="' + _2.begin + '.end"\n'
				+ '	  fill="freeze" />\n'
			;
			function _PrintReset() {
				this.$0 = { record: false }
				; this.$auth = 'besta.pe'
			}
			function PrintReset( $0 ) {
				this.href = $0.href
				; this.id = $0.id || false
				; this.attributeName = $0.attributeName
				; this.value = $0.value
				; this.begin = $0.begin
			}
		}
		function writeNext( $0 ) {
			const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
			; if ( _2.error ) {
				_0.log( 'warn', String( _2.error ), _1 )
				;
			}
			_0.syn( _0.doc.getElementById( 'svg' ), {
				innerHTML: _0.svg
			}, 'n' )
			; _0.download( _0.svg )
			; _0.log(
				'log'
				, 'Finished making ' + _0.file
					+ ' with a ' + _0.x + ' scale invariant.\n'
					+ ' :0) :O) :o)'
				, _1
			)
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
		const _1 = _0.tie( _0, footer, new _Footer, new Footer( $0 ) )
		; if ( _0.picture && ! _1.done ) {
			_0.dynamicObjectLoop( { count: _0.repeat, end: true } )
			; return _1
			;
		}
		_1.string += '  <!-- dynamic ' + _0.id + ' objects end -->\n'
		; if ( _0.loop || _0.clickStart ) {
			if ( _1.pause ) {
				_1.string += _1.printPause()
				; _1.string += _1.printReset( {
					href: _1.href
					, id: true
					, attributeName: 'fill'
					, value: _0.startColour
					, begin: _1.begin1
				} )
				;
			} else {
				_1.string += _1.printReset( {
					href: _1.href
					, attributeName: 'fill'
					, value: _0.startColour
					, begin: _1.begin0
				} )
				;
			}
			while ( _1.count < _0.repeat + 1 ) {
				_1.string += _1.printReset( {
					href: _0.id + _1.count
					, attributeName: 'width'
					, value: 0
					, begin: _1.pause ? _1.begin1 : _1.begin0
				} )
				; _1.count ++
				;
			}
			if ( _0.cork && _1.pause ) {
				_1.string += _1.printReset( {
					href: _0.id + 'Infinity'
					, attributeName: 'width'
					, value: 0
					, begin: _1.begin1
				} )
				; _1.string += _1.printReset( {
					href: _0.id + 'Cork'
					, attributeName: 'width'
					, value: _0.vertical ? _0.corkA : _0.a
					, begin: _1.begin1
				} )
				;
			}
		}
		_1.string += (
			_0.embed ? '  <!-- ' + _0.id + ' end -->' : '</svg>\n'
		)
		; _0.svg += _1.string
		; _1.writeNext()
		; return _1
		;
		function _Footer() {
			this.$auth = 'besta.pe'
		}
		function Footer( $0 ) {
			this.done = Boolean( $0 )
			; this.begin0 = _0.id + _0.repeat
				+ 'animate' + _0.repeat
			; this.begin1 = _0.id + 'ResetAnimate'
			; this.count = '0s' === _0.pause ? 2 : 1
			; this.endColour = _0.colours[
				( _0.globalCount + 1 ) % _0.colours.length
			]
			; this.href = _0.id + ( _0.repeat + 1 )
			; this.pause = '0s' === _0.pause ? false : true
			; this.printPause = printPause
			; this.printReset = printReset
			; this.string = '  <!-- ' + _0.id + ' animation end -->\n'
			; this.writeNext = writeNext
		}
	}
	function header() {
		function CorkMeasure() {
			this.height = - _0.borderSize
				+ (
					_0.vertical
						? _0.totalHeight
						: _0.totalHeight - _0.b2
				)
			; this.width = - _0.borderSize
				+ (
					_0.vertical
						? _0.totalWidth - _0.b2
						: _0.totalWidth
				)
			; this.x = _0.offset.x
				+ _0.borderSize / 2
				+ ( _0.vertical ? _0.b2 : 0 )
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ ( _0.vertical ? 0 : _0.b2 )
		}
		function _CorkMeasure() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function next() {
			const _2 = _0.tie( _1, _1.next, new _Next, new Next )
			; _1.string += _1.printTailEnd()
			; if ( _0.cork ) {
				_0.syn( _1, {
					corkMeasure: new _1.CorkMeasure
				}, 'n' )
				; _1.string += _1.printCork()
				;
			}
			_1.string += '  <!-- static ' + _0.id + ' objects end -->\n'
			; _1.string += '  <!-- dynamic ' + _0.id + ' objects start -->\n'
			; _0.svg += _1.string
			; _1.writeNext()
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
				+ '	  id="' + _0.id + '0"\n'
				+ '	  width="' + _0.totalWidth + '"\n'
				+ '	  height="' + _0.totalHeight + '"\n'
				+ '	  x="' + _0.offset.x + '"\n'
				+ '	  y="' + _0.offset.y + '"\n'
				+ (
					_0.background
						? '	  fill="' + _0.background + '"\n'
						: ''
				)
				+ '	  stroke="' + _0.borderColour + '"\n'
				+ '	  stroke-width="' + _0.borderSize + '" />\n'
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
				+ '	  id="' + _0.id + 'Cork"\n'
				+ '	  width="' + _1.corkMeasure.width + '"\n'
				+ '	  height="' + _1.corkMeasure.height + '"\n'
				+ '	  x="' + _1.corkMeasure.x + '"\n'
				+ '	  y="' + _1.corkMeasure.y + '"\n'
				+ '	  stroke="' + _0.cellBorderColour + '"\n'
				+ '	  stroke-width="' + _0.cellBorderSize + '"\n'
				+ '	  opacity="' + _0.opacity + '"\n'
				+ '	  fill="' + _0.cork + '" />\n'
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
				+ '	viewBox="' + ( - _0.viewBoxAdd.width )
				+ ' ' + ( - _0.viewBoxAdd.height )
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
				+ '	  x="' + ( _0.offset.x + _0.borderSize / 2 ) + '"\n'
				+ '	  y="' + ( _0.offset.y + _0.borderSize / 2 ) + '"\n'
				+ '	  opacity="' + _0.opacity + '"\n'
				+ '	  fill="' + _0.startColour + '"\n'
				+ '	  stroke="' + _0.cellBorderColour + '"\n'
				+ '	  stroke-width="' + _0.cellBorderSize + '" />\n'
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
			; return ( _0.imageDiv[ 0 ] ? '  <image\n' : '  <rect\n' )
				+ '	  id="' + _0.id + ( _0.repeat + 1 ) + '"\n'
				+ ( _0.imageDiv[ 0 ] ? '	  href="' : '' )
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
			return _2
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
			_0.dynamicObjectLoop( { count: _0.repeat } )
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
		const _1 = _0.tie( _0, header, new _Header, new Header )
		; _1.string += _1.printParentStart()
		; if ( _0.embed ) {
			_0.syn( _1, { string: '' }, 'n' )
			;
		}
		_1.string += '  <!-- static ' + _0.id + ' objects start -->\n'
		; _1.string += _1.printCanvas()
		; _1.string += _1.printTailStart()
		; if ( _1.imageDiv ) {
			_1.string += _1.imageDiv.querySelector( '[id=image0]' ).href + '"\n'
			; _1.string += _1.printTailEnd()
			; _1.next()
			; return _1
			;
		}
		_1.next()
		; return _1
		;
		function _Header() {
			this.$auth = 'besta.pe'
		}
		function Header() {
			this.corkMeasure = null
			; this.CorkMeasure = CorkMeasure
			; this._CorkMeasure = _CorkMeasure
			; this.height = _0.vertical ? _0.a : _0.b2
			; this.imageDiv = _0.imageDiv.shift()
			; this.next = next
			; this.printCanvas = printCanvas
			; this.printCork = printCork
			; this.printParentStart = printParentStart
			; this.printTailStart = printTailStart
			; this.printTailEnd = printTailEnd
			; this.readNext = readNext
			; this.string = ''
			; this.viewBoxWidth = _0.totalWidth + ( _0.viewBoxAdd.width * 2 )
			; this.viewBoxHeight = _0.totalHeight + ( _0.viewBoxAdd.height * 2 )
			; this.width = _0.vertical ? _0.b2 : _0.a
			; this.writeNext = writeNext
		}
	}
	function html() {
		const _1 = _0.tie( _0, html, new _Html, new Html )
		; if ( _0.init ) {
			_0.alchemyScript.addEventListener( 'click', () => {
				_0.alchemy()
				;
			} )
			; return false
			;
		}
		if ( _0.inputImg && _0.data.vertical ) {
			_0.syn( _0, {
				a: _0.inputImg.naturalHeight
				, totalHeight: _0.inputImg.naturalHeight + _0.borderSize
				, b2: _0.inputImg.naturalWidth
			}, 'n' )
			;
		}
		if ( _0.inputImg && ! _0.data.vertical ) {
			_0.syn( _0, {
				a: _0.inputImg.naturalWidth
				, totalWidth: _0.inputImg.naturalWidth + _0.borderSize
				, b2: _0.inputImg.naturalHeight
			}, 'n' )
			;
		}
		return _1.ok
		;
		function _Html() {
			this.$auth = 'besta.pe'
		}
		function Html() {
			this.ok = true
		}
	}
	function part1Loop() {
		function CorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPower
			; this.addToX = _0.b2 * _1.xPower
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
				+ _0.a * _1.xPower
			; this.addToY = - _0.b2 * _1.xPowerMinus3
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function firstLastCorkRecord() {
			if ( _0.vertical ) {
				_0.syn( _1, {
					lastCorkRecord: {
						C: {
							x: _0.offset.x
								+ _0.borderSize / 2
								+ _0.b2 * _1.xPowerMinus1
							, y: _0.offset.y
								+ _0.borderSize / 2
								+ _0.a * _1.xPowerMinus1
						}
					}
				}, 'n' )
				; return
				;
			}
			_0.syn( _1, {
				lastCorkRecord: {
					C: {
						x: _0.offset.x + _0.borderSize / 2
						, y: _0.offset.y
							+ _0.borderSize / 2
							+ _0.b2 * _1.xPowerMinus1
					}
				}
			}, 'n' )
			;
		}
		function firstLastRecord() {
			if ( _0.vertical ) {
				_0.syn( _1, {
					lastRecord: {
						C: {
							x: _0.offset.x + _0.borderSize / 2
							, y: _0.offset.y + _0.borderSize / 2
						}
					}
				}, 'n' )
				; return
				;
			}
			_0.syn( _1, {
				lastRecord: {
					C: {
						x: _0.offset.x
							+ _0.borderSize / 2
							+ _0.a * _1.xPowerMinus1
						, y: _0.offset.y + _0.borderSize / 2
					}
				}
			}, 'n' )
			;
		}
		function PointC() {
			this.x = _0.offset.x + _0.borderSize / 2
			; this.addToX = _0.b2 * _1.xPowerMinus4
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
			; this.addToY = _0.b2 * _1.xPowerMinus1
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function printValue() {
			return '  <animate\n'
				+ '	  href="#' + _0.id + ( _0.repeat + 1 ) + '"\n'
				+ '	  attributeName="fill"\n'
				+ '	  values="' + _1.colour + '"\n'
				+ '	  dur="' + ( _1.firstObject ? '0s' : _0.speed ) + '"\n'
				+ '	  begin="' + _1.begin + '"\n'
				+ '	  fill="freeze" />\n'
			;
		}
		function VerticalCorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
				+ _0.a * _1.xPower
			; this.addToX = - _0.b2 * _1.xPowerMinus3
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus1
				- _0.b2 * _1.xPower
			; this.addToY = - _0.b2 * _1.xPower
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
			; this.addToX = _0.b2 * _1.xPowerMinus1
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus1
			; this.addToY = - _0.b2 * _1.xPowerMinus4
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
			; if ( _2.error ) {
				_0.log( 'warn', String( _2.error ), _1 )
				;
			}
			if ( _0.globalCount - _0.localCount ) {
				_0.localCount ++
				; _1.nextPart( _1 )
				; return _2
				;
			}
			_0.endParts()
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
		const _1 = _0.tie( _0, part1Loop, new _Part1Loop, new Part1Loop )
		; if ( ! _1.lastRecord ) {
			_1.firstLastRecord()
			; if ( _0.cork ) {
				_1.firstLastCorkRecord()
				;
			}
		}
		if ( _1.firstLoop ) {
			if ( _1.firstObject ) {
				_0.syn( _1, {
					begin: _1.start + ( _0.loop ? '; ' + _1.loopStart : '' )
				}, 'n' )
				;
			} else {
				_0.syn( _1, {
					begin: _0.id + ( _0.globalCount - 1 )
						+ 'animate' + ( _0.globalCount - 1 )
						+ '.end'
				}, 'n' )
				;
			}
			if ( ! _0.lead ) {
				_1.string += _1.printValue()
				;
			}
		}
		if ( _0.vertical ) {
			_0.syn( _1, {
				radiusX: _1.radius
				, corkRadiusY: - _1.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( _1 )
		; return _1
		;
		function _Part1Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part1Loop() {
			this.begin = _0.id + (
				_0.lead
					? ( _0.globalCount - 1 ) + 'animate' + ( _0.localCount - 1 )
					: _0.globalCount + 'animate' + ( _0.localCount - 1 )
			) + '.end'
			; this.colour = ( _0.globalCount - 0 === _0.repeat ) && _0.lead
				? _0.colours[ _0.colours.length - 1 ]
				: _0.colours[ _0.globalCount % _0.colours.length ]
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _0.corkB2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.corkRadiusX = this.corkRadius
			; this.corkRadiusY = this.corkRadius
			; this.drawPath = _0.drawPath1
			; this.firstLastCorkRecord = firstLastCorkRecord
			; this.firstLastRecord = firstLastRecord
			; this.firstLoop = _0.localCount < 5
			; this.firstObject = _0.globalCount < 2
			; this.lastCorkRecord = _0.corkThread[ 3 ] ? _0.corkThread[ 3 ] : null
			; this.lastRecord = _0.thread[ 3 ] ? _0.thread[ 3 ] : null
			; this.loopStart = (
				'0s' === _0.pause
					? _0.id + _0.repeat + 'animate' + _0.repeat
					: _0.id + 'EndAnimate'
			) + '.end'
			; this.nextPart = _0.part2Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.printValue = printValue
			; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.radiusX = - this.radius
			; this.radiusY = this.radius
			; this.start = _0.clickStart
				? _0.id + ( _0.repeat + 1 ) + '.click'
				: _0.pause
			; this.string = (
				this.firstLoop
					? '  <!-- dynamic object automation -->\n'
					: ''
			)
				+ '  <!-- ' + _0.id + _0.globalCount
				+ ' animate' + _0.localCount + ' -->\n'
			; this.thisCorkRecord = _0.corkThread[ 0 ] ? _0.corkThread[ 0 ] : null
			; this.thisRecord = _0.thread[ 0 ] ? _0.thread[ 0 ] : null
			; this.threadCount = ( _0.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _0.x, _0.localCount )
			; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
			; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		}
	}
	function part2Loop() {
		function CorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus2
			; this.addToX = - _0.b2 * _1.xPowerMinus3
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus3
				- _0.b2 * _1.xPower
			; this.addToY = - _0.b2 * _1.xPower
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
			; this.addToX = _0.b2 * _1.xPowerMinus1
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus3
			; this.addToY = - _0.b2 * _1.xPowerMinus4
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalCorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus3
				- _0.b2 * _1.xPower
			; this.addToX = - _0.b2 * _1.xPower
			; this.y = _0.offset.y + _0.borderSize / 2
			; this.addToY = _0.b2 * _1.xPowerMinus3
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus3
			; this.addToX = - _0.b2 * _1.xPowerMinus4
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.a * _1.xPower
			; this.addToY = - _0.b2 * _1.xPowerMinus1
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
			; if ( _2.error ) {
				_0.log( 'warn', String( _2.error ), _1 )
				;
			}
			if ( _0.globalCount - _0.localCount ) {
				_0.localCount ++
				; _1.nextPart( _1 )
				; return _2
				;
			}
			_0.endParts()
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
		const _1 = _0.tie( _0, part2Loop, new _Part2Loop, new Part2Loop )
		; if ( _0.vertical ) {
			_0.syn( _1, {
				radiusY: - _1.radius
				, corkRadiusX: - _1.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( _1 )
		; return _1
		;
		function _Part2Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part2Loop() {
			this.begin = _0.id + (
				_0.lead
					? ( _0.globalCount - 1 ) + 'animate' + ( _0.globalCount - 1 )
					: _0.globalCount + 'animate' + ( _0.localCount - 1 )
			) + '.end'
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _0.corkB2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.corkRadiusX = this.corkRadius
			; this.corkRadiusY = - this.corkRadius
			; this.drawPath = _0.drawPath2
			; this.lastCorkRecord = _0.corkThread[ 0 ] ? _0.corkThread[ 0 ] : null
			; this.lastRecord = _0.thread[ 0 ]
			; this.nextPart = _0.part3Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.radiusX = this.radius
			; this.radiusY = this.radius
			; this.string = '  <!-- ' + _0.id + _0.globalCount
				+ ' animate' + _0.localCount + ' -->\n'
			; this.thisCorkRecord = _0.corkThread[ 1 ] ? _0.corkThread[ 1 ] : null
			; this.thisRecord = _0.thread[ 1 ] ? _0.thread[ 1 ] : null
			; this.threadCount = ( _0.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _0.x, _0.localCount )
			; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
			; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
			; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		}
	}
	function part3Loop() {
		function CorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus3
				- _0.b2 * _1.xPower
			; this.addToX = - _0.b2 * _1.xPower
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus3
			; this.addToY = _0.b2 * _1.xPowerMinus3
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus3
			; this.addToX = - _0.b2 * _1.xPowerMinus4
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus4
				- _0.b2 * _1.xPowerMinus1
			; this.addToY = - _0.b2 * _1.xPowerMinus1
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalCorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus3
			; this.addToX = _0.b2 * _1.xPowerMinus3
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPower
			; this.addToY = _0.b2 * _1.xPower
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus4
				- _0.b2 * _1.xPowerMinus1
			; this.addToX = - _0.b2 * _1.xPowerMinus1
			; this.y = _0.offset.y + _0.borderSize / 2
			; this.addToY = _0.b2 * _1.xPowerMinus4
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
			; if ( _2.error ) {
				_0.log( 'warn', String( _2.error ), _1 )
				;
			}
			if ( _0.globalCount - _0.localCount ) {
				_0.localCount ++
				; _1.nextPart( _1 )
				; return _2
				;
			}
			_0.endParts()
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
		const _1 = _0.tie( _0, part3Loop, new _Part3Loop, new Part3Loop )
		; if ( _0.vertical ) {
			_0.syn( _1, {
				radiusX: - _1.radius
				, corkRadiusY: _1.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( _1 )
		; return _1
		;
		function _Part3Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part3Loop() {
			this.begin = _0.id + (
				_0.lead
					? ( _0.globalCount - 1 ) + 'animate' + ( _0.globalCount - 1 )
					: _0.globalCount + 'animate' + ( _0.localCount - 1 )
			) + '.end'
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _0.corkB2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.corkRadiusX = - this.corkRadius
			; this.corkRadiusY = - this.corkRadius
			; this.drawPath = _0.drawPath3
			; this.lastCorkRecord = _0.corkThread[ 1 ] ? _0.corkThread[ 1 ] : null
			; this.lastRecord = _0.thread[ 1 ]
			; this.nextPart = _0.part4Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.radiusX = this.radius
			; this.radiusY = - this.radius
			; this.string = '  <!-- ' + _0.id + _0.globalCount
				+ ' animate' + _0.localCount + ' -->\n'
			; this.thisCorkRecord = _0.corkThread[ 2 ] ? _0.corkThread[ 2 ] : null
			; this.thisRecord = _0.thread[ 2 ] ? _0.thread[ 2 ] : null
			; this.threadCount = ( _0.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _0.x, _0.localCount )
			; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
			; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		}
	}
	function part4Loop() {
		function CorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus3
			; this.addToX = _0.b2 * _1.xPowerMinus3
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus4
				+ _0.b2 * _1.xPower
			; this.addToY = _0.b2 * _1.xPower
		}
		function _CorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function PointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus4
				- _0.b2 * _1.xPowerMinus1
			; this.addToX = - _0.b2 * _1.xPowerMinus1
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus4
			; this.addToY = _0.b2 * _1.xPowerMinus4
		}
		function _PointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalCorkPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus4
				+ _0.b2 * _1.xPower
			; this.addToX = _0.b2 * _1.xPower
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
				+ _0.a * _1.xPower
			; this.addToY = - _0.b2 * _1.xPowerMinus3
		}
		function _VerticalCorkPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function VerticalPointC() {
			this.x = _0.offset.x
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus4
			; this.addToX = + _0.b2 * _1.xPowerMinus4
			; this.y = _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
			; this.addToY = _0.b2 * _1.xPowerMinus1
		}
		function _VerticalPointC() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function writeNext( $0 ) {
			const _2 = _0.tie( _1, _1.writeNext, new _WriteNext, new WriteNext( $0 ) )
			; if ( _2.error ) {
				_0.log( 'warn', String( _2.error ), _1 )
				;
			}
			if ( _0.globalCount - _0.localCount ) {
				_0.localCount ++
				; _1.nextPart( _1 )
				; return _2
				;
			}
			_0.endParts()
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
		const _1 = _0.tie( _0, part4Loop, new _Part4Loop, new Part4Loop )
		; if ( _0.vertical ) {
			_0.syn( _1, {
				radiusY: _1.radius
				, corkRadiusX: _1.corkRadius
			}, 'n' )
			;
		}
		_0.runPart( _1 )
		; return _1
		;
		function _Part4Loop() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function Part4Loop() {
			this.begin = _0.id + (
				_0.lead
					? ( _0.globalCount - 1 ) + 'animate' + ( _0.globalCount - 1 )
					: _0.globalCount + 'animate' + ( _0.localCount - 1 )
			) + '.end'
			; this.corkPointC = null
			; this.CorkPointC = CorkPointC
			; this._CorkPointC = _CorkPointC
			; this.corkRadius = _0.corkB2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.corkRadiusX = - this.corkRadius
			; this.corkRadiusY = this.corkRadius
			; this.drawPath = _0.drawPath4
			; this.lastCorkRecord = _0.corkThread[ 2 ] ? _0.corkThread[ 2 ] : null
			; this.lastRecord = _0.thread[ 2 ]
			; this.nextPart = _0.part1Loop
			; this.pointC = null
			; this.PointC = PointC
			; this._PointC = _PointC
			; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
			; this.radiusX = - this.radius
			; this.radiusY = - this.radius
			; this.string = '  <!-- ' + _0.id + _0.globalCount
				+ ' animate' + _0.localCount + ' -->\n'
			; this.thisCorkRecord = _0.corkThread[ 3 ] ? _0.corkThread[ 3 ] : null
			; this.thisRecord = _0.thread[ 3 ] ? _0.thread[ 3 ] : null
			; this.threadCount = ( _0.localCount - 1 ) % 4
			; this.VerticalCorkPointC = VerticalCorkPointC
			; this._VerticalCorkPointC = _VerticalCorkPointC
			; this.VerticalPointC = VerticalPointC
			; this._VerticalPointC = _VerticalPointC
			; this.writeNext = writeNext
			; this.xPower = Math.pow( _0.x, _0.localCount )
			; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
			; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
			; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		}
	}
	function pythagMetal() {
		const _1 = _0.tie( _0, pythagMetal, new _PythagMetal, new PythagMetal )
		; _0.syn( _0, {
			x: ( _1.c - _0.b2 / 2 ) / _0.a
		}, 'n' )
		; _0.syn( _0, {
			totalWidth: _0.vertical
				? _0.b2 + ( _0.a * _0.x ) + _0.borderSize
				: _0.totalWidth
			, totalHeight: _0.vertical
				? _0.totalHeight
				: _0.b2 + ( _0.a * _0.x ) + _0.borderSize
		}, 'n' )
		; if ( _0.cork ) {
			if ( _0.vertical ) {
				_0.syn( _0, {
					corkA: ( _0.totalHeight - _0.borderSize ) * _0.x
					, corkB2: ( _0.totalWidth - _0.borderSize ) * _0.x
				}, 'n' )
				; return _1
				;
			}
			_0.syn( _0, {
				corkA: ( _0.totalWidth - _0.borderSize ) * _0.x
				, corkB2: ( _0.totalHeight - _0.borderSize ) * _0.x
			}, 'n' )
			;
		}
		return _1
		;
		function _PythagMetal() {
			this.$auth = 'besta.pe'
		}
		function PythagMetal() {
			this.axa = Math.pow( _0.a, 2 )
			; this.bxb = Math.pow( _0.b2 / 2, 2 )
			; this.cxc = this.axa + this.bxb
			; this.c = Math.pow( this.cxc, 1 / 2 )
		}
	}
	function RecordCorkPoints( $0 ) {
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
		this.C = {
			x: $0.corkPointC.x
			, y: $0.corkPointC.y
		}
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
		this.C = {
			x: $0.pointC.x
			, y: $0.pointC.y
		}
	}
	function _RecordPoints() {
		this.$0 = { record: false }
		; this.$auth = 'besta.pe'
	}
	function runPart( $0 ) {
		const _1 = _0.tie( _0, runPart, new _RunPart, new RunPart( $0 ) )
		; if ( _0.cork ) {
			if ( _0.vertical ) {
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
			_0.corkThread.splice( _1.part.threadCount, 1, new _0.RecordCorkPoints( _1.part ) )
			; _0.syn( _1.part, {
				thisCorkRecord: _0.corkThread[ _1.part.threadCount ]
			}, 'n' )
			;
		}
		if ( _0.vertical ) {
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
		_0.thread.splice( _1.part.threadCount, 1, new _0.RecordPoints( _1.part ) )
		; _0.syn( _1.part, {
			thisRecord: _0.thread[ _1.part.threadCount ]
		}, 'n' )
		; if ( _0.lead && _0.globalCount > _0.localCount ) {
			_0.localCount ++
			; _1.part.nextPart( _1.part )
			; return _1
			;
		}
		if ( _1.part.drawPath && ( _0.globalCount - 0 === _0.localCount ) ) {
			if ( _0.cork ) {
				_1.part.string += _0.drawPath( _1.part, true )
				;
			}
			_1.part.string += _0.drawPath( _1.part )
			;
		}
		if ( ! _0.lead || ( _0.globalCount - 0 === _0.localCount ) ) {
			_1.part.string += _0.animateSize( _1.part )
			; _1.part.string += _0.animateMotion( _1.part )
			; _1.part.string += _0.animateShrink( _1.part )
			; if ( _0.cork ) {
				_1.part.string += _0.animateSize( _1.part, true )
				; _1.part.string += _0.animateMotion( _1.part, true )
				; _1.part.string += _0.animateShrink( _1.part, true )
				;
			}
		}
		if ( _0.picture ) {
			_1.part.writeNext()
			; return _1
			;
		}
		_0.svg += _1.part.string
		; _1.part.writeNext()
		; return _1
		;
		function _RunPart() {
			this.$0 = { record: false }
			; this.$auth = 'besta.pe'
		}
		function RunPart( $0 ) {
			this.part = $0
		}
	}
	if ( _0.html() ) {
		_0.pythagMetal()
		; _0.header()
		;
	}
	return _0
	;
	function _Alchemy() {
		this.$auth = 'besta.pe'
	}
	function Alchemy( $0 ) {
		this.log = null
		; this.syn = null
		; this.tie = null
		; this.doc = document
		; this.data = JSON.parse(
			this.doc.getElementById( 'json' ).innerHTML
		)
		; this.a = this.data.a
		; this.alchemy = alchemy
		; this.alchemyScript = this.doc.getElementById( 'alchemy' )
		; this.animateMotion = animateMotion
		; this.animateShrink = animateShrink
		; this.animateSize = animateSize
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
		; this.corkEndPoints = []
		; this.corkThread = [ null, null, null, null ]
		; this.colours = this.data.colours
		; this.download = download
		; this.drawPath = drawPath
		; this.drawPath1 = this.data.drawPath1
		; this.drawPath2 = this.data.drawPath2
		; this.drawPath3 = this.data.drawPath3
		; this.drawPath4 = this.data.drawPath4
		; this.drawPathOpacity = this.data.drawPathOpacity
		; this.drawPathSizeInner = this.data.drawPathSizeInner
		; this.drawPathSizeOuter = this.data.drawPathSizeOuter
		; this.dynamicObjectLoop = dynamicObjectLoop
		; this.embed = this.data.embed
		; this.endParts = endParts
		; this.endPoints = []
		; this.file = this.data.file
		; this.footer = footer
		; this.globalCount = 1
		; this.header = header
		; this.html = html
		; this.id = this.data.id
		; this.imageDiv = [
			...this.doc.getElementsByClassName( 'image' )
		]
		; this.init = $0
		; this.inputImg = this.doc.getElementsByClassName( 'input' )[ 0 ]
		; this.lead = true
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
		; this.picture = this.data.picture
		; this.pythagMetal = pythagMetal
		; this.RecordCorkPoints = RecordCorkPoints
		; this._RecordCorkPoints = _RecordCorkPoints
		; this.RecordPoints = RecordPoints
		; this._RecordPoints = _RecordPoints
		; this.repeat = this.data.repeat
		; this.rotateCenter = this.data.rotateCenter
		; this.runPart = runPart
		; this.speed = this.data.speed
		; this.startColour = this.colours.shift()
		; this.svg = ''
		; this.thread = [ null, null, null, null ]
		; this.totalHeight = this.data.vertical
			? this.a + this.borderSize
			: null
		; this.totalWidth = this.data.vertical
			? null
			: this.a + this.borderSize
		; this.vertical = this.data.vertical
		; this.viewBoxAdd = this.data.viewBoxAdd
		; this.x = null
	}
}( true ) )
;
