#! /usr/bin/env node
process.chdir( __dirname )
;
function animateMotion( $0, $1 ) {
	function printCurve() {
		return '  <animateMotion\n'
			+ '\t  href="#' + _1.href + '"\n'
			+ '\t  id="' + _1.id + 'path1"\n'
			+ '\t  path="'
			+ 'M ' + _1.point.A.x + ' ' + _1.point.A.y + '\n'
			+ '\t\t\tA ' + _1.radius + ' ' + _1.radius + '\n'
			+ '\t\t\t0, 0, 0 '
			+ _1.point.B.x + ' ' + _1.point.B.y + '"\n'
			+ '\t  rotate="auto-reverse"\n'
			+ '\t  dur="' + _1.speed + '"\n'
			+ '\t  begin="' + _1.begin0 + '"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	function printLine() {
		return '  <animateMotion\n'
			+ '\t  href="#' + _1.href + '"\n'
			+ '\t  path="'
			+ 'M ' + _1.point.B.x + ' ' + _1.point.B.y + '\n'
			+ '\t\t\tL ' + _1.point.C.x + ' ' + _1.point.C.y + '"\n'
			+ '\t  dur="' + _1.speed + '"\n'
			+ '\t  begin="' + _1.id + 'path1.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	function printRotate( $0 ) {
		const _2 = $0
		; return '  <animateTransform\n'
			  + '\t  xlink:href="#' + _1.href + '"\n'
			  + '\t  attributeName="transform"\n'
			  + '\t  type="rotate"\n'
			  + '\t  from="' + _2.from + '"\n'
			  + '\t  to="' + _2.to + '"\n'
			  + '\t  dur="0s"\n'
			  + '\t  begin="' + _2.begin + '"\n'
			  + '\t  fill="freeze" />\n'
		;
	}
	function printScale( $0 ) {
		const _2 = $0
		; return '  <animateTransform\n'
			  + '\t  xlink:href="#' + _1.href + '"\n'
			  + '\t  attributeName="transform"\n'
			  + '\t  type="scale"\n'
			  + '\t  values="' + _2.x + ' ' + _2.y + '"\n'
			  + '\t  dur="0s"\n'
			  + '\t  begin="' + _2.begin + '"\n'
			  + '\t  fill="freeze" />\n'
		;
	}
	const _1 = new AnimateMotion( $0, $1 )
	;
	if ( _1.cork ) {
		_1.href = _0.id + 'Infinity'
		; _1.id = _1.id + 'Infinity'
		; _1.part2Loop = _0.localCount % 4 == 1 ? true : false
		; _1.part3Loop = _0.localCount % 4 == 2 ? true : false
		; _1.part4Loop = _0.localCount % 4 == 3 ? true : false
		; _1.part1Loop = _0.localCount % 4 == 0 ? true : false
		;
	}
	if ( _0.vertical ) {
		if ( _1.cork ) {
			_1.part3Loop = _0.localCount % 4 == 1 ? true : false
			; _1.part4Loop = _0.localCount % 4 == 2 ? true : false
			; _1.part1Loop = _0.localCount % 4 == 3 ? true : false
			; _1.part2Loop = _0.localCount % 4 == 0 ? true : false
			;
		}
		else {
			_1.part2Loop = _0.localCount % 4 == 1 ? true : false
			; _1.part3Loop = _0.localCount % 4 == 2 ? true : false
			; _1.part4Loop = _0.localCount % 4 == 3 ? true : false
			; _1.part1Loop = _0.localCount % 4 == 0 ? true : false
			;
		}
	}
	if (  _1.part1Loop || _1.part3Loop ) {
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
	;
	if ( _1.part1Loop ) {
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
		; this.part1Loop = _0.localCount % 4 == 1 ? true : false
		; this.part2Loop = _0.localCount % 4 == 2 ? true : false
		; this.part3Loop = _0.localCount % 4 == 3 ? true : false
		; this.part4Loop = _0.localCount % 4 == 0 ? true : false
		; this.point = $1 ?
			$0.thisCorkRecord : $0.thisRecord
		; this.printCurve = printCurve
		; this.printLine = printLine
		; this.printRotate = printRotate
		; this.printScale = printScale
		; this.radius = $1 ?
			$0.corkRadius : $0.radius
		; this.speed = _0.speed.substr(	0, _0.speed.length - 1 ) / 2
			+ _0.speed.substr( _0.speed.length - 1 )
		; this.string = ''
		;
	}
}
function animateShrink( $0, $1 ) {
	function printFromTo( $0 ) {
		const _2 = $0
		; return '  <animate\n'
			  + '\t  href="#' + _1.href + '"\n'
			  + ( _2.id ? '\t  id="' + _2.id + '"\n' : '' )
			  + '\t  attributeName="' + _2.type + '"\n'
			  + '\t  from="' + _2.from + '"\n'
			  + '\t  to="' + _2.to + '"\n'
			  + '\t  dur="' + _1.speed + '"\n'
			  + '\t  begin="' + _1.begin + '"\n'
			  + '\t  fill="freeze" />\n'
		;
	}
	const _1 = new AnimateShrink( $0, $1 )
	;
	if ( _0.vertical ) {
		_1.flip = _0.localCount % 2 > 0 ? true : false
		;
	}
	if ( _1.cork ) {
		_1.href = _0.id + 'Infinity'
		; _1.height = _0.corkA
		; _1.width = _0.corkB2
		;
		if ( _1.flip ) {
			_1.height = _0.corkB2
			; _1.width = _0.corkA
			;
		}
	}
	else if ( _1.flip ) {
		_1.height = _0.a
		; _1.width = _0.b2
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
		, id: _1.id
		, from: _1.width * _1.thisPower
		, to: _1.width * _1.nextPower
	} )
	;
	if ( _1.cork ) {
		_1.string += '  <!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' cork end -->\n'
		;
	}
	return _1.string
	;
	function AnimateShrink( $0, $1 ) {
		this.begin = _0.id + _0.globalCount
			+ 'animate' + _0.localCount
			+ ( $1 ? 'Infinity' : '' )
			+ 'path1.end'
		; this.cork = $1
		; this.flip = _0.localCount % 2 > 0 ? false : true
		; this.height = _0.b2
		; this.href = _0.id + _0.globalCount
		; this.id =  _0.id + _0.globalCount
			+ 'animate' + _0.localCount
		; this.nextPower = $0.xPower
		; this.printFromTo = printFromTo
		; this.speed = _0.speed.substr(	0, _0.speed.length - 1 ) / 2
			+ _0.speed.substr( _0.speed.length - 1 )
		; this.string = ''
		; this.thisPower = $0.xPowerMinus1
		; this.width = _0.a
		;
	}
}
function animateSize( $0, $1 ) {
	function printValue( $0 ) {
		const _2 = $0
		; return '  <animate\n'
			  + '\t  href="#' + _1.href + '"\n'
			  + '\t  attributeName="' + _2.type + '"\n'
			  + '\t  values="' + _2.value + '"\n'
			  + '\t  begin="' + _1.begin + '"\n'
			  + '\t  fill="freeze" />\n'
		;
	}
	const _1 = new AnimateSize( $0, $1 )
	;
	if (
		( _0.vertical && ! _1.cork )
			|| _1.cork
	) {
		_1.flip = _0.localCount % 2 > 0 ? true : false
		;
	}
	if ( _1.cork ) {
		_1.string += '  <!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' cork start -->\n'
		; _1.href = _0.id + 'Infinity'
		; _1.height = _0.corkA
		; _1.width = _0.corkB2
		;
		if (
			( ! _0.vertical && _1.flip )
				|| ( _0.vertical && ! _1.flip )
		) {
			_1.height = _0.corkB2
			; _1.width = _0.corkA
			;
		}
		if ( _0.localCount == 1 ) {
			_1.href = _0.id + 'Cork'
			; _1.string += _1.printValue( {
				type: 'width'
				, value: 0
			} )
			; _1.href = _0.id + 'Infinity'
			;
		}
	}
	else if ( _1.flip ) {
		_1.height = _0.b2
		; _1.width = _0.a
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
		;
	}
}
function drawPath( $0, $1 ) {
	function printCurve( $0 ) {
		const _2 = $0
		; return '  <path\n'
			  + '\t  id="' + _2.id + '"\n'
			  + '\t  d="M ' + _1.point.A.x + ' ' + _1.point.A.y + '\n'
			  + '\t\t A ' + _1.radius + ' ' + _1.radius + '\n'
			  + '\t\t 0, 0, 0 '
			  + _1.point.B.x + ' ' + _1.point.B.y + '"\n'
			  + '\t  opacity="' + _1.opacity + '"\n'
			  + '\t  stroke-width="' + _2.size + '"\n'
			  + '\t  stroke="' + _2.colour + '" />\n'
		;
	}
	function printLine( $0 ) {
		const _2 = $0
		; return '  <path\n'
			  + '\t  id="' + _2.id + '"\n'
			  + '\t  d="M ' + _1.point.B.x + ' ' + _1.point.B.y + '\n'
			  + '\t\t L ' + _1.point.C.x + ' ' + _1.point.C.y + '"\n'
			  + '\t  opacity="' + _1.opacity + '"\n'
			  + '\t  stroke-width="' + _2.size + '"\n'
			  + '\t  stroke="' + _2.colour + '" />\n'
		;
	}
	const _1 = new DrawPath( $0, $1 )
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
	function DrawPath( $0, $1 ) {
		this.id = _0.id
			+ ( $1 ? 'Infinity' : '' )
			+ _0.globalCount
		; this.innerColour = 'black'
		; this.innerSize = 0.5
		; this.opacity = 0.5
		; this.outerColour = $1 ?
			_0.colours[
				( _0.globalCount ) % _0.colours.length
			]
			: _0.colours[
				( _0.globalCount - 1 ) % _0.colours.length
			]
		; this.outerSize = 2
		; this.point = $1 ?
			$0.thisCorkRecord : $0.thisRecord
		; this.printCurve = printCurve
		; this.printLine = printLine
		; this.radius = $1 ? $0.corkRadius : $0.radius
		; this.string = ''
		;
	}
}
function dynamicObjectLoop( $0 ) {
	function next() {
		if ( _1.count > -1 ) {
			_0.writeFile(
				_0.file, _1.string, _0.writeOptions, _1.writeNext
			)
			; return
			;
		}
		if ( _1.count > -2 && _0.cork ) {
			_0.corkThread[ 3 ] = { C: {
				x: _1.corkX
				, y: _1.corkY
			} }
			; _1.string += _1.printCork()
			; _0.writeFile(
				_0.file, _1.string, _0.writeOptions, _1.writeNext
			)
			; return
			;
		}
		_0.part1Loop()
		;
	}
	function printCork() {
		return '  <rect\n'
			+ '\t  id="' + _0.id + 'Infinity"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
			+ '\t  opacity="' + _0.opacity + '"\n'
			+ '\t  fill="' + _0.cork + '" />\n'
		;
	}
	function printObjectEnd() {
		return '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
			+ '\t  opacity="' + _0.opacity + '"\n'
			+ '\t  fill="' + _0.colours[
				( _1.index - 1 ) % _0.colours.length
			] + '" />\n'
		;
	}
	function readNext( $0, $1 ) {
		const _2 = { error: $0, data: $1 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		_1.string += _2.data + '"\n'
		; _1.string += _1.printObjectEnd()
		; _1.next()
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		_0.dynamicObjectLoop( _1.count )
		;
	}
	const _1 = new DynamicObjectLoop( $0 )
	; _1.count --
	;
	if ( _0.images ) {
		_1.string += '\t  width="0"\n'
			+ '\t  href="data:image/' + _0.imageType + ';base64,'
		; _1.readFile(
			_0.images[ ( _1.index - 1 ) % _0.images.length ]
			, 'base64'
			, _1.readNext
		)
		; return
		;
	}
	_1.string += _1.printObjectEnd()
	; _1.next()
	;
	function DynamicObjectLoop( $0 ) {
		this.count = $0
		; this.index = _0.repeat - this.count + 1
		; this.next = next
		; this.printCork = printCork
		; this.printObjectEnd = printObjectEnd
		; this.readFile = require( 'fs' ).readFile
		; this.readNext = readNext
		; this.string = ( _0.images ? '  <image\n' : '  <rect\n' )
			+ '\t  id="' + _0.id + this.index + '"\n'
		; this.writeNext = writeNext
		;
	}
}
function endParts() {
	_0.globalCount ++
	;
	if ( _0.repeat - _0.globalCount + 1 ) {
		_0.localCount = 1
		; _0.corkThread = [ null, null, null, null ]
		; _0.thread = [ null, null, null, null ]
		; _0.part1Loop()
		; return
		;
	}
	_0.footer()
	;
}
function footer() {
	function printPause() {
		return '  <animate\n'
			+ '\t  href="#' + _1.href + '"\n'
			+ '\t  id="' + _0.id + 'ResetAnimate"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + _1.endColour + '"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="' + _1.begin0 + '.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	function printReset( $0 ) {
		const _2 = $0
		; return '  <animate\n'
			  + '\t  href="#' + _2.href + '"\n'
			  + ( _2.id ? '\t  id="' + _0.id + 'EndAnimate"\n' : '' )
			  + '\t  attributeName="' + _2.attributeName + '"\n'
			  + '\t  values="' + _2.value + '"\n'
			  + '\t  dur="' + _0.speed + '"\n'
			  + '\t  begin="' + _1.begin1 + '.end"\n'
			  + '\t  fill="freeze" />\n'
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		console.log(
			'> log <\n'
			, 'Finished making ' + _0.file
				+ ' with a ' + _0.x + ' scale invariant.\n'
				+ ' :0) :O) :o)\n'
				+ '< log >'
		)
		;
	}
	const _1 = new Footer
	; _1.string += '  <!-- dynamic ' + _0.id + ' objects end -->\n'
	;
	if ( _0.loop || _0.clickStart ) {
		_1.string += _1.printPause()
		; _1.string += _1.printReset( {
			href: _1.href
			, id: true
			, attributeName: 'fill'
			, value: _0.startColour
		} )
		;
		while ( _1.count < _0.repeat + 1 ) {
			_1.string += _1.printReset( {
				href: _0.id + _1.count
				, attributeName: 'width'
				, value: 0
			} )
			; _1.count ++
			;
		}
		if ( _0.cork ) {
			_1.string += _1.printReset( {
				href: _0.id + 'Infinity'
				, attributeName: 'width'
				, value: 0
			} )
			; _1.string += _1.printReset( {
				href: _0.id + 'Cork'
				, attributeName: 'width'
				, value: _0.vertical ? _0.corkA : _0.a
			} )
			;
		}
	}
	_1.string += (
		_0.embed ? '  <!-- ' + _0.id + ' end -->' : '</svg>\n'
	)
	; _0.writeFile(
		_0.file, _1.string, _0.writeOptions, _1.writeNext
	)
	;
	function Footer() {
		this.begin0 = _0.id + _0.repeat
			+ 'animate' + _0.repeat
		; this.begin1 = _0.id + 'ResetAnimate'
		; this.count = 1
		; this.endColour = _0.colours[
			( _0.globalCount + 1 ) % _0.colours.length
		]
		; this.href = _0.id + ( _0.repeat + 1 )
		; this.printPause = printPause
		; this.printReset = printReset
		; this.string = '  <!-- ' + _0.id + ' animation end -->\n'
		; this.writeNext = writeNext
		;
	}
}
function header() {
	function CorkMeasure() {
		this.height = - _0.borderSize
			+ (
				_0.vertical ?
					_0.totalHeight : _0.totalHeight - _0.b2
			)
		; this.width = - _0.borderSize
			+ (
				_0.vertical ?
					_0.totalWidth - _0.b2 : _0.totalWidth
			)
		; this.x = _0.offset.x
			+ _0.borderSize / 2
			+ ( _0.vertical ? _0.b2 : 0 )
		; this.y = _0.offset.y
			+ _0.borderSize / 2
			+ ( _0.vertical ? 0 : _0.b2 )
		;
	}
	function next() {
		_1.string += _1.printTailEnd()
		;
		if ( _0.cork ) {
			_1.corkMeasure = new _1.CorkMeasure
			; _1.string += _1.printCork()
			;
		}
		_1.string += '  <!-- static ' + _0.id + ' objects end -->\n'
		; _1.string += '  <!-- dynamic '
			+ _0.id + ' objects start -->\n'
		; _0.writeFile(
			_0.file, _1.string, _0.writeOptions, _1.writeNext
		)
		;
	}
	function printCanvas() {
		return '  <rect\n'
			+ '\t  id="' + _0.id + '0"\n'
			+ '\t  width="' + _0.totalWidth + '"\n'
			+ '\t  height="' + _0.totalHeight + '"\n'
			+ '\t  x="' + _0.offset.x + '"\n'
			+ '\t  y="' + _0.offset.y + '"\n'
			+ (
				_0.background ?
					'\t  fill="' + _0.background + '"\n' : ''
			)
			+ '\t  stroke="' + _0.borderColour + '"\n'
			+ '\t  stroke-width="' + _0.borderSize + '" />\n'
		;
	}
	function printCork() {
		return '  <rect\n'
			+ '\t  id="' + _0.id + 'Cork"\n'
			+ '\t  width="' + _1.corkMeasure.width + '"\n'
			+ '\t  height="' + _1.corkMeasure.height + '"\n'
			+ '\t  x="' + _1.corkMeasure.x + '"\n'
			+ '\t  y="' + _1.corkMeasure.y + '"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
			+ '\t  opacity="' + _0.opacity + '"\n'
			+ '\t  fill="' + _0.cork + '" />\n'
		;
	}
	function printParentStart() {
		return '<svg \n'
			+ '\txmlns="http://www.w3.org/2000/svg"\n'
			+' \txmlns:xlink="http://www.w3.org/1999/xlink"\n'
			+ '\tversion="1.1"\n'
			+ '\tviewBox="' + ( - _0.viewBoxAdd.width )
			+ ' ' + ( - _0.viewBoxAdd.height )
			+ ' ' + _1.viewBoxWidth
			+ ' ' + _1.viewBoxHeight
			+ '"\n'
			+ '\tfill="none" >\n'
		;
	}
	function printTailEnd() {
		return '\t  width="' + _1.width + '"\n'
			+ '\t  height="' + _1.height + '"\n'
			+ '\t  x="' + ( _0.offset.x + _0.borderSize / 2 ) + '"\n'
			+ '\t  y="' + ( _0.offset.y + _0.borderSize / 2 ) + '"\n'
			+ '\t  opacity="' + _0.opacity + '"\n'
			+ '\t  fill="' + _0.startColour + '"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '" />\n'
		;
	}
	function printTailStart() {
		return ( _0.images ? '  <image\n' : '  <rect\n' )
			+ '\t  id="' + _0.id + ( _0.repeat + 1 ) + '"\n'
			+ ( _0.images ? '\t  href="data:image/jpeg;base64,' : '' )
		;
	}
	function readNext( $0, $1 ) {
		const _2 = { error: $0, data: $1 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		_1.string += _2.data + '"\n'
		; _1.string += _1.printTailEnd()
		; _1.next()
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		_0.dynamicObjectLoop( _0.repeat )
		;
	}
	const _1 = new Header
	; _1.string += _1.printParentStart()
	;
	if ( _0.embed ) {
		_1.string = ''
		;
	}
	_1.string += '  <!-- static ' + _0.id + ' objects start -->\n'
	; _1.string += _1.printCanvas()
	; _1.string += _1.printTailStart()
	;
	if ( _0.images ) {
		_1.readFile( _0.images.shift(), 'base64', _1.readNext )
		; return
		;
	}
	_1.next()
	;
	function Header() {
		this.corkMeasure = null
		; this.CorkMeasure = CorkMeasure
		; this.height = _0.vertical ? _0.a : _0.b2
		; this.next = next
		; this.printCanvas = printCanvas
		; this.printCork = printCork
		; this.printParentStart = printParentStart
		; this.printTailStart = printTailStart
		; this.printTailEnd= printTailEnd
		; this.readFile = require( 'fs' ).readFile
		; this.readNext = readNext
		; this.string = ''
		; this.viewBoxWidth = _0.totalWidth
			+ ( _0.viewBoxAdd.width * 2 )
		; this.viewBoxHeight = _0.totalHeight
			+ ( _0.viewBoxAdd.height * 2 )
		; this.width = _0.vertical ? _0.b2 : _0.a
		; this.writeNext = writeNext
		;
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
		;
	}
	function firstLastCorkRecord() {
		if ( _0.vertical ) {
			_1.lastCorkRecord = { C: {
				x: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus1
				, y: _0.offset.y
					+ _0.borderSize / 2
					+ _0.a * _1.xPowerMinus1
			} }
			; return
			;
		}
		_1.lastCorkRecord = { C: {
			x: _0.offset.x
				+ _0.borderSize / 2
			, y: _0.offset.y
				+ _0.borderSize / 2
				+ _0.b2 * _1.xPowerMinus1
		} }
		;
	}
	function firstLastRecord() {
		if ( _0.vertical ) {
			_1.lastRecord = { C: {
				x: _0.offset.x
					+ _0.borderSize / 2
				, y: _0.offset.y
					+ _0.borderSize / 2
			} }
			; return
			;
		}
		_1.lastRecord = { C: {
			x: _0.offset.x
				+ _0.borderSize / 2
				+ _0.a * _1.xPowerMinus1
			, y: _0.offset.y
				+ _0.borderSize / 2
		} }
		;
	}
	function PointC() {
		this.x = _0.offset.x
			+ _0.borderSize / 2
		; this.addToX = _0.b2 * _1.xPowerMinus4
		; this.y = _0.offset.y
			+ _0.borderSize / 2
			+ _0.b2 * _1.xPowerMinus1
		; this.addToY = _0.b2 * _1.xPowerMinus1
		;
	}
	function printValue() {
		return '  <animate\n'
			+ '\t  href="#' + _0.id
			+ ( _0.repeat + 1 ) + '"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + _1.colour + '"\n'
			+ '\t  dur="' + ( _1.firstObject ? '0s' : _0.speed ) + '"\n'
			+ '\t  begin="' + _1.begin + '"\n'
			+ '\t  fill="freeze" />\n'
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
		;
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
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _1.nextPart( _1 )
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part1Loop
	;
	if ( ! _1.lastRecord ) {
		_1.firstLastRecord()
		;
		if ( _0.cork ) {
			_1.firstLastCorkRecord()
			;
		}
	}
	if ( _1.firstLoop ) {
		if ( _1.firstObject ) {
			_1.begin = _1.start + (
				_0.loop ? '; ' + _0.id + 'EndAnimate.end' : ''
			)
			;
		}
		else {
			_1.begin = _0.id + ( _0.globalCount - 1 )
				+ 'animate' + ( _0.globalCount - 1 )
				+ '.end'
			;
		}
		if ( ! _0.lead ) {
			_1.string += _1.printValue()
			;
		}
	}
	if ( _0.vertical ) {
		_1.radiusX = _1.radius
		; _1.corkRadiusY = - _1.corkRadius
		;
	}
	_0.runPart( _1 )
	;
	function Part1Loop() {
		this.begin = _0.id + (
			_0.lead ?
				( _0.globalCount - 1 )
				+ 'animate' + ( _0.localCount - 1 )
				: _0.globalCount
				+ 'animate' + ( _0.localCount - 1 )
		) + '.end'
		; this.colour = _0.globalCount == _0.repeat && _0.lead ?
			_0.colours[ _0.colours.length -1 ]
			: _0.colours[ _0.globalCount % _0.colours.length ]
		; this.corkPointC = null
		; this.CorkPointC = CorkPointC
		; this.corkRadius = _0.corkB2 * Math.pow(
			_0.x, _0.localCount - 1
		)
		; this.corkRadiusX = this.corkRadius
		; this.corkRadiusY = this.corkRadius
		; this.drawPath = _0.drawPath1
		; this.firstLastCorkRecord = firstLastCorkRecord
		; this.firstLastRecord = firstLastRecord
		; this.firstLoop = _0.localCount < 5 ? true : false
		; this.firstObject = _0.globalCount < 2 ? true : false
		; this.lastCorkRecord = _0.corkThread[ 3 ] ?
			_0.corkThread[ 3 ] : null
		; this.lastRecord = _0.thread[ 3 ] ? _0.thread[ 3 ] : null
		; this.nextPart = _0.part2Loop
		; this.pointC = null
		; this.PointC = PointC
		; this.printValue = printValue
		; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
		; this.radiusX = - this.radius
		; this.radiusY = this.radius
		; this.start = _0.clickStart ?
			_0.id + ( _0.repeat + 1) + '.click' : _0.speed
		; this.string = (
			this.firstLoop ?
				'  <!-- dynamic object automation -->\n' : ''
		)
			+ '  <!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisCorkRecord = _0.corkThread[ 0 ] ?
			_0.corkThread[ 0 ] : null
		; this.thisRecord = _0.thread[ 0 ] ? _0.thread[ 0 ] : null
		; this.threadCount = ( _0.localCount - 1 ) % 4
		; this.VerticalCorkPointC = VerticalCorkPointC
		; this.VerticalPointC = VerticalPointC
		; this.writeNext = writeNext
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		;
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
		;
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
		;
	}
	function VerticalCorkPointC() {
		this.x = _0.offset.x
			+ _0.borderSize / 2
			+ _0.a * _1.xPowerMinus3
			- _0.b2 * _1.xPower
		; this.addToX = - _0.b2 * _1.xPower
		; this.y = _0.offset.y
			+ _0.borderSize / 2
		; this.addToY = _0.b2 * _1.xPowerMinus3
		;
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
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _1.nextPart( _1 )
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part2Loop
	;
	if ( _0.vertical ) {
		_1.radiusY = - _1.radius
		; _1.corkRadiusX = - _1.corkRadius
		;
	}
	_0.runPart( _1 )
	;
	function Part2Loop() {
		this.begin = _0.id + (
			_0.lead ?
				( _0.globalCount - 1 )
				+ 'animate' + ( _0.globalCount - 1 )
				: _0.globalCount
				+ 'animate' + ( _0.localCount - 1 )
		) + '.end'
		; this.corkPointC = null
		; this.CorkPointC = CorkPointC
		; this.corkRadius = _0.corkB2 * Math.pow(
			_0.x, _0.localCount - 1
		)
		; this.corkRadiusX = this.corkRadius
		; this.corkRadiusY = - this.corkRadius
		; this.drawPath = _0.drawPath2
		; this.lastCorkRecord = _0.corkThread[ 0 ] ?
			_0.corkThread[ 0 ] : null
		; this.lastRecord = _0.thread[ 0 ]
		; this.nextPart = _0.part3Loop
		; this.pointC = null
		; this.PointC = PointC
		; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
		; this.radiusX = this.radius
		; this.radiusY = this.radius
		; this.string = '  <!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisCorkRecord = _0.corkThread[ 1 ] ?
			_0.corkThread[ 1 ] : null
		; this.thisRecord = _0.thread[ 1 ] ? _0.thread[ 1 ] : null
		; this.threadCount = ( _0.localCount - 1 ) % 4
		; this.VerticalCorkPointC = VerticalCorkPointC
		; this.VerticalPointC = VerticalPointC
		; this.writeNext = writeNext
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		;
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
		;
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
		;
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
		;
	}
	function VerticalPointC() {
		this.x = _0.offset.x
			+ _0.borderSize / 2
			+ _0.a * _1.xPowerMinus4
			- _0.b2 * _1.xPowerMinus1
		; this.addToX = - _0.b2 * _1.xPowerMinus1
		; this.y = _0.offset.y
			+ _0.borderSize / 2
		; this.addToY = _0.b2 * _1.xPowerMinus4
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _1.nextPart( _1 )
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part3Loop
	;
	if ( _0.vertical ) {
		_1.radiusX = - _1.radius
		; _1.corkRadiusY = _1.corkRadius
		;
	}
	_0.runPart( _1 )
	;
	function Part3Loop() {
		this.begin = _0.id + (
			_0.lead ?
				( _0.globalCount - 1 )
				+ 'animate' + ( _0.globalCount - 1 )
				: _0.globalCount
				+ 'animate' + ( _0.localCount - 1 )
		) + '.end'
		; this.corkPointC = null
		; this.CorkPointC = CorkPointC
		; this.corkRadius = _0.corkB2 * Math.pow(
			_0.x, _0.localCount - 1
		)
		; this.corkRadiusX = - this.corkRadius
		; this.corkRadiusY = - this.corkRadius
		; this.drawPath = _0.drawPath3
		; this.lastCorkRecord = _0.corkThread[ 1 ] ?
			_0.corkThread[ 1 ] : null
		; this.lastRecord = _0.thread[ 1 ]
		; this.nextPart = _0.part4Loop
		; this.pointC = null
		; this.PointC = PointC
		; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
		; this.radiusX = this.radius
		; this.radiusY = - this.radius
		; this.string = '  <!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisCorkRecord = _0.corkThread[ 2 ] ?
			_0.corkThread[ 2 ] : null
		; this.thisRecord = _0.thread[ 2 ] ? _0.thread[ 2 ] : null
		; this.threadCount = ( _0.localCount - 1 ) % 4
		; this.VerticalCorkPointC = VerticalCorkPointC
		; this.VerticalPointC = VerticalPointC
		; this.writeNext = writeNext
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		;
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
		;
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
		;
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
		;
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
		;
	}
	function writeNext( $0 ) {
		const _2 = { error: $0 }
		;
		if ( _2.error ) {
			console.log(
				'> warn <\n', _2.error, '\n', _1, '\n< warn >'
			)
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _1.nextPart( _1 )
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part4Loop
	;
	if ( _0.vertical ) {
		_1.radiusY = _1.radius
		; _1.corkRadiusX = _1.corkRadius
		;
	}
	_0.runPart( _1 )
	;
	function Part4Loop() {
		this.begin = _0.id + (
			_0.lead ?
				( _0.globalCount - 1 )
				+ 'animate' + ( _0.globalCount - 1 )
				: _0.globalCount
				+ 'animate' + ( _0.localCount - 1 )
		) + '.end'
		; this.corkPointC = null
		; this.CorkPointC = CorkPointC
		; this.corkRadius = _0.corkB2 * Math.pow(
			_0.x, _0.localCount - 1
		)
		; this.corkRadiusX = - this.corkRadius
		; this.corkRadiusY = this.corkRadius
		; this.drawPath = _0.drawPath4
		; this.lastCorkRecord = _0.corkThread[ 2 ] ?
			_0.corkThread[ 2 ] : null
		; this.lastRecord = _0.thread[ 2 ]
		; this.nextPart = _0.part1Loop
		; this.pointC = null
		; this.PointC = PointC
		; this.radius = _0.b2 * Math.pow( _0.x, _0.localCount - 1 )
		; this.radiusX = - this.radius
		; this.radiusY = - this.radius
		; this.string = '  <!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisCorkRecord = _0.corkThread[ 3 ] ?
			_0.corkThread[ 3 ] : null
		; this.thisRecord = _0.thread[ 3 ] ? _0.thread[ 3 ] : null
		; this.threadCount = ( _0.localCount - 1 ) % 4
		; this.VerticalCorkPointC = VerticalCorkPointC
		; this.VerticalPointC = VerticalPointC
		; this.writeNext = writeNext
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		;
	}
}
function pythagMetal() {
	const _1 = new PythagMetal
	; _0.x = ( _1.c - _0.b2 / 2 ) / _0.a
	; _0.totalWidth = _0.vertical ?
		  _0.b2 + ( _0.a * _0.x ) + _0.borderSize
		  : _0.totalWidth
	; _0.totalHeight = _0.vertical ?
		  _0.totalHeight
		  : _0.b2 + ( _0.a * _0.x ) + _0.borderSize
	;
	if ( _0.cork ) {
		if ( _0.vertical ) {
			_0.corkA = ( _0.totalHeight - _0.borderSize )
				* _0.x
			; _0.corkB2 = ( _0.totalWidth - _0.borderSize )
				* _0.x
			; return
			;
		}
		_0.corkA = ( _0.totalWidth - _0.borderSize )
			* _0.x
		; _0.corkB2 = ( _0.totalHeight - _0.borderSize )
			* _0.x
		;
	}
	function PythagMetal() {
		this.axa = Math.pow( _0.a, 2 )
		; this.bxb = Math.pow( _0.b2 / 2, 2 )
		; this.cxc = this.axa + this.bxb
		; this.c = Math.pow( this.cxc, 1 / 2 )
		;
	}
}
function RecordCorkPoints( $0 ) {
	const _1 = $0
	; this.A = {
		x: _1.lastCorkRecord.C.x
		, y: _1.lastCorkRecord.C.y
	}
	; this.B = {
		x: this.A.x
			+ _1.corkRadiusX
		, y: this.A.y
			+ _1.corkRadiusY
	}
	;
	if ( _1.thisCorkRecord ) {
		this.C = {
			x: _1.thisCorkRecord.C.x
				+ _1.corkPointC.addToX
			, y: _1.thisCorkRecord.C.y
				+ _1.corkPointC.addToY
		}
		; return
		;
	}
	this.C = _1.corkPointC
	;
}
function RecordPoints( $0 ) {
	const _1 = $0
	; this.A = {
		x: _1.lastRecord.C.x
		, y: _1.lastRecord.C.y
	}
	; this.B = {
		x: this.A.x
			+ _1.radiusX
		, y: this.A.y
			+ _1.radiusY
	}
	;
	if ( _1.thisRecord ) {
		this.C = {
			x: _1.thisRecord.C.x
				+ _1.pointC.addToX
			, y: _1.thisRecord.C.y
				+ _1.pointC.addToY
		}
		; return
		;
	}
	this.C = _1.pointC
	;
}
function runPart( $0 ) {
	const _1 = $0
	;
	if ( _0.cork ) {
		if ( _0.vertical ) {
			_1.corkPointC = new _1.VerticalCorkPointC
			;
		}
		else {
			_1.corkPointC = new _1.CorkPointC
			;
		}
		_0.corkThread[ _1.threadCount ] = new _0.RecordCorkPoints( _1 )
		; _1.thisCorkRecord = _0.corkThread[ _1.threadCount ]
		;
	}
	if ( _0.vertical ) {
		_1.pointC = new _1.VerticalPointC
		;
	}
	else {
		_1.pointC = new _1.PointC
		;
	}
	_0.thread[ _1.threadCount ] = new _0.RecordPoints( _1 )
	; _1.thisRecord = _0.thread[ _1.threadCount ]
	;
	if ( _0.lead && _0.globalCount > _0.localCount ) {
		_0.localCount ++
		; _1.nextPart( _1 )
		; return
		;
	}
	if ( _1.drawPath && _0.globalCount == _0.localCount ) {
		if ( _0.cork ) {
			_1.string += _0.drawPath( _1, true )
			;
		}
		_1.string += _0.drawPath( _1 )
		;
	}
	if ( ! _0.lead || _0.globalCount == _0.localCount ) {
		_1.string += _0.animateSize( _1 )
		; _1.string += _0.animateMotion( _1 )
		; _1.string += _0.animateShrink( _1 )
		;
		if ( _0.cork ) {
			_1.string += _0.animateSize( _1, true )
			; _1.string += _0.animateMotion( _1, true )
			; _1.string += _0.animateShrink( _1, true )
			;
		}
	}
	_0.writeFile(
		_0.file, _1.string, _0.writeOptions, _1.writeNext
	)
	;
}
const _0 = new App
; _0.pythagMetal()
; _0.header()
;
function App() {
	this.data = require( './app.json' )
	; this.a = this.data.a
//	; this.a = 990000/199
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
	; this.corkThread = [ null, null, null, null ]
	; this.colours = this.data.colours
	; this.drawPath = drawPath
	; this.drawPath1 = this.data.drawPath1
	; this.drawPath2 = this.data.drawPath2
	; this.drawPath3 = this.data.drawPath3
	; this.drawPath4 = this.data.drawPath4
	; this.dynamicObjectLoop = dynamicObjectLoop
	; this.embed = this.data.embed
	; this.endParts = endParts
	; this.file = this.data.file
	; this.footer = footer
	; this.globalCount = 1
	; this.header = header
	; this.id = this.data.id
	; this.images = this.data.images.length > 0 ?
		this.data.images : false
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
	; this.pythagMetal = pythagMetal
	; this.RecordCorkPoints = RecordCorkPoints
	; this.RecordPoints = RecordPoints
	; this.repeat = this.data.repeat
	; this.rotateCenter = this.data.rotateCenter
	; this.runPart = runPart
	; this.speed = this.data.speed
	; this.startColour = this.colours.shift()
	; this.thread = [ null, null, null, null ]
	; this.totalHeight = this.data.vertical ?
		this.a + this.borderSize : null
	; this.totalWidth = this.data.vertical ?
		null : this.a + this.borderSize
	; this.vertical = this.data.vertical
	; this.viewBoxAdd = this.data.viewBoxAdd
	; this.writeFile = require('fs').writeFile
	; this.writeOptions = {
		encoding: 'utf8'
		, flag: 'a'
	}
	; this.x = null
	;
}
