//Makes a new shader (context, vertex, fragment)
function IntializeShader(gl, source_vs, source_fs){
	//Initialize shaders, load, and compile
	var vs = gl.createShader(gl.VERTEX_SHADER);
	var fs = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(vs, source_vs);
	gl.shaderSource(fs, source_fs);

	gl.compileShader(vs);
	gl.compileShader(fs);

	//Error handling
	var error = false;

	if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS)){
		alert("An error occured compiling the shaders: "+gl.getShaderInfoLog(vs));
		error = true;
	}

	if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS)){
		alert("An error occured compiling the shaders: "+gl.getShaderInfoLog(fs));
		error = true;
	}

	//Create shader program with vs and fs
	var program = gl.createProgram();

	//Attach shaders
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);

	//Link program
	if(gl.linkProgram(program) == 0){
		console.log("gl.linkProgram(program) failed with error code 0");
		error = true;
	}

	if(error){
		console.log("Failed to initialize shader.");
		return false
	}

	console.log("Shader successfully created!");

	return program;
}