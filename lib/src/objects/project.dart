import "dart:convert" show json;
import "package:http/http.dart" as http;

class Project {
  final String name;
  final String description;
  final Uri imageUrl;
  final Uri codeUrl;
  final Uri demoUrl;

  bool get hasDemo => demoUrl.toString().isNotEmpty;

  const Project(this.name, this.description, this.imageUrl, this.codeUrl, this.demoUrl);

  static Future<Project> github(
    String repoName, 
    {String name, 
    String imageUrl = "", 
    String demoUrl = ""}
  ) async {
    var codeUrl = Uri.parse("https://github.com/periodicaidan/$repoName");
    var githubApiUrl = Uri.parse("https://api.github.com/repos/periodicaidan/$repoName");
    Map<String, dynamic> repo = await http.get(githubApiUrl)
      .then((res) => json.decode(res.body));
    
    name = name ?? repoName;
    String description = repo["description"];

    return Project(name, description, Uri.parse(imageUrl), codeUrl, Uri.parse(demoUrl));
  }
}