#! /usr/bin/env node
process.chdir( __dirname )
function addRecord( $0, $1 ) {
	if ( $1.x ) {
		if ( $1.x.from ) {
			$0.thisRecord.x.from = $1.x.from
			;
		}
		if ( $1.x.to ) {
			$0.thisRecord.x.to = $1.x.to
			;
		}
	}
	if ( $1.y ) {
		if ( $1.y.from ) {
			$0.thisRecord.y.from = $1.y.from
			;
		}
		if ( $1.y.to ) {
			$0.thisRecord.y.to = $1.y.to
			;
		}
	}
	if ( $1.corkX ) {
		if ( $1.corkX.from ) {
			$0.thisRecord.corkX.from = $1.corkX.from
			;
		}
		if ( $1.corkX.to ) {
			$0.thisRecord.corkX.to = $1.corkX.to
			;
		}
	}
	if ( $1.corkY ) {
		if ( $1.corkY.from ) {
			$0.thisRecord.corkY.from = $1.corkY.from
			;
		}
		if ( $1.corkY.to ) {
			$0.thisRecord.corkY.to = $1.corkY.to
			;
		}
	}
}
function animateFromTo( $0 ) {
	return '  <animate\n'
		+ '\t  href="#' + _0.id
		+ $0.href + '"\n'
		+ '\t  attributeName="' + $0.type + '"\n'
		+ '\t  from="' + $0.from + '"\n'
		+ '\t  to="' + $0.to + '"\n'
		+ '\t  dur="' + _0.speed + '"\n'
		+ '\t  begin="' + $0.begin + '.end"\n'
		+ '\t  fill="freeze" />\n'
	;
}
function animateSize( $0, $1 ) {
	const _1 = new AnimateSize( $0, $1 )
	;
	if ( _1.cork ) {
		_1.href = 'Infinity'
		;
		if ( _1.flip ) {
			if ( _0.vertical ) {
				_1.height = _0.corkSize.height
				; _1.width = _0.corkSize.width
				;
			}
			else {
				_1.height = _0.corkSize.width
				; _1.width = _0.corkSize.height
				;
			}
		}
		else {
			if ( _0.vertical ) {
				_1.height = _0.corkSize.width
				; _1.width = _0.corkSize.height
				;
			}
			else {
				_1.height = _0.corkSize.height
				; _1.width = _0.corkSize.width
				;
			}
		}
	}
	else if ( _1.flip ) {
		_1.height = _0.a
		; _1.width = _0.b2
		;
	}
	_1.string += _0.animateFromTo( {
		type: 'width'
		, href: _1.href
		, from: _1.width * _1.thisPower
		, to: _1.width * _1.nextPower
		, begin: _1.begin
	} )
	; _1.string += _0.animateFromTo( {
		type: 'height'
		, href: _1.href
		, from: _1.height * _1.thisPower
		, to: _1.height * _1.nextPower
		, begin: _1.begin
	} )
	; return _1.string
	;
	function AnimateSize( $0, $1 ) {
		this.begin = $0.begin
		; this.cork = $1
		; this.flip = $0.flip
		; this.height = _0.b2
		; this.href = _0.globalCount
		; this.nextPower = $0.xPower
		; this.string = ''
		; this.thisPower = $0.xPowerMinus1
		; this.width = _0.a
		;
	}
}
function animateTransform( $0, $1 ) {
	const _1 = new AnimateTransform( $0, $1 )
	;
	if ( _1.cork ) {
		_1.href = 'Infinity'
		; _1.id = ''
		;
	}
	_1.string += '  <animateTransform\n'
		+ '\t  href="#' + _0.id + _1.href + '"\n'
		+ _1.id
		+ '\t  attributeName="transform"\n'
		+ '\t  type="rotate"\n'
		+ '\t  from="0, ' + _0.rotateCenter + '"\n'
		+ '\t  to="-90, 0, 0"\n'
		+ '\t  dur="' + _0.speed + '"\n'
		+ '\t  begin="' + _1.begin + '.end"\n'
		+ '\t  fill="freeze" />\n'
	; return _1.string
	;
	function AnimateTransform( $0, $1 ) {
		this.begin = $0.begin
		; this.cork = $1
		; this.href = _0.globalCount
		; this.id = '\t  id="' + _0.id + _0.globalCount
			+ 'animate' + _0.localCount + '"\n'
		; this.string = ''
		;
	}
}
function animateXY( $0, $1 ) {
	const _1 = new AnimateXY( $0, $1 )
	;
	if ( _1.cork ) {
		_1.href = 'Infinity'
		; _1.x.from = _1.thisRecord.corkX.from
		; _1.x.to = _1.thisRecord.corkX.to
		; _1.y.from = _1.thisRecord.corkY.from
		; _1.y.to = _1.thisRecord.corkY.to
		;
	}
	_1.string += _0.animateFromTo( {
		type: 'x'
		, href: _1.href
		, from: _1.x.from
		, to: _1.x.to
		, begin: _1.begin
	} )
	; _1.string += _0.animateFromTo( {
		type: 'y'
		, href: _1.href
		, from: _1.y.from
		, to: _1.y.to
		, begin: _1.begin
	} )
	; return _1.string
	;
	function AnimateXY( $0, $1 ) {
		this.begin = $0.begin
		; this.cork = $1
		; this.href = _0.globalCount
		; this.string = ''
		; this.thisRecord = $0.thisRecord
		; this.x = {
			from: $0.thisRecord.x.from
			, to: $0.thisRecord.x.to
		}
		; this.y = {
			from: $0.thisRecord.y.from
			, to: $0.thisRecord.y.to
		}
		;
	}
}
function dynamicObjects( $0 ) {
	function readNext( $0, $1 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		if ( $1 ) {
			_1.string += $1 + '"\n'
			;
		}
		_1.string += '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
			+ '\t  fill="' + _0.colours[
				( _1.number - 1 ) % _0.colours.length
			] + '" />\n'
		;
		if ( _1.count > -1 ) {
			_0.writeFile(
				_0.file, _1.string, _0.writeOptions, _1.writeNext
			)
			; return
			;
		}
		if ( _1.count > -2 && _0.cork ) {
			_1.string = '  <rect\n'
				+ '\t  id="' + _0.id + 'Infinity"\n'
				+ '\t  stroke="' + _0.cellBorderColour + '"\n'
				+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
				+ '\t  fill="' + _0.cork + '" />\n'
			; _0.writeFile(
				_0.file, _1.string, _0.writeOptions, _1.writeNext
			)
			; return
			;
		}
		_0.part1()
		;
	}
	function writeNext( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		_0.dynamicObjects( _1.count )
		;
	}
	const _1 = new DynamicObjects( $0 )
	; _1.count --
	;
	if ( _0.images ) {
		_1.string += '\t  width="0"\n'
			+ '\t  height="0"\n'
			+ '\t  href="data:image/jpeg;base64,'
		; _1.readFile(
			_0.images[ ( _1.number - 1 ) % _0.images.length ]
			, 'base64'
			, _1.readNext
		)
		; return
		;
	}
	_1.readNext()
	;
	function DynamicObjects( $0 ) {
		this.count = $0
		; this.readNext = readNext
		; this.writeNext = writeNext
		; this.number = _0.repeat - this.count + 1
		; this.string = (
			_0.images ? '  <image\n' : '  <rect\n'
		)
			+ '\t  id="' + _0.id + this.number + '"\n'
		; this.readFile = require( 'fs' ).readFile
		;
	}
}
function endParts() {
	_0.globalCount ++
	;
	if ( ( _0.repeat + 1 ) - _0.globalCount ) {
		_0.localCount = 1
		; _0.thread = {
			record1: null
			, record2: null
			, record3: null
			, record4: null
		}
		; _0.part1()
		; return
		;
	}
	_0.footer()
	;
}
function footer() {
	function next( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			; return
			;
		}
		console.log(
			'> log <\n'
			, 'finished making ' + _0.file
				+ ' with a ' + _0.x + ' scale invariant\n< log >'
		)
		;
	}
	const _1 = new Footer
	;
	if ( _0.loop ) {
		_1.string += '  <animate\n'
			+ _1.href
			+ '\t  id="' + _0.id + 'ResetAnimate"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + _1.resetColour + '"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="' + _0.id + _0.repeat
			+ 'animate' + _0.repeat + '.end"\n'
			+ '\t  fill="freeze" />\n'
			+ '  <animate\n'
			+ _1.href
			+ '\t  id="' + _0.id + 'EndAnimate"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + _1.endColour + '"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="' + _0.id + 'ResetAnimate.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	while ( _1.count < _0.repeat + 1 ) {
		_1.string += '  <animate\n'
			+ '\t  href="#' + _0.id + _1.count + '"\n'
			+ '\t  attributeName="width"\n'
			+ '\t  values="0"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="' + _0.id + 'ResetAnimate.end"\n'
			+ '\t  fill="freeze" />\n'
		; _1.count ++
		;
	}
	if ( _0.cork ) {
		_1.string += '  <animate\n'
			+ '\t  href="#' + _0.id + 'Infinity"\n'
			+ '\t  attributeName="width"\n'
			+ '\t  values="0"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="' + _0.id + 'ResetAnimate.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	_1.string += (
		_0.embed ? '<!-- ' + _0.id + ' end -->' : '</svg>\n'
	)
	; _0.writeFile( _0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Footer() {
		this.count = _0.loop ? 1 : _0.repeat + 1
		; this.endColour = _0.lead ?
			_0.colours[ ( _0.repeat - 1 ) % _0.colours.length ]
			: _0.colours[ 0 ]
		; this.href = '\t  href="#' + _0.id + ( _0.repeat + 1 ) + '"\n'
		; this.next = next
		; this.resetColour = _0.lead ?
			_0.colours[ _0.colours.length  - 1 ]
			: _0.colours[ _0.repeat % _0.colours.length ]
		; this.string = '  <!-- ' + _0.id + ' animation end -->\n'
		;
	}
}
function header() {
	function readNext( $0, $1 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		if ( $1 ) {
			_1.string += $1 + '"\n'
			;
		}
		_1.string += '\t  width="' + _1.width + '"\n'
			+ '\t  height="' + _1.height + '"\n'
			+ '\t  x="' + (
				_0.offset.x
					+ _0.borderSize / 2
			) + '"\n'
			+ '\t  y="' + (
				_0.offset.y
					+ _0.borderSize / 2
			) + '"\n'
			+ '\t  fill="' + _0.colours[ 0 ] + '"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '" />\n'
			+ '  <!-- dynamic ' + _0.id + ' objects -->\n'
		; _0.writeFile(
			_0.file, _1.string, _0.writeOptions, _1.writeNext
		)
		;
	}
	function writeNext( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		_0.dynamicObjects( _0.repeat )
		;
	}
	const _1 = new Header
	;
	if ( _0.embed ) {
		_1.string = ''
		;
	}
	_1.string += '  <!-- static ' + _0.id + ' objects -->\n'
		+ '  <rect\n'
		+ '\t  id="' + _0.id + '0"\n'
		+ '\t  width="' + _0.totalWidth + '"\n'
		+ '\t  height="' + _0.totalHeight + '"\n'
		+ '\t  x="' + _0.offset.x + '"\n'
		+ '\t  y="' + _0.offset.y + '"\n'
	;
	if ( _0.background ) {
		_1.string += '\t  fill="' + _0.background + '"\n'
		;
	}
	_1.string += '\t  stroke="' + _0.borderColour + '"\n'
		+ '\t  stroke-width="' + _0.borderSize + '" />\n'
		+ (
			_0.images ? '  <image\n' : '  <rect\n'
		)
		+ '\t  id="' + _0.id + ( _0.repeat + 1 ) + '"\n'
	;
	if ( _0.images ) {
		_1.string += '\t  href="data:image/jpeg;base64,'
		; _1.readFile(
			_0.images.shift()
			, 'base64'
			, _1.readNext
		)
		; return
		;
	}
	_1.readNext()
	;
	function Header() {
		this.height = _0.vertical ? _0.a : _0.b2
		; this.readFile = require( 'fs' ).readFile
		; this.readNext = readNext
		; this.string = '<svg \n'
			+ '\txmlns="http://www.w3.org/2000/svg"\n'
			+' \txmlns:xlink="http://www.w3.org/1999/xlink"\n'
			+ '\tversion="1.1"\n'
			+ '\tviewBox="' + ( - _0.viewBoxAdd.width )
			+ ' ' + ( - _0.viewBoxAdd.height )
			+ ' ' + ( _0.totalWidth + 2 * _0.viewBoxAdd.width )
			+ ' ' + ( _0.totalHeight + 2 * _0.viewBoxAdd.height )
			+ '"\n'
			+ '\tfill="none" >\n'
		; this.width = _0.vertical ? _0.b2 : _0.a
		; this.writeNext = writeNext
		;
	}
}
function metalPythag() {
	const _1 = new MetalPythag
	; _0.x = ( _1.c - _0.b2 / 2 ) / _0.a
	; _0.totalWidth = _0.vertical ?
		  _0.b2 + ( _0.a * _0.x ) + _0.borderSize
		  : _0.totalWidth
	; _0.totalHeight = _0.vertical ?
		  _0.totalHeight
		  : _0.b2 + ( _0.a * _0.x ) + _0.borderSize
	;
	if ( _0.cork ) {
		_0.corkSize.width = (
			_0.totalHeight - _0.borderSize
		) * _0.x
		; _0.corkSize.height = (
			_0.totalWidth - _0.borderSize
		) * _0.x
		;
	}
	function MetalPythag() {
		this.aSquared = Math.pow( _0.a, 2 )
		; this.bSquared = Math.pow( _0.b2 / 2, 2 )
		; this.cSquared = this.aSquared + this.bSquared
		; this.c = Math.pow( this.cSquared, 1 / 2 )
		;
	}
}
function part1() {
	function addCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus1
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.a * _1.xPowerPlus1
				}
				, corkY: {
					from: _0.offset.y
						+ _0.borderSize / 2
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus1
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _0.offset.x
					+ _0.borderSize / 2
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * _1.xPowerMinus1
					- _0.a * _1.xPower
			}
			, corkY: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus1
				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPower
			}
		} )
		;
	}
	function addRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _0.offset.x
						+ _0.borderSize / 2
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.a * _1.xPowerMinus1
				}
				, y: {
					from: _0.offset.y
						+ _0.borderSize / 2
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus1
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _0.offset.x
					+ _0.borderSize / 2
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * _1.xPowerMinus1
					- _0.a * _1.xPower
			}
			, y: {
				from: _0.offset.y
					+ _0.borderSize / 2
				, to: _0.offset.x
					+ _0.borderSize / 2
			}
		} )
		;
	}
	function addToCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _1.thisRecord.corkX.from
						+ _0.b2 * _1.xPowerMinus1
					, to: _1.thisRecord.corkX.to
						+ _0.b2 * _1.xPower
				}
				, corkY: {
					from: _1.thisRecord.corkY.from
						+ _0.b2 * _1.xPowerMinus2
					, to: _1.thisRecord.corkY.to
						+ _0.b2 * _1.xPowerMinus1
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _1.thisRecord.corkX.from
					+ _0.b2 * _1.xPowerMinus4
				, to: _1.thisRecord.corkX.to
					+ _0.b2 * _1.xPowerMinus3
			}
			, corkY: {
				from: _1.thisRecord.corkY.from
					+ _0.b2 * _1.xPowerMinus1
				, to: _1.thisRecord.corkY.to
					+ _0.b2 * _1.xPower
			}
		} )
		;
	}
	function addToRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _1.thisRecord.x.from
						+ _0.b2 * _1.xPowerMinus5
					, to: _1.thisRecord.x.to
						+ _0.b2 * _1.xPowerMinus4
				}
				, y: {
					from: _1.thisRecord.y.from
						+ _0.b2 * _1.xPowerMinus2
					, to: _1.thisRecord.y.to
						+ _0.b2 * _1.xPowerMinus1
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _1.thisRecord.x.from
					+ _0.b2 * _1.xPowerMinus4
				, to: _1.thisRecord.x.to
					+ _0.b2 * _1.xPowerMinus3
			}
			, y: {
				from: _1.thisRecord.y.from
					+ _0.b2 * _1.xPowerMinus5
				, to: _1.thisRecord.y.to
					+ _0.b2 * _1.xPowerMinus4
			}
		} )
		;
	}
	function changeBegin() {
		if ( _0.lead || _1.firstDynamic ) {
			_1.begin = _1.start + '; ' + _0.id + 'EndAnimate'
			; return
			;
		}
		_1.begin = _0.id + ( _0.globalCount - 1 )
			+ 'animate' + ( _0.globalCount - 1 )
		;
	}
	function next( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _0.thread = {
				record1: _1.record1
				, record2: _1.record2
				, record3: _1.record3
				, record4: _1.record4
			}
			; _0.part2()
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part1
	;
	if ( _1.firstLoop ) {
		_1.changeBegin()
		; _1.string += '  <animate\n'
			+ '\t  href="#' + _0.id
			+ ( _0.repeat + 1 ) + '"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + _1.colour + '"\n'
			+ '\t  dur="0s"\n'
			+ '\t  begin="' + _1.begin + '.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	_0.runPart( _1 )
	;
	function Part1() {
		this.addCorkRecord = addCorkRecord
		; this.addRecord = addRecord
		; this.addToCorkRecord = addToCorkRecord
		; this.addToRecord = addToRecord
		; this.begin = _0.id + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.changeBegin = changeBegin
		; this.colour = _0.globalCount == _0.repeat && _0.lead ?
			_0.colours[ _0.colours.length -1 ]
			: _0.colours[ _0.globalCount % _0.colours.length ]
		; this.firstDynamic = _0.globalCount < 2 ? true : false
		; this.firstLoop = _0.localCount < 5 ? true : false
		; this.flip = _0.vertical ? true : false
		; this.loop = ( _0.globalCount - 1 ) % 4
		; this.next = next
		; this.record1 = _0.thread.record1 ? _0.thread.record1 : {
			x: { from: null, to: null }
			, y: { from: null, to: null }
			, corkX: { from: null, to: null }
			, corkY: { from: null, to: null }
		}
		; this.record2 = _0.thread.record2 ? _0.thread.record2 : null
		; this.record3 = _0.thread.record3 ? _0.thread.record3 : null
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : null
		; this.start = _0.clickStart ?
			_0.id + ( _0.repeat + 1) + '.click' : '0s'
		; this.string = (
			this.firstLoop ?
				'<!-- next dynamic object automation -->\n' : ''
		)
			+ '<!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisRecord = this.record1
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.xPowerMinus5 = Math.pow( _0.x, _0.localCount - 5 )
		; this.xPowerPlus1 = Math.pow( _0.x, _0.localCount + 1 )
		;
	}
}
function part2() {
	function addCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus2
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.a * _1.xPower
				}
				, corkY: {
					from: _0.offset.y
						+ _0.borderSize / 2
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus2
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus1
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * _1.xPowerMinus2
					- _0.a * _1.xPowerPlus1
			}
			, corkY: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus2

				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus1
			}
		} )
		;
	}
	function addRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus2
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.a * _1.xPower
				}
				, y: {
					from: _0.offset.y
						+ _0.borderSize / 2
						+ _0.a * _1.xPower
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus2
						+ _0.a * _1.xPowerPlus1
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _0.offset.x
					+ _0.borderSize / 2
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * _1.xPowerMinus2
					- _0.a * _1.xPowerMinus1
			}
			, y: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus2
				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus1
			}
		} )
		;
	}
	function addToCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _1.thisRecord.corkX.from
						+ _0.b2 * _1.xPowerMinus2
					, to: _1.thisRecord.corkX.to
						+ _0.b2 * _1.xPowerMinus1
				}
				, corkY: {
					from: _1.thisRecord.corkY.from
						+ _0.b2 * _1.xPowerMinus3
					, to: _1.thisRecord.corkY.to
						+ _0.b2 * _1.xPowerMinus2
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _1.record2.corkX.from
					+ _0.b2 * _1.xPowerMinus1
				, to: _1.record2.corkX.to
					+ _0.b2 * _1.xPower
			}
			, corkY: {
				from: _1.record2.corkY.from
					+ _0.b2 * _1.xPowerMinus2
				, to: _1.record2.corkY.to
					+ _0.b2 * _1.xPowerMinus1
			}
		} )
		;
	}
	function addToRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _1.record2.x.from
						+ _0.b2 * _1.xPowerMinus2
					, to: _1.record2.x.to
						+ _0.b2 * _1.xPowerMinus1
				}
				, y: {
					from: _1.record2.y.from
						- _0.b2 * _1.xPowerMinus1
					, to:  _1.record2.y.to
						- _0.b2 * _1.xPower
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _1.record2.x.from
					+ _0.b2 * _1.xPowerMinus5
				, to: _1.record2.x.to
					+ _0.b2 * _1.xPowerMinus4
			}
			, y: {
				from: _1.record2.y.from
					+ _0.b2 * _1.xPowerMinus2
				, to: _1.record2.y.to
					+ _0.b2 * _1.xPowerMinus1
			}
		} )
		;
	}
	function next( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _0.thread = {
				record1: _1.record1
				, record2: _1.record2
				, record3: _1.record3
				, record4: _1.record4
			}
			; _0.part3()
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part2
	; _0.runPart( _1 )
	;
	function Part2() {
		this.addCorkRecord = addCorkRecord
		; this.addRecord = addRecord
		; this.addToCorkRecord = addToCorkRecord
		; this.addToRecord = addToRecord
		; this.begin = _0.id + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.flip = _0.vertical ? false : true
		; this.loop = ( _0.globalCount - 2 ) % 4
		; this.next = next
		; this.record1 = _0.thread.record1
		; this.record2 = _0.thread.record2 ? _0.thread.record2 : {
			x: { from: null, to: null }
			, y: { from: null, to: null }
			, corkX: { from: null, to: null }
			, corkY: { from: null, to: null }
		}
		; this.record3 = _0.thread.record3 ? _0.thread.record3 : null
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : null
		; this.string = '<!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisRecord = this.record2
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.xPowerMinus5 = Math.pow( _0.x, _0.localCount - 5 )
		; this.xPowerPlus1 = Math.pow( _0.x, _0.localCount + 1 )
		;
	}
}
function part3() {
	function addCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * this.xPowerMinus3
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.a * this.xPowerMinus1
				}
				, corkY: {
					from: _0.offset.y
						+ _0.borderSize / 2
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * this.xPowerMinus3
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * this.xPowerMinus2
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * this.xPowerMinus3
					- _0.a * this.xPower
			}
			, corkY: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * this.xPowerMinus3
				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * this.xPowerMinus2
			}
		} )
		;
	}
	function addRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * this.xPowerMinus3
						+ _0.a * this.xPower
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.b2 * this.xPower
				}
				, y: {
					from: _0.offset.y
						+ _0.borderSize / 2
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * this.xPowerMinus3
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * this.xPowerMinus2

				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * this.xPowerMinus3
					- _0.a * this.xPower
			}
			, y: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * this.xPowerMinus3
					+ _0.a * this.xPower
				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * this.xPowerMinus2
					+ _0.a * this.xPowerPlus1
			}
		} )
		;
	}
	function addToCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _1.thisRecord.corkX.from
						+ _0.b2 * _1.xPowerMinus3
					, to: _1.thisRecord.corkX.to
						+ _0.b2 * _1.xPowerMinus2
				}
				, corkY: {
					from: _1.thisRecord.corkY.from
						+ _0.b2 * _1.xPowerMinus4
					, to: _1.thisRecord.corkY.to
						+ _0.b2 * _1.xPowerMinus3
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _1.record3.corkX.from
					+ _0.b2 * _1.xPowerMinus2
				, to: _1.record3.corkX.to
					+ _0.b2 * _1.xPowerMinus1
			}
			, corkY: {
				from: _1.record3.corkY.from
					+ _0.b2 * _1.xPowerMinus3
				, to: _1.record3.corkY.to
					+ _0.b2 * _1.xPowerMinus2
			}
		} )
		;
	}
	function addToRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _1.record3.x.from
						- _0.b2 * _1.xPowerMinus1
					, to: _1.record3.x.to
						- _0.b2 * _1.xPower
				}
				, y: {
					from: _1.record3.y.from
						+ _0.b2 * _1.xPowerMinus4
					, to: _1.record3.y.to
						+ _0.b2 * _1.xPowerMinus3
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _1.record3.x.from
					+ _0.b2 * _1.xPowerMinus2
				, to: _1.record3.x.to
					+ _0.b2 * _1.xPowerMinus1
			}
			, y: {
				from: _1.record3.y.from
					- _0.b2 * _1.xPowerMinus1
				, to:  _1.record3.y.to
					- _0.b2 * _1.xPower
			}
		} )
		;
	}
	function next( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _0.thread = {
				record1: _1.record1
				, record2: _1.record2
				, record3: _1.record3
				, record4: _1.record4
			}
			; _0.part4()
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part3
	; _0.runPart( _1 )
	;
	function Part3() {
		this.addCorkRecord = addCorkRecord
		; this.addRecord = addRecord
		; this.addToCorkRecord = addToCorkRecord
		; this.addToRecord = addToRecord
		; this.begin = _0.id + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.flip = _0.vertical ? true : false
		; this.next = next
		; this.record1 = _0.thread.record1
		; this.record2 = _0.thread.record2
		; this.record3 = _0.thread.record3 ? _0.thread.record3 : {
			x: { from: null, to: null }
			, y: { from: null, to: null }
			, corkX: { from: null, to: null }
			, corkY: { from: null, to: null }
		}
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : null
		; this.string = '<!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisRecord = this.record3
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.xPowerPlus1 = Math.pow( _0.x, _0.localCount + 1 )
		;
	}
}
function part4() {
	function addCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus4
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.a * _1.xPowerMinus2
				}
				, corkY: {
					from: _0.offset.y
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus1
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus4
						+ _0.b2 * _1.xPower
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus3
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * _1.xPowerMinus4
					- _0.a * _1.xPowerMinus1
			}
			, corkY: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus4
				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus3
			}
		} )
		;
	}
	function addRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus4
					, to: - _0.offset.y
						- _0.borderSize / 2
						- _0.b2 * _1.xPowerMinus1
						- _0.a * _1.xPower
				}
				, y: {
					from: _0.offset.y
						+ _0.borderSize / 2
					, to: _0.offset.x
						+ _0.borderSize / 2
						+ _0.b2 * _1.xPowerMinus4
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus3
					+ _0.a * _1.xPower
				, to: - _0.offset.y
					- _0.borderSize / 2
					- _0.b2 * _1.xPowerMinus4
					- _0.b2 * _1.xPower
			}
			, y: {
				from: _0.offset.y
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus4
				, to: _0.offset.x
					+ _0.borderSize / 2
					+ _0.b2 * _1.xPowerMinus3
			}
		} )
		;
	}
	function addToCorkRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				corkX: {
					from: _1.thisRecord.corkX.from
						+ _0.b2 * _1.xPowerMinus4
					, to: _1.thisRecord.corkX.to
						+ _0.b2 * _1.xPowerMinus3
				}
				, corkY: {
					from: _1.thisRecord.corkY.from
						+ _0.b2 * _1.xPowerMinus1
					, to: _1.thisRecord.corkY.to
						+ _0.b2 * _1.xPower
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			corkX: {
				from: _1.record4.corkX.from
					+ _0.b2 * _1.xPowerMinus3
				, to: _1.record4.corkX.to
					+ _0.b2 * _1.xPowerMinus2
			}
			, corkY: {
				from: _1.record4.corkY.from
					+ _0.b2 * _1.xPowerMinus4
				, to: _1.record4.corkY.to
					+ _0.b2 * _1.xPowerMinus3
			}
		} )
		;
	}
	function addToRecord() {
		if ( _0.vertical ) {
			_0.addRecord( _1, {
				x: {
					from: _1.record4.x.from
						+ _0.b2 * _1.xPowerMinus4
					, to: _1.record4.x.to
						+ _0.b2 * _1.xPowerMinus3
				}
				, y: {
					from: _1.record4.y.from
						+ _0.b2 * _1.xPowerMinus5
					, to: _1.record4.y.to
						+ _0.b2 * _1.xPowerMinus4
				}
			} )
			; return
			;
		}
		_0.addRecord( _1, {
			x: {
				from: _1.record4.x.from
					- _0.b2 * _1.xPowerMinus1
				, to: _1.record4.x.to
					- _0.b2 * _1.xPower
			}
			, y: {
				from: _1.record4.y.from
					+ _0.b2 * _1.xPowerMinus4
				, to: _1.record4.y.to
					+ _0.b2 * _1.xPowerMinus3
			}
		} )
		;
	}
	function next( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		if ( _0.globalCount - _0.localCount ) {
			_0.localCount ++
			; _0.thread = {
				record1: _1.record1
				, record2: _1.record2
				, record3: _1.record3
				, record4: _1.record4
			}
			; _0.part1()
			; return
			;
		}
		_0.endParts()
		;
	}
	const _1 = new Part4
	; _0.runPart( _1 )
	;
	function Part4() {
		this.addCorkRecord = addCorkRecord
		; this.addRecord = addRecord
		; this.addToCorkRecord = addToCorkRecord
		; this.addToRecord = addToRecord
		; this.begin = _0.id + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.flip = _0.vertical ? false : true
		; this.next = next
		; this.record1 = _0.thread.record1
		; this.record2 = _0.thread.record2
		; this.record3 = _0.thread.record3
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : {
			x: { from: null, to: null }
			, y: { from: null, to: null }
			, corkX: { from: null, to: null }
			, corkY: { from: null, to: null }
		}
		; this.string = '<!-- ' + _0.id + _0.globalCount
			+ ' animate' + _0.localCount + ' -->\n'
		; this.thisRecord = this.record4
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.xPowerMinus5 = Math.pow( _0.x, _0.localCount - 5 )
		;
	}
}
function runPart( $0 ) {
	if ( $0.thisRecord.x.from == null ) {
		$0.addRecord()
		;
		if ( _0.cork ) {
			$0.addCorkRecord()
			;
		}
	}
	if ( _0.localCount > 4 ) {
		$0.addToRecord()
		;
		if ( _0.cork ) {
			$0.addToCorkRecord()
			;
		}
	}
	if ( _0.globalCount == _0.localCount || ! _0.lead ) {
		$0.string += _0.animateSize( $0 )
		; $0.string += _0.animateXY( $0 )
		;
		if ( _0.cork ) {
			$0.string += _0.animateSize( $0, true )
			; $0.string += _0.animateXY( $0, true )
			; $0.string += _0.animateTransform( $0, true )
			;
		}
	}
	$0.string += _0.animateTransform( $0 )
	; _0.writeFile( _0.file, $0.string, _0.writeOptions, $0.next )
	;
}
const _0 = new App
; _0.metalPythag()
; _0.header()
;
function App() {
	this.data = require( './app.json' )
	; this.a = this.data.a
//	; this.a = 990000/199
	; this.addRecord = addRecord
	; this.animateFromTo = animateFromTo
	; this.animateSize = animateSize
	; this.animateTransform = animateTransform
	; this.animateXY = animateXY
	; this.b2 = this.data.b2
	; this.background = this.data.background
	; this.borderColour = this.data.borderColour
	; this.borderSize = this.data.borderSize
	; this.cellBorderColour = this.data.cellBorderColour
	; this.cellBorderSize = this.data.cellBorderSize
	; this.clickStart = this.data.clickStart
	; this.cork = this.data.cork
	; this.corkSize = {
		width: null
		, height: null
	}
	; this.colours = this.data.colours
	; this.dynamicObjects = dynamicObjects
	; this.embed = this.data.embed
	; this.endParts = endParts
	; this.file = this.data.file
	; this.footer = footer
	; this.globalCount = 1
	; this.header = header
	; this.id = this.data.id
	; this.images = this.data.images.length > 0 ?
		this.data.images : false
	; this.lead = this.data.lead
	; this.localCount = 1
	; this.loop = this.data.loop
	; this.metalPythag = metalPythag
	; this.offset = {
		x: this.data.offset.x
		, y: this.data.offset.y
	}
	; this.part1 = part1
	; this.part2 = part2
	; this.part3 = part3
	; this.part4 = part4
	; this.repeat = this.data.repeat
	; this.rotateCenter = this.data.rotateCenter
	; this.runPart = runPart
	; this.speed = this.data.speed
	; this.thread = {
		record1: null
		, record1: null
		, record2: null
		, record3: null
	}
	; this.vertical = this.data.vertical
	; this.totalHeight = this.vertical ?
		this.a + this.borderSize : null
	; this.totalWidth = this.vertical ?
		null : this.a + this.borderSize
	; this.viewBoxAdd = this.data.viewBoxAdd
	; this.writeFile = require('fs').writeFile
	; this.writeOptions = {
		encoding: 'utf8'
		, flag: 'a'
	}
	; this.x = null
	;
}
