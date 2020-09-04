#! /usr/bin/env node
process.chdir( __dirname )
function animateFromTo( $0 ) {
	return '  <animate\n'
		+ '\t  xlink:href="#rectangle'
		+ $0.href + '"\n'
		+ '\t  attributeName="' + $0.type + '"\n'
		+ '\t  from="' + $0.from + '"\n'
		+ '\t  to="' + $0.to + '"\n'
		+ '\t  dur="' + _0.speed + '"\n'
		+ '\t  begin="' + $0.begin + '.end"\n'
		+ '\t  fill="freeze" />\n'
	;
}
function animateSize( _1, odd, cork ) {
	_1.string += _0.animateFromTo( {
		type: 'width'
		, href: cork ? 'Infinity' : _0.globalCount
		, from: cork ?
			odd ? _0.corkSize.width * _1.xPowerMinus1
			: _0.corkSize.height * _1.xPowerMinus1
		: odd ? _0.a * _1.xPowerMinus1 : _0.b2 * _1.xPowerMinus1
		, to: cork ?
			odd ? _0.corkSize.width * _1.xPower
			: _0.corkSize.height * _1.xPower
		: odd ? _0.a * _1.xPower : _0.b2 * _1.xPower
		, begin: _1.begin
	} )
		+ _0.animateFromTo( {
			type: 'height'
			, href: cork ? 'Infinity' : _0.globalCount
			, from: cork ?
				odd ? _0.corkSize.height * _1.xPowerMinus1
				: _0.corkSize.width * _1.xPowerMinus1
			: odd ? _0.b2 * _1.xPowerMinus1 : _0.a * _1.xPowerMinus1
			, to: cork ?
				odd ? _0.corkSize.height * _1.xPower
				: _0.corkSize.width * _1.xPower
			: odd ? _0.b2 * _1.xPower : _0.a * _1.xPower
			, begin: _1.begin
		} )
	;
}
function animateTransform( _1, cork ) {
	_1.string += '  <animateTransform\n'
		+ '\t  xlink:href="#rectangle' + (
			cork ? 'Infinity' : _0.globalCount
		) + '"\n'
		+ (
			cork ? '' : '\t  id="rectangle' + _0.globalCount
				+ 'animate' + _0.localCount + '"\n'
		)
		+ '\t  attributeName="transform"\n'
		+ '\t  type="rotate"\n'
		+ '\t  from="0, ' + _0.rotateCenter + '"\n'
		+ '\t  to="-90, 0, 0"\n'
		+ '\t  dur="' + _0.speed + '"\n'
		+ '\t  begin="' + _1.begin + '.end"\n'
		+ '\t  fill="freeze" />\n'
	;
}
function animateXY( _1, cork ) {
	_1.string += _0.animateFromTo( {
		type: 'x'
		, href: cork ? 'Infinity' : _0.globalCount
		, from: cork ? _1.thisRecord.corkX.from : _1.thisRecord.x.from
		, to: cork ? _1.thisRecord.corkX.to : _1.thisRecord.x.to
		, begin: _1.begin
	} )
		+ _0.animateFromTo( {
			type: 'y'
			, href: cork ? 'Infinity' : _0.globalCount
			, from: cork ?
				_1.thisRecord.corkY.from : _1.thisRecord.y.from
			, to: cork ? _1.thisRecord.corkY.to : _1.thisRecord.y.to
			, begin: _1.begin
		} )
	;
}
function dynamicObjects( $0 ) {
	function next( $0 ) {
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
	if ( _1.count > -1 ) {
		_0.writeFile( _0.file, _1.string, _0.writeOptions, _1.next )
		; return
		;
	}
	if ( _1.count > -2 && _0.cork ) {
		_1.string = '  <rect\n'
			+ '\t  id="rectangleInfinity"\n'
			+ '\t  width="' + _0.corkSize.width + '"\n'
			+ '\t  height="' + _0.corkSize.height + '"\n'
			+ '\t  x="' + ( _0.borderSize / 2 ) + '"\n'
			+ '\t  y="' + ( _0.b2 + _0.borderSize / 2 ) + '"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
			+ '\t  fill="' + _0.cork + '" />\n'
		; _0.writeFile( _0.file, _1.string, _0.writeOptions, _1.next )
		; return
		;
	}
	_0.part1()
	;
	function DynamicObjects( $0 ) {
		this.count = $0
		; this.next = next
		; this.number = _0.repeat - this.count + 1
		; this.string = '  <rect\n'
			+ '\t  id="rectangle' + this.number + '"\n'
			+ '\t  width="0"\n'
			+ '\t  height="0"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '"\n'
			+ '\t  fill="' + _0.colours[
				( this.number - 1 ) % _0.colours.length
			] + '" />\n'
		;
	}
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
			+ '\t  xlink:href="#rectangle'
			+ ( _0.repeat + 1 ) + '"\n'
			+ '\t  id="resetAnimate"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + (
				_0.lead ? _0.colours[ _0.colours.length  - 1 ]
					: _0.colours[ _0.repeat % _0.colours.length ]
			) + '"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="rectangle' + _0.repeat
			+ 'animate' + _0.repeat + '.end"\n'
			+ '\t  fill="freeze" />\n'
			+ '  <animate\n'
			+ '\t  xlink:href="#rectangle'
			+ ( _0.repeat + 1 ) + '"\n'
			+ '\t  id="endAnimate"\n'
			+ '\t  attributeName="fill"\n'
			+ '\t  values="' + (
				_0.lead ?
					_0.colours[
						( _0.repeat - 1 ) % _0.colours.length
					]
					: _0.colours[0]
			) + '"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="resetAnimate.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	while ( _1.count < _0.repeat + 1 ) {
		_1.string += '  <animate\n'
			+ '\t  xlink:href="#rectangle'+ _1.count + '"\n'
			+ '\t  attributeName="width"\n'
			+ '\t  values="0"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="resetAnimate.end"\n'
			+ '\t  fill="freeze" />\n'
		; _1.count ++
		;
	}
	if ( _0.cork ) {
		_1.string += '  <animate\n'
			+ '\t  xlink:href="#rectangleInfinity"\n'
			+ '\t  attributeName="width"\n'
			+ '\t  values="0"\n'
			+ '\t  dur="' + _0.speed + '"\n'
			+ '\t  begin="resetAnimate.end"\n'
			+ '\t  fill="freeze" />\n'
		;
	}
	_1.string += '</svg>\n'
	; _0.writeFile( _0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Footer() {
		this.count = _0.loop ? 1 : _0.repeat + 1
		; this.next = next
		; this.string = '  <!-- animation end -->\n'
		;
	}
}
function header() {
	function next( $0 ) {
		if ( $0 ) {
			console.log( '> warn <\n', $0, '\n', _1, '\n< warn >' )
			;
		}
		_0.dynamicObjects( _0.repeat )
		;
	}
	const _1 = new Header
	; _0.writeFile(	_0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Header() {
		this.next = next
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
			+ '  <!-- static objects -->\n'
			+ '  <rect\n'
			+ '\t  id="rectangle0"\n'
			+ '\t  width="' + _0.totalWidth + '"\n'
			+ '\t  height="' + _0.totalHeight + '"\n'
			+ '\t  x="0"\n'
			+ '\t  y="0"\n'
			+ (
				_0.background ?
					'\t  fill="' + _0.background + '"\n' : ''
			)
			+ '\t  stroke="' + _0.borderColour + '"\n'
			+ '\t  stroke-width="' + _0.borderSize + '" />\n'
			+ '  <rect\n'
			+ '\t  id="rectangle' + ( _0.repeat + 1 ) + '"\n'
			+ '\t  width="' + _0.a + '"\n'
			+ '\t  height="' + _0.b2 + '"\n'
			+ '\t  x="' + ( _0.borderSize / 2 ) + '"\n'
			+ '\t  y="' + ( _0.borderSize / 2 ) + '"\n'
			+ '\t  fill="' + _0.colours[ 0 ] + '"\n'
			+ '\t  stroke="' + _0.cellBorderColour + '"\n'
			+ '\t  stroke-width="' + _0.cellBorderSize + '" />\n'
			+ '  <!-- dynamic objects -->\n'
		;
	}
}
function metalPythag() {
	const _1 = new MetalPythag
	; _0.x = ( _1.c - _1.b ) / _0.a
	; _0.totalHeight = _0.b2 + ( _0.a * _0.x ) + _0.borderSize
	;
	if ( _0.cork ) {
		_0.corkSize.width = ( _0.totalHeight - _0.borderSize ) * _0.x
		; _0.corkSize.height = ( _0.totalWidth - _0.borderSize ) * _0.x
		;
	}
	function MetalPythag() {
		this.aSquared = Math.pow( _0.a, 2 )
		; this.b = _0.b2 / 2
		; this.bSquared = Math.pow( this.b, 2 )
		; this.cSquared = this.aSquared + this.bSquared
		; this.c = Math.pow( this.cSquared, 1 / 2 )
		;
	}
}
function part1() {
	function addToRecord() {
		_1.record1.x.from = _1.record1.x.from
			+ _0.b2 * _1.xPowerMinus4
		; _1.record1.x.to = _1.record1.x.to
			+ _0.b2 * _1.xPowerMinus3
		; _1.record1.y.from = _1.record1.y.from
			+ _0.b2 * _1.xPowerMinus5
		; _1.record1.y.to = _1.record1.y.to
			+ _0.b2 * _1.xPowerMinus4
		; _1.record1.corkX.from = _1.record1.corkX.from
			+ _0.b2 * _1.xPowerMinus4
		; _1.record1.corkX.to = _1.record1.corkX.to
			+ _0.b2 * _1.xPowerMinus3
		; _1.record1.corkY.from = _1.record1.corkY.from
			+ _0.b2 * _1.xPowerMinus1
		; _1.record1.corkY.to = _1.record1.corkY.to
			+ _0.b2 * _1.xPower
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
		_0.globalCount ++
		;
		if ( ( _0.repeat + 1 ) - _0.globalCount ) {
			_0.localCount = 1
			; _0.thread = { record1: null }
			; _0.part1()
			; return
			;
		}
		_0.footer()
		;
	}
	const _1 = new Part1
	;
	if ( _0.localCount > 4 ) {
		_1.addToRecord()
		;
	}
	_1.string += '<!-- rectangle' + _0.globalCount
		+ ' animate' + _0.localCount + ' -->\n'
		+ (
			_0.localCount < 5 ? '  <animate\n'
				+ '\t  xlink:href="#rectangle'
				+ ( _0.repeat + 1 ) + '"\n'
				+ '\t  attributeName="fill"\n'
				+ '\t  values="' + (
					_0.globalCount == _0.repeat && _0.lead ?
						_0.colours[ _0.colours.length -1 ]
						: _0.colours[
							_0.globalCount % _0.colours.length
						]
				) + '"\n'
				+ '\t  dur="0s"\n'
				+ '\t  begin="' + _1.begin + '.end"\n'
				+ '\t  fill="freeze" />\n'
			: ''
		)
	;
	if ( _0.globalCount == _0.localCount || ! _0.lead ) {
		_0.animateSize( _1, true )
		; _0.animateXY( _1 )
		;
		if ( _0.cork ) {
			_0.animateSize( _1, true, true )
			; _0.animateXY( _1, true )
			; _0.animateTransform( _1, true )
			;
		}
	}
	_0.animateTransform( _1 )
	; _0.writeFile( _0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Part1() {
		this.addToRecord = addToRecord
		; this.start = _0.clickStart ?
			'rectangle' + ( _0.repeat + 1) + '.click' : '0s'
		; this.begin = _0.localCount < 5 ?
			_0.globalCount < 2 || _0.lead ? this.start + '; endAnimate'
			: 'rectangle' + ( _0.globalCount - 1 )
			+ 'animate' + ( _0.globalCount - 1 )
		: 'rectangle' + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.loop = ( _0.globalCount - 1 ) % 4
		; this.next = next
		; this.string = _0.localCount < 5 ?
			'<!-- next dynamic object automation -->\n' : ''
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.xPowerMinus5 = Math.pow( _0.x, _0.localCount - 5 )
		; this.record1 = _0.thread.record1 ? _0.thread.record1 : {
			x: {
				from: _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus1
						+ _0.a * this.xPower
						+ _0.borderSize / 2
				)
			}
			, y: {
				from: _0.borderSize / 2
				, to: _0.borderSize / 2
			}
			, corkX: {
				from: _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus1
						+ _0.a * this.xPower
						+ _0.borderSize / 2
				)
			}
			, corkY: {
				from: _0.b2 * this.xPowerMinus1
					+_0.borderSize / 2
				, to: _0.b2 * this.xPower
					+ _0.borderSize / 2
			}
		}
		; this.record2 = _0.thread.record2 ? _0.thread.record2 : null
		; this.record3 = _0.thread.record3 ? _0.thread.record3 : null
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : null
		; this.thisRecord = this.record1
		;
	}
}
function part2() {
	function addToRecord() {
		_1.record2.x.from = _1.record2.x.from
			+ _0.b2 * _1.xPowerMinus5
		; _1.record2.x.to = _1.record2.x.to
			+ _0.b2 * _1.xPowerMinus4
		; _1.record2.y.from = _1.record2.y.from
			+ _0.b2 * _1.xPowerMinus2
		; _1.record2.y.to = _1.record2.y.to
			+ _0.b2 * _1.xPowerMinus1
		; _1.record2.corkX.from = _1.record2.corkX.from
			+ _0.b2 * _1.xPowerMinus1
		; _1.record2.corkX.to = _1.record2.corkX.to
			+ _0.b2 * _1.xPower
		; _1.record2.corkY.from = _1.record2.corkY.from
			+ _0.b2 * _1.xPowerMinus2
		; _1.record2.corkY.to = _1.record2.corkY.to
			+ _0.b2 * _1.xPowerMinus1
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
		_0.globalCount ++
		;
		if ( ( _0.repeat + 1 ) - _0.globalCount ) {
			_0.localCount = 1
			; _0.thread = { record1: null }
			; _0.part1()
			; return
			;
		}
		_0.footer()
		;
	}
	const _1 = new Part2
	;
	if ( _0.localCount > 4 ) {
		_1.addToRecord()
		;
	}
	_1.string += '<!-- rectangle' + _0.globalCount
		+ ' animate' + _0.localCount + ' -->\n'
	;
	if ( _0.globalCount == _0.localCount || ! _0.lead ) {
		_0.animateSize( _1 )
		; _0.animateXY( _1 )
		;
		if ( _0.cork ) {
			_0.animateSize( _1, false, true )
			; _0.animateXY( _1, true )
			; _0.animateTransform( _1, true )
			;
		}
	}
	_0.animateTransform( _1 )
	; _0.writeFile(	_0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Part2() {
		this.addToRecord = addToRecord
		; this.begin = 'rectangle' + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.loop = ( _0.globalCount - 2 ) % 4
		; this.next = next
		; this.string = ''
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.xPowerMinus5 = Math.pow( _0.x, _0.localCount - 5 )
		; this.xPowerPlus1 = Math.pow( _0.x, _0.localCount + 1 )
		; this.record1 = _0.thread.record1
		; this.record2 = _0.thread.record2 ? _0.thread.record2 : {
			x: {
				from: _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus2
						+ _0.a * this.xPowerMinus1
						+ _0.borderSize / 2
				)
			}
			, y: {
				from: _0.b2 * this.xPowerMinus2
					+ _0.borderSize / 2
				, to: _0.b2 * this.xPowerMinus1
					+ _0.borderSize / 2
			}
			, corkX: {
				from: _0.b2 * this.xPowerMinus1
					+ _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus2
						+ _0.a * this.xPowerPlus1
						+ _0.borderSize / 2
				)
			}
			, corkY: {
				from: _0.b2 * this.xPowerMinus2
					+_0.borderSize / 2
				, to: _0.b2 * this.xPowerMinus1
					+ _0.borderSize / 2
			}
		}
		; this.record3 = _0.thread.record3 ? _0.thread.record3 : null
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : null
		; this.thisRecord = this.record2
		;
	}
}
function part3() {
	function addToRecord() {
		_1.record3.x.from = _1.record3.x.from
			+ _0.b2 * _1.xPowerMinus2
		; _1.record3.x.to = _1.record3.x.to
			+ _0.b2 * _1.xPowerMinus1
		; _1.record3.y.from = _1.record3.y.from
			- _0.b2 * _1.xPowerMinus1
		; _1.record3.y.to = _1.record3.y.to
			- _0.b2 * _1.xPower
		; _1.record3.corkX.from = _1.record3.corkX.from
			+ _0.b2 * _1.xPowerMinus2
		; _1.record3.corkX.to = _1.record3.corkX.to
			+ _0.b2 * _1.xPowerMinus1
		; _1.record3.corkY.from = _1.record3.corkY.from
			+ _0.b2 * _1.xPowerMinus3
		; _1.record3.corkY.to = _1.record3.corkY.to
			+ _0.b2 * _1.xPowerMinus2
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
		_0.globalCount ++
		;
		if ( ( _0.repeat + 1 ) - _0.globalCount ) {
			_0.localCount = 1
			; _0.thread = { record1: null }
			; _0.part1()
			; return
			;
		}
		_0.footer()
		;
	}
	const _1 = new Part3
	;
	if ( _0.localCount > 4 ) {
		_1.addToRecord()
		;
	}
	_1.string +=  '<!-- rectangle' + _0.globalCount
		+ ' animate' + _0.localCount + ' -->\n'
	;
	if ( _0.globalCount == _0.localCount || ! _0.lead ) {
		_0.animateSize( _1, true )
		; _0.animateXY( _1 )
		;
		if ( _0.cork ) {
			_0.animateSize( _1, true, true )
			; _0.animateXY( _1, true )
			; _0.animateTransform( _1, true )
			;
		}
	}
	_0.animateTransform( _1 )
	; _0.writeFile(	_0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Part3() {
		this.addToRecord = addToRecord
		; this.begin = 'rectangle' + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.next = next
		; this.string = ''
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerPlus1 = Math.pow( _0.x, _0.localCount + 1 )
		; this.record1 = _0.thread.record1
		; this.record2 = _0.thread.record2
		; this.record3 = _0.thread.record3 ? _0.thread.record3 : {
			x: {
				from: _0.b2 * this.xPowerMinus2
					+ _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus3
						+ _0.a * this.xPower
						+ _0.borderSize / 2
				)
			}
			, y: {
				from: _0.b2 * this.xPowerMinus3
					+ _0.a * this.xPower
					+ _0.borderSize / 2
				, to: _0.b2 * this.xPowerMinus2
					+ _0.a * this.xPowerPlus1
					+ _0.borderSize / 2
			}
			, corkX: {
				from: _0.b2 * this.xPowerMinus2
					+ _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus3
						+ _0.a * this.xPower
						+ _0.borderSize / 2
				)
			}
			, corkY: {
				from: _0.b2 * this.xPowerMinus3
					+ _0.borderSize / 2
				, to: _0.b2 * this.xPowerMinus2
					+ _0.borderSize / 2
			}
		}
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : null
		; this.thisRecord = this.record3
		;
	}
}
function part4() {
	function addToRecord() {
		_1.record4.x.from = _1.record4.x.from
			- _0.b2 * _1.xPowerMinus1
		; _1.record4.x.to = _1.record4.x.to
			- _0.b2 * _1.xPower
		; _1.record4.y.from = _1.record4.y.from
			+ _0.b2 * _1.xPowerMinus4
		; _1.record4.y.to = _1.record4.y.to
			+ _0.b2 * _1.xPowerMinus3
		; _1.record4.corkX.from = _1.record4.corkX.from
			+ _0.b2 * _1.xPowerMinus3
		; _1.record4.corkX.to = _1.record4.corkX.to
			+ _0.b2 * _1.xPowerMinus2
		; _1.record4.corkY.from = _1.record4.corkY.from
			+ _0.b2 * _1.xPowerMinus4
		; _1.record4.corkY.to = _1.record4.corkY.to
			+ _0.b2 * _1.xPowerMinus3
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
		_0.globalCount ++
		;
		if ( ( _0.repeat + 1 ) - _0.globalCount ) {
			_0.localCount = 1
			; _0.thread = { record1: null }
			; _0.part1()
			; return
			;
		}
		_0.footer()
		;
	}
	const _1 = new Part4
	;
	if ( _0.localCount > 4 ) {
		_1.addToRecord()
		;
	}
	_1.string += '<!-- rectangle' + _0.globalCount
		+ ' animate' + _0.localCount + ' -->\n'
	;
	if ( _0.globalCount == _0.localCount || ! _0.lead ) {
		_0.animateSize( _1 )
		; _0.animateXY( _1 )
		;
		if ( _0.cork ) {
			_0.animateSize( _1, false, true )
			; _0.animateXY( _1, true )
			; _0.animateTransform( _1, true )
			;
		}
	}
	_0.animateTransform( _1 )
	; _0.writeFile( _0.file, _1.string, _0.writeOptions, _1.next )
	;
	function Part4() {
		this.addToRecord = addToRecord
		; this.begin = 'rectangle' + _0.globalCount
			+ 'animate' + ( _0.localCount - 1 )
		; this.next = next
		; this.string = ''
		; this.xPower = Math.pow( _0.x, _0.localCount )
		; this.xPowerMinus1 = Math.pow( _0.x, _0.localCount - 1 )
		; this.xPowerMinus2 = Math.pow( _0.x, _0.localCount - 2 )
		; this.xPowerMinus3 = Math.pow( _0.x, _0.localCount - 3 )
		; this.xPowerMinus4 = Math.pow( _0.x, _0.localCount - 4 )
		; this.record1 = _0.thread.record1
		; this.record2 = _0.thread.record2
		; this.record3 = _0.thread.record3
		; this.record4 = _0.thread.record4 ? _0.thread.record4 : {
			x: {
				from: _0.b2 * this.xPowerMinus3
					+ _0.a * this.xPower
					+ _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus4
						+ _0.b2 * this.xPower
						+ _0.borderSize / 2
				)
			}
			, y: {
				from: _0.b2 * this.xPowerMinus4
					+ _0.borderSize / 2
				, to: _0.b2 * this.xPowerMinus3
					+ _0.borderSize / 2
			}
			, corkX: {
				from: _0.b2 * this.xPowerMinus3
					+ _0.borderSize / 2
				, to: -(
					_0.b2 * this.xPowerMinus4
						+ _0.a * this.xPowerMinus1
						+ _0.borderSize / 2
				)
			}
			, corkY: {
				from: _0.b2 * this.xPowerMinus4
					+ _0.borderSize / 2
				, to: _0.b2 * this.xPowerMinus3
					+ _0.borderSize / 2
			}
		}
		; this.thisRecord = this.record4
		;
	}
}
const _0 = new App
; _0.metalPythag()
; _0.header()
;
function App() {
	this.data = require( './app.json' )
	; this.a = this.data.a
//	; this.a = 990000/199
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
	; this.file = this.data.file
	; this.footer = footer
	; this.globalCount = 1
	; this.header = header
	; this.lead = this.data.lead
	; this.localCount = 1
	; this.loop = this.data.loop
	; this.metalPythag = metalPythag
	; this.part1 = part1
	; this.part2 = part2
	; this.part3 = part3
	; this.part4 = part4
	; this.repeat = this.data.repeat
	; this.rotateCenter = this.data.rotateCenter
	; this.speed = this.data.speed
	; this.thread = {
		record1: null
		, record1: null
		, record2: null
		, record3: null
	}
	; this.totalHeight = null
	; this.totalWidth = this.a + this.borderSize
	; this.viewBoxAdd = this.data.viewBoxAdd
	; this.writeFile = require('fs').writeFile
	; this.writeOptions = {
		encoding: 'utf8'
		, flag: 'a'
	}
	; this.x = null
	;
}
